import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from 'src/app/models/city/city';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(provinceId: number): Observable<City> | null {
    let path = environment.URL + '/provinces/' + provinceId + '/cities';
    return this.http.get<City>(path);
  }
}
