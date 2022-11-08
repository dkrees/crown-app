import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Climate } from '../climate/climate.component';
import { CrownService } from '../crown.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  handbook;
  companyStanding = 10;
  climate: Climate = 'lion';
  phase = 'military_affairs';
  crownActions: {steps?: any[]; climate?: any} = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private crownService: CrownService
    ) { }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');

    this.crownService.getHandbook().subscribe(data => {
      this.handbook = data;
      this.crownTurn();
    });
  }

  /**
   *
   * @param dX sides of die
   * @returns random value from 1 up to dX sides of die
   */
  rollDie(dX = 6): number {
    return Math.floor(Math.random() * dX) + 1;
  }

  /**
   *
   * @param nDice
   * @returns Number of successes
   */
  check(nDice: number): number[] {
    // Die value upto (and inclusive) for success is 2
    const successOn = 2;
    const diceResults = [];
    for (let index = 0; index < nDice; index++) {
      diceResults.push(this.rollDie());
    }
    return diceResults.filter((result) => result <= successOn);
  }

  standingChange(e) {
    console.log('Standing change:', e);
  }

  climateChange(e) {
    console.log('Climate change:', e);
    this.climate = e.value;
    this.crownTurn();
  }

  phaseChange(e) {
    console.log('Phase change:', e);
    this.phase = e;
    this.crownTurn();
  }

  crownTurn() {
    this.crownActions = this.handbook[this.phase];
  }

}
