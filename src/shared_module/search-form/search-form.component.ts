import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  @Input() fields: {
    name: string;
    type: string;
    label: string;
    defaultValue?: any;
  }[] = [];
  @Input() service: any;
  @Output() dataSearched = new EventEmitter<any>();

  currentPage = 1;
  pageSize = 10;
  totalItems = 0;
  searchForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
    this.loadSearchResults();
  }

  createForm() {
    const formGroupConfig: any = {};
    this.fields.forEach((field) => {
      formGroupConfig[field.name] = [field.defaultValue];
    });
    formGroupConfig['maxResultCount'] = [this.pageSize];
    this.searchForm = this.fb.group(formGroupConfig);
  }

  loadSearchResults() {
    const skipCount = (this.currentPage - 1) * this.pageSize;
    const searchParams = {
      ...this.searchForm.value,
      skipCount: skipCount,
      maxResultCount: this.pageSize,
    };

    this.service.search(searchParams).subscribe(
      (response: any) => {
        this.totalItems = response.totalCount;
        this.dataSearched.emit({
          items: response.items,
          totalItems: response.totalCount,
        });
      },
      (error: any) => {
        console.error('Error loading search results:', error);
      }
    );
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.loadSearchResults();
  }

  onSearch() {
    this.currentPage = 1;
    this.loadSearchResults();
  }

  resetSearch() {
    this.searchForm.reset();
    this.currentPage = 1;
    this.loadSearchResults();
  }
}
