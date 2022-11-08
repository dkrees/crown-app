import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrownService {

  constructor(
    private http: HttpClient
  ) { }

  getHandbook(): Observable<any> {
    return this.http.get<any>('assets/crown/handbook.json');
  }
}
