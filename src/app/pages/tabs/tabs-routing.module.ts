import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'basiccontrol',
        loadChildren: () => import('../basic-control/basic-control.module').then(m =>m.BasicControlPageModule)
      },
      {
        path: 'advancedcontrol',
        loadChildren: () => import('../advanced-control/advanced-control.module').then(m => m.AdvancedControlPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
