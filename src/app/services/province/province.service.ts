import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Province } from 'src/app/models/province/province';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService {

  constructor(private http: HttpClient) { }

  getProvince(contryId: number): Observable<Province> | null {
    let path = environment.URL + '/countries/' + contryId + '/provinces';
    return this.http.get<Province>(path);
  }
}
