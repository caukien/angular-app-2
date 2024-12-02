export class CommuneRoot {
  totalCount: number = 0;
  items: Commune[] = [];

  constructor(totalCount: number = 0, items: Commune[] = []) {
    this.totalCount = totalCount;
    this.items = items;
  }
}
export class Commune {
  id: number = 0;
  maTinh: string = '';
  maHuyen: string = '';
  maXa: string = '';
  tenXa: any = null;
  cap: string = '';
  isActive: boolean = false;
  isXaNgheo: boolean = false;
  isXaMienNui: boolean = false;
  isXaDanToc: boolean = false;
  isThanhThi: boolean = false;

  constructor(
    id: number = 0,
    maTinh: string = '',
    maHuyen: string = '',
    maXa: string = '',
    tenXa: any = null,
    cap: string = '',
    isActive: boolean = false,
    isXaNgheo: boolean = false,
    isXaMienNui: boolean = false,
    isXaDanToc: boolean = false,
    isThanhThi: boolean = false
  ) {
    this.id = id;
    this.maTinh = maTinh;
    this.maHuyen = maHuyen;
    this.maXa = maXa;
    this.tenXa = tenXa;
    this.cap = cap;
    this.isActive = isActive;
    this.isXaNgheo = isXaNgheo;
    this.isXaMienNui = isXaMienNui;
    this.isXaDanToc = isXaDanToc;
    this.isThanhThi = isThanhThi;
  }
}
