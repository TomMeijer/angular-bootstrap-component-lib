import { NgModule } from '@angular/core';
import { TableComponent } from './table/table.component';
import {CommonModule} from "@angular/common";
import {PaginationModule} from "ngx-bootstrap/pagination";
import { CardComponent } from './card/card.component';
import {RouterModule} from "@angular/router";
import { FormComponent } from './form/form.component';
import {FormsModule} from "@angular/forms";
import {NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { LabelComponent } from './label/label.component';
import { InputPrependComponent } from './input-prepend/input-prepend.component';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    FormComponent,
    LabelComponent,
    InputPrependComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    RouterModule,
    FormsModule,
    NgbTooltipModule
  ],
  exports: [
    TableComponent,
    CardComponent,
    FormComponent
  ]
})
export class BsLibModule { }
