import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-standing',
  templateUrl: './standing.component.html',
  styleUrls: ['./standing.component.scss'],
})
export class StandingComponent implements OnInit {

  @Input() companyStanding: number;
  @Output() standingDidChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  movesLeft() {
    if (this.companyStanding <= 4) {
      this.companyStanding = 0;
    } else {
      this.companyStanding -= 2;
    }
    this.standingDidChange.emit(this.companyStanding);
  }

  movesRight() {
    if (this.companyStanding < 16) {
      this.companyStanding += 2;
      this.standingDidChange.emit(this.companyStanding);
    }
  }

}
