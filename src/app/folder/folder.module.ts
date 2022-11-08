import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { ClimateComponent } from '../climate/climate.component';
import { StandingComponent } from '../standing/standing.component';
import { PhaseComponent } from '../phase/phase.component';
import { PromiseComponent } from '../promise/promise.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
  ],
  declarations: [FolderPage, ClimateComponent, StandingComponent, PhaseComponent, PromiseComponent]
})
export class FolderPageModule {}
