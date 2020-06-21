import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicControlPage } from './basic-control.page';

const routes: Routes = [
  {
    path: '',
    component: BasicControlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BasicControlPageRoutingModule {}
