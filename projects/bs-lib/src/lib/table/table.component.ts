import {Component, Input, OnInit} from '@angular/core';
import {TableConfig} from "./config/table-config";

@Component({
  selector: 'tm-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()
  public config: TableConfig;
  @Input()
  public data: any[];
  @Input()
  public totalItems: number;

  constructor() { }

  ngOnInit(): void {
  }

  public resolveValue(obj: any, data: string | ((obj: any, td: HTMLElement) => any), td: HTMLElement): any {
    if (typeof data === 'string') {
      return data.split('.').reduce((prev, curr) => prev && prev[curr], obj);
    }
    return data(obj, td);
  }

  public getElement(id: string): HTMLElement {
    return document.getElementById(id);
  }

}