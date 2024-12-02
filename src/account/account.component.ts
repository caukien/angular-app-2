import { Component, OnInit } from '@angular/core';
import { UserSession } from '../model/account';
import { AccountService } from './account.service';
import { DateHelper } from '../helper/formatdate';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  user: UserSession = new UserSession();
  userId: string = '3a1687d7-8ba5-8aca-6dea-5fb823b88ff3';

  constructor(private accountService: AccountService) {}

  get formattedNgaySinh(): string {
    return DateHelper.formatDate(this.user.ngaySinh);
  }

  ngOnInit() {
    this.accountService.getUser().subscribe(
      (response) => {
        this.user = response.userSession;
        console.log(this.user);
      },
      (error) => {
        console.error('Error getting user data:', error);
      }
    );
  }

  updateAccount(): void {
    debugger;
    const payload = {
      userId: this.userId,
      email: this.user.email,
      name: this.user.name,
      // ngaySinh: this.user.ngaySinh,
      gioiTinh: this.user.gioiTinh,
    };

    this.accountService.updateUser(payload).subscribe(
      (response) => {
        console.log('Account updated successfully:', response);
        alert('Account updated successfully!');
      },
      (error) => {
        console.error('Error updating account:', error);
        alert('Failed to update account. Please try again.');
      }
    );
  }
}
