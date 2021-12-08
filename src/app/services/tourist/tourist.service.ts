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
}
