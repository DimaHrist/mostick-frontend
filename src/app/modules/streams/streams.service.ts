import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamsService {

  private readonly url = 'api/v1/mostick/streams'

  constructor(private readonly http: HttpClient) { }

  public getStreams(): Observable<any> {
    return this.http.get(this.url)
  }

  public getStreamById(): Observable<any> {
    return this.http.get(this.url)
  }
}
