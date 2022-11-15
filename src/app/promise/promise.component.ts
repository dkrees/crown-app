import { Component, Input, OnInit } from '@angular/core';

interface Promise {
  description: string;
  cost?: string|number;
  gain?: string|number;
  note?: string;
  mandatory?: boolean;
}

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {

  @Input() promise: Promise;
  bgColor;

  constructor() { }

  ngOnInit() {
    this.bgColor = this.promise.cost ? 'warning' : 'success';

    if (this.promise.mandatory) {
      this.bgColor = this.promise.cost ? 'danger' : 'tertiary';
    }
  }

}
