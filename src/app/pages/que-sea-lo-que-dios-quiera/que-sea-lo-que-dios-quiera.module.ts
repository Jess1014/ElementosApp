import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../../components/components.module';
import { IonicModule } from '@ionic/angular';

import { QueSeaLoQueDiosQuieraPageRoutingModule } from './que-sea-lo-que-dios-quiera-routing.module';

import { QueSeaLoQueDiosQuieraPage } from './que-sea-lo-que-dios-quiera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueSeaLoQueDiosQuieraPageRoutingModule,
    ComponentsModule
  ],
  declarations: [QueSeaLoQueDiosQuieraPage]
})
export class QueSeaLoQueDiosQuieraPageModule {}
