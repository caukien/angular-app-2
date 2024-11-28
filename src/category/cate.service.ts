import { Injectable } from '@angular/core';
import { Cate } from '../model/cate';

@Injectable()
export class CateService {
  constructor() {}

  private cates: Cate[] = [new Cate(0, 'aksjdfkasjk')];
  private lastId = 1;

  addCate(cate: Cate): void {
    this.lastId++;
    cate.id = this.lastId;
    this.cates.push(cate);
  }

  getCate(): Cate[] {
    return this.cates;
  }

  getCateById(id: number): Cate | undefined {
    return this.cates.find((c) => c.id === id);
  }

  updateCate(updateCate: Cate): void {
    const index = this.cates.findIndex((c) => c.id == updateCate.id);
    if (index !== -1) {
      this.cates[index] = updateCate;
    }
  }

  deleteCate(item: Cate): void {
    this.cates = this.cates.filter((c) => c.id !== item.id);
  }
}
