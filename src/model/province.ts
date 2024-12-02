export class ProvinceRoot {
  totalCount: number = 0;
  items: Province[] = [];

  constructor(totalCount: number = 0, items: Province[] = []) {
    this.totalCount = totalCount;
    this.items = items;
  }
}

export class Province {
  id: number = 0;
  maTinh: string = '';
  maHuyen: string = '';
  tenHuyen: string = '';
  cap: string = '';
  isActive: boolean = false;

  constructor(
    id: number = 0,
    maTinh: string = '',
    maHuyen: string = '',
    tenHuyen: string = '',
    cap: string = '',
    isActive: boolean = false
  ) {
    this.id = id;
    this.maTinh = maTinh;
    this.maHuyen = maHuyen;
    this.tenHuyen = tenHuyen;
    this.cap = cap;
    this.isActive = isActive;
  }
}
