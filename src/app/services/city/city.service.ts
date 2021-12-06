import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Province } from 'src/app/models/province/province';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getCities(provinceId: number): Observable<Province> | null {
    let path = environment.URL + '/provinces/' + provinceId + '/cities';
    return this.http.get<Province>(path);
  }
}
