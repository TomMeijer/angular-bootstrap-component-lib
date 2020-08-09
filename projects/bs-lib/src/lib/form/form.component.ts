import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {TmInput} from "./config/tm-input";

@Component({
  selector: 'tm-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input()
  public inputs: TmInput[];
  @Input()
  public model: any;
  @Input()
  public className: string;
  @Input()
  public small: boolean;
  @Input()
  public submitText: string;
  @Input()
  public submitBtnClass: string;
  @Input()
  public tooltipIcon: string;

  @Output()
  public onSubmit: EventEmitter<NgForm> = new EventEmitter();

  public inputGroups: TmInput[][];
  public wasValidated: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.inputGroups = this.getInputGroups();
  }

  public submitForm(form: NgForm): void {
    this.wasValidated = !form.valid;
    this.onSubmit.emit(form);
  }

  public changeInput(input: TmInput, event: Event): void {
    if (input.onChange) {
      input.onChange(event);
    }
  }

  private getInputGroups(): any {
    const inputGroups = [];
    const groups = [];
    for (let input of this.inputs) {
      if (!input.group) {
        inputGroups.push([input])
      } else if (!groups.includes(input.group)) {
        inputGroups.push(this.inputs.filter(i => i.group === input.group));
        groups.push(input.group);
      }
    }
    return inputGroups;
  }

}
