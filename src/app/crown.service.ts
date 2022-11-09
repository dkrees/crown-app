import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Climate } from './climate/climate.component';

@Injectable({
  providedIn: 'root'
})
export class CrownService {

  // crownClimate$: Observable<Climate>;
  // private climateSubject: Subject<Climate>;
  crownClimate: BehaviorSubject<Climate> = new BehaviorSubject('lion');

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
}
