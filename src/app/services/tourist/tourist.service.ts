import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tourist } from 'src/app/models/tourist/tourist';

@Injectable({
  providedIn: 'root'
})
export class TouristService {

  constructor(private http: HttpClient) { }

  getTourist(email: string): Observable<Tourist> | null {
    let path = environment.URL + '/tourist/'+email;
    return this.http.get<Tourist>(path);
  }
}
