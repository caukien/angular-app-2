export class District {
  id: number = 0;
  // strVungSinhThai: string = '';
  // strVungDiaLy: string = '';
  // strVungMien: string = '';
  // vungMien: any = null;
  // vungDiaLy: any = null;
  maTinh: string = '';
  tenTinh: string = '';
  cap: string = '';
  isActive: boolean = true;
  // vungSinhThai: any = null;

  constructor(
    id: number = 0,
    // strVungSinhThai: string = '',
    // strVungDiaLy: string = '',
    // strVungMien: string = '',
    // vungMien: any = null,
    // vungDiaLy: any = null,
    maTinh: string = '',
    tenTinh: string = '',
    cap: string = '',
    isActive: boolean = true,
    vungSinhThai: any = null
  ) {
    this.id = id;
    // this.strVungSinhThai = strVungSinhThai;
    // this.strVungDiaLy = strVungDiaLy;
    // this.strVungMien = strVungMien;
    // this.vungMien = vungMien;
    // this.vungDiaLy = vungDiaLy;
    this.maTinh = maTinh;
    this.tenTinh = tenTinh;
    this.cap = cap;
    this.isActive = isActive;
    // this.vungSinhThai = vungSinhThai;
  }
}

export class DistrictRoot {
  totalCount: number = 0;
  items: District[] = [];

  constructor(totalCount: number = 0, items: District[] = []) {
    this.totalCount = totalCount;
    this.items = items;
  }
}
