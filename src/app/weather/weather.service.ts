import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import Unsplash from 'unsplash-js';

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  authorize() {
    const unsplash = new Unsplash({
      accessKey: "L8mPR0jA7RwOYRinXKMOV7SDsggWI34Xsj5izcMuqvs",
      secret: "NbjcLXOiGwc-PwH5-BH17k2PvX_Qr-1hND7U4UojL4o",
      callbackUrl: "http://localhost:4200/unsplash"
    });

    const authenticationUrl = unsplash.auth.getAuthenticationUrl([
      'write_collections',
      'read_collections',
      'public',
      'read_user',
      'write_user',
      'read_photos',
      'write_photos',
      'write_likes',
      'write_followers'
    ]);

    return authenticationUrl;
  }

  getAccessToken(code) {
    const body = {
      client_id: 'L8mPR0jA7RwOYRinXKMOV7SDsggWI34Xsj5izcMuqvs',
      client_secret: 'NbjcLXOiGwc-PwH5-BH17k2PvX_Qr-1hND7U4UojL4o',
      redirect_uri: 'http://localhost:4200/unsplash',
      code: code['code'],
      grant_type: 'authorization_code'
    }
    return this.http.post('https://unsplash.com/oauth/token', body)
  }


  getCollections() {
    const token = JSON.parse(localStorage.getItem('accessToken'));

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token['access_token']}` )
    return this.http.get('https://api.unsplash.com//photos', {headers: headers})
  }

}
