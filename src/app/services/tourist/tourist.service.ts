import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) { }

  getTourist(email: string): Observable<any> | null {
    let path = environment.URL + '/tourists/' + email;
    return this.http.get<any>(path);
  }

  sendForm(model: any): Observable<any> | null {
    let params = JSON.stringify(model);
    let path = environment.URL + '/tourist-photos/associate';
    console.log(params);
    return this.http.post(path, params, { headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' } });
  }
}
