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

  sendForm(model: any, callback: any) {
    let params = JSON.stringify(model);
    let path = environment.URL + '/tourist-photos/associate';
    /*
    return this.http.post(path, params, { headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin':'*' } });*/

    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        callback(xhr.response);
      }
    }
    xhr.open('POST', path, true);
    xhr.send(model);
  }

  getTouristsByActivity(): Observable<any> | null {
    let path = environment.URL + '/activites/tourists/';
    return this.http.get<any>(path);
  }

  getTouristsByTransport(): Observable<any> | null {
    let path = environment.URL + '/travel-modes/tourists/';
    return this.http.get<any>(path);
  }
}
