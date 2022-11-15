import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HandbookPageRoutingModule } from './handbook-routing.module';

import { HandbookPage } from './handbook.page';
import { PromiseComponent } from '../promise/promise.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HandbookPageRoutingModule,
  ],
  declarations: [HandbookPage, PromiseComponent]
})
export class HandbookPageModule {}
