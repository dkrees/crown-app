import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Climate } from '../climate/climate.component';
import { CrownService } from '../crown.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {

  public roundPhases = [
    {name: 'Vote to Deregulate', value: 'vote_to_deregulate'},
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

  handbook;
  companyStanding = 10;
  climate: Climate;
  phaseIndex = 1;
  phase: {name: string; value: string};
  crownActions: {steps?: any[]; climate?: any} = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private crownService: CrownService,
    private actionSheetCtrl: ActionSheetController
    ) { }

    ngOnInit() {
      // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
      // this.phaseIndex = this.roundPhases.findIndex(c => c.value === this.phase.value);
      setTimeout(() => {
        this.crownService.getClimate().subscribe((climate: Climate) => {
          console.log('climate changed to:', climate);
          this.climateChange(climate);
        });
      }, 0);


    this.phase = this.roundPhases[this.phaseIndex];

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

  climateChange(climate: Climate) {
    this.climate = climate;
    this.crownTurn();
  }

  previousPhase() {
    if (this.phaseIndex > 0) {
      this.phaseIndex--;
    } else {
      this.phaseIndex = this.roundPhases.length-1;
    }
    this.phase = this.roundPhases[this.phaseIndex];
    this.crownTurn();
  }

  nextPhase() {
    if (this.phaseIndex < this.roundPhases.length-1) {
      this.phaseIndex++;
    } else {
      this.phaseIndex = 0;
    }
    this.phase = this.roundPhases[this.phaseIndex];
    this.crownTurn();
  }

  crownTurn() {
    this.crownActions = this.handbook[this.phase.value];
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Example header',
      subHeader: 'Example subheader',
      buttons: [
        {
          text: 'Bull',
          data: {
            action: 'bull',
          },
        },
        {
          text: 'Stag',
          data: {
            action: 'stag',
          },
        },
        {
          text: 'Lion',
          data: {
            action: 'lion',
          },
        },
        {
          text: 'Bear',
          data: {
            action: 'bear',
          },
        },
        {
          text: 'Peacock',
          data: {
            action: 'peacock',
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    const climate = result.data.action as Climate;
    console.log(climate);
    this.climateChange(climate);
  }

}
