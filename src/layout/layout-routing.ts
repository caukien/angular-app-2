import { Route } from '@angular/router';

const layoutRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('./layout.module').then((l) => l.LayoutModule),
    children: [
      {
        path: 'product',
        loadChildren: () =>
          import('../product/product.module').then((p) => p.ProductModule),
      },
      {
        path: 'category',
        loadChildren: () =>
          import('../category/category.module').then((c) => c.CategoryModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((a) => a.AccountModule),
      },
      {
        path: 'district',
        loadChildren: () =>
          import('../district/district.module').then((d) => d.DistrictModule),
      },
      {
        path: 'province',
        loadChildren: () =>
          import('../province/province.module').then((p) => p.ProvinceModule),
      },
      {
        path: 'commune',
        loadChildren: () =>
          import('../commune/commune.module').then((c) => c.CommuneModule),
      },
    ],
  },
];

export default layoutRoutes;
