import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandbookPageRoutingModule } from './handbook-routing.module';

import { HandbookPage } from './handbook.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandbookPageRoutingModule,
  ],
  declarations: [HandbookPage]
})
export class HandbookPageModule {}
