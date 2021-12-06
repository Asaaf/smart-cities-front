import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from 'src/app/models/country/country';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country> | null {
    let path = environment.URL + '/countries';
    return this.http.get<Country>(path);
  }
}
