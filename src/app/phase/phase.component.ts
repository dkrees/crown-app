import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-phase',
  templateUrl: './phase.component.html',
  styleUrls: ['./phase.component.scss'],
})
export class PhaseComponent implements OnInit {

  @Input() phase = 'london_season';
  @Output() phaseDidChange: EventEmitter<string> = new EventEmitter();

  phaseIndex: number;

  public roundPhases = [
    {name: 'London Season', value: 'london_season'},
    {name: 'Family', value: 'family'},
    {name: 'Firms', value: 'firms'},
    {name: 'Hiring', value: 'hiring'},
    {name: 'Chairman', value: 'chairman'},
    {name: 'Director of Trade', value: 'director_of_trade'},
    {name: 'Manager of Shipping', value: 'manager_of_shipping'},
    {name: 'Military Affairs', value: 'military_affairs'},
    {name: 'Presidency Operations', value: 'presidency_operations'},
    {name: 'Governors', value: 'governors'},
    {name: 'Commanders', value: 'commanders'},
    {name: 'Presidents', value: 'presidents'},
    {name: 'Superintendent of Trade in China', value: 'china'},
    {name: 'Revenue', value: 'revenue'},
    {name: 'Events in India', value: 'events_in_india'},
    {name: 'Parliament Meets', value: 'parliament_meets'},
    {name: 'Upkeep & Refresh', value: 'upkeep_refresh'}
  ];


  constructor() { }

  ngOnInit() {
    this.phaseIndex = this.roundPhases.findIndex(c => c.value === this.phase);
    console.log(this.phaseIndex);
  }

  movesLeft() {
    if (this.phaseIndex > 0) {
      this.phaseIndex--;
    } else {
      this.phaseIndex = this.roundPhases.length-1;
    }
    this.phaseDidChange.emit(this.roundPhases[this.phaseIndex].value);
  }

  movesRight() {
    if (this.phaseIndex < this.roundPhases.length-1) {
      this.phaseIndex++;
    } else {
      this.phaseIndex = 0;
    }
    this.phaseDidChange.emit(this.roundPhases[this.phaseIndex].value);
  }

}
