import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transport } from 'src/app/models/transport/transport';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  constructor(private http: HttpClient) { }

  getTravelModes(): Observable<Transport> | null {
    let path = environment.URL + '/travel-modes';
    return this.http.get<Transport>(path);
  }
}
