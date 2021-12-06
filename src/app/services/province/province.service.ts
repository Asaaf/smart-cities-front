import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from 'src/app/models/country/country';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getProvince(contryId: number): Observable<Country> | null {
    let path = environment.URL + '/countries/' + contryId + '/provinces';
    return this.http.get<Country>(path);
  }
}
