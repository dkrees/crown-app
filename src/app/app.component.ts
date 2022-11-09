import { Component, OnInit } from '@angular/core';
import { CrownService, Mode } from './crown.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  // public climates: {title: string; value: Climate; icon: string; selected: boolean}[] = [
  //   { title: 'Bull', value: 'bull', icon: 'mail', selected: false },
  //   { title: 'Stag', value: 'stag', icon: 'paper-plane', selected: false },
  //   { title: 'Lion', value: 'lion', icon: 'heart', selected: false },
  //   { title: 'Bear', value: 'bear', icon: 'archive', selected: false },
  //   { title: 'Peacock', value: 'peacock', icon: 'trash', selected: false },
  // ];

  // climate: Climate = 'lion';
  mode: Mode;

  constructor(
    private crownService: CrownService
  ) {}

  ngOnInit(): void {

    // const currentClimate = this.climates.find(({value}) => value === this.climate);
    // this.selectedClimate(currentClimate);

    this.crownService.getSoloMode().subscribe((solo: Mode) => {
      this.mode = solo;
    });
  }

  soloModeChange(e: Event) {
    this.crownService.setSoloMode(this.mode);
  }

  // selectedClimate(climate: {title: string; value: Climate; icon: string; selected: boolean}) {
  //   this.climates.forEach(item => {
  //     item.selected = false;
  //   });
  //   climate.selected = true;
  //   this.crownService.setClimate(climate.value);
  // }
}
