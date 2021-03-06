import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tm-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input()
  public appearance: 'circle' | '';
  @Input()
  public animation: 'progress' | 'progress-dark' | 'pulse' | 'false';
  @Input()
  public count: number = 1;
  @Input()
  public height: string;
  @Input()
  public width: string;
  @Input()
  public marginTop: string;
  @Input()
  public marginBottom: string;
  @Input()
  public marginLeft: string;
  @Input()
  public marginRight: string;

  constructor() { }

  ngOnInit(): void {
  }

}
