import { Component, OnInit } from '@angular/core';
import { CrownService, Mode } from './crown.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  mode: Mode;

  constructor(
    private crownService: CrownService
  ) {}

  ngOnInit(): void {
    this.crownService.getSoloMode().subscribe((solo: Mode) => {
      this.mode = solo;
    });
  }

  soloModeChange(e: Event) {
    this.crownService.setSoloMode(this.mode);
  }
}
