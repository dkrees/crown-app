import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export type Mode = 'solo' | 'twoPlayer';
export type Climate = 'bull' | 'stag' | 'lion' | 'bear' | 'peacock';

@Injectable({
  providedIn: 'root'
})
export class CrownService {

  // crownClimate$: Observable<Climate>;
  // private climateSubject: Subject<Climate>;
  crownClimate: BehaviorSubject<Climate> = new BehaviorSubject('lion');
  soloMode: BehaviorSubject<Mode> = new BehaviorSubject('solo');

  constructor(
    private http: HttpClient
  ) {
    // this.climateSubject = new Subject<Climate>();
    // this.crownClimate$ = this.climateSubject.asObservable();
  }

  getHandbook(): Observable<any> {
    return this.http.get<any>('assets/crown/handbook.json');
  }

  setClimate(climate: Climate) {
    console.log('setting climate to:', climate);
    this.crownClimate.next(climate);
  }

  getClimate(): Observable<Climate> {
    return this.crownClimate.asObservable();
  }

  setSoloMode(mode: Mode) {
    console.log('setting solo mode to:', mode);
    this.soloMode.next(mode);
  }

  getSoloMode(): Observable<Mode> {
    return this.soloMode.asObservable();
  }
}
