import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdvancedControlPage } from './advanced-control.page';

const routes: Routes = [
  {
    path: '',
    component: AdvancedControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvancedControlPageRoutingModule {}
