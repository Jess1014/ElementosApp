import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueSeaLoQueDiosQuieraPage } from './que-sea-lo-que-dios-quiera.page';

const routes: Routes = [
  {
    path: '',
    component: QueSeaLoQueDiosQuieraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueSeaLoQueDiosQuieraPageRoutingModule {}
