import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Auth {
  token: string,
  user_id: number,
  created_at: string,
  is_used: boolean
}

export interface User {
  username: string,
  is_admin: boolean,
  avatar: string,
  ls_id: number
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public token$ = new BehaviorSubject('');
  public user$ = new BehaviorSubject(undefined);

  private readonly getTokenUrl = 'api/v1/users/verify_token';
  private readonly getUserUrl = 'api/v1/users/me';
  private readonly lutraLink = 'https://lutrastickers.com/external_auth/login/';

  constructor(private readonly http: HttpClient) { }

  public auth(): Observable<any> {
    return this.http.get(this.getTokenUrl)
  }

  public getUser(): Observable<any> {
    const url = this.getUserUrl + `?token=${'452fcc6e-6423-45e1-b5ff-219942f552d2'}`;
    return this.http.get(url);
  }

  public lutraAuth(): void {
    window.open(`${this.lutraLink}?token=${'452fcc6e-6423-45e1-b5ff-219942f552d2'}&project=mostick`, '_blank')
  }
}
