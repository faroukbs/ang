import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnonceRoutingModule } from './annonce-routing.module';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AddComponent,
    ListComponent],
  imports: [
    CommonModule,
    AnnonceRoutingModule,
 
  ]
})
export class AnnonceModule { }
