import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Place } from 'src/app/models/place/place';


@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  constructor(private http: HttpClient) { }

  getPlaces(): Observable<Place> | null {
    let path = environment.URL + '/places';
    return this.http.get<Place>(path);
  }
}
