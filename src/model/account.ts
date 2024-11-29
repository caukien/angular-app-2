export class Root {
  id: string = '';
  tenantId: any = null;
  userSession: UserSession = new UserSession();
  grantedPolicies: string[] = [];
  tenantDto: any = null;
  application: Application = new Application();
  setting: Setting = new Setting();
}

export class UserSession {
  tenantId: any = null;
  userName: string = '';
  email: string = '';
  phoneNumber: string = '';
  emailConfirmed: boolean = false;
  surname: string = '';
  name: string = '';
  lockoutEnd: any = null;
  avatarDocumentId: any = null;
  fullName: string = '';
  khoHangId: any = null;
  nhanVienId: any = null;
  roleLevel: any = null;
  shopId: any = null;
  khoMainId: any = null;
  hostLevel: any = null;
  maShop: any = null;
  tenShop: any = null;
  address: any = null;
  soQuyId: any = null;
  ngaySinh: string = '';
  gioiTinh: number = 0;
  diaChi: any = null;
  maTinh: any = null;
  tenTinh: any = null;
  maHuyen: any = null;
  tenHuyen: any = null;
  maXa: any = null;
  tenXa: any = null;
  maGoiCuoc: any = null;
  ngayKetThucGoiCuoc: any = null;
  soLuongTaiKhoan: number = 0;
  id: string = '';
}

export class Application {
  version: string = '';
  releaseDate: string = '';
}

export class Setting {
  showInputThongTinKham: boolean = false;
}
