import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Activity } from 'src/app/models/activity/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity> | null {
    let path = environment.URL + '/activities';
    return this.http.get<Activity>(path);
  }
}
