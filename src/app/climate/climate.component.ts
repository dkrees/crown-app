import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrownService } from '../crown.service';

export type Climate = 'bull' | 'stag' | 'lion' | 'bear' | 'peacock';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.scss'],
})
export class ClimateComponent implements OnInit {

  @Input() climate: Climate;
  @Output() climateDidChange: EventEmitter<Climate> = new EventEmitter();

  climateIndex: number;

  public climates: {value: Climate}[] = [
    {value: 'bull'},
    {value: 'stag'},
    {value: 'lion'},
    {value: 'bear'},
    {value: 'peacock'},
  ];

  constructor(
    private crownService: CrownService
  ) { }

  ngOnInit() {
    this.climateIndex = this.climates.findIndex(c => c.value === this.climate);
  }

  movesLeft() {
    if (this.climateIndex > 0) {
      this.climateIndex--;
      this.updateClimate(this.climates[this.climateIndex].value);
    }
  }

  movesRight() {
    if (this.climateIndex < this.climates.length-1) {
      this.climateIndex++;
      this.updateClimate(this.climates[this.climateIndex].value);
    }
  }

  updateClimate(climate: Climate) {
    this.crownService.setClimate(climate);
    this.climateDidChange.emit(climate);
  }

}
