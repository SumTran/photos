import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import Unsplash from 'unsplash-js';

@Injectable({
  providedIn: "root"
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  buildAuthentication(): Unsplash {
    console.log("/* BUILD AUTHENTICATION */")

    let unsplashApi: Unsplash = new Unsplash({
      applicationId: "4d875470fc82df4d4fe10a9b27baa98899b2ae6805a00cd05048ccc915bc152f",
      secret: "41981a229c57ad3980a4bb158609b82152095de31f508d473b778fa421b41d0b"
    });

    const authenticationUrl = unsplashApi.auth.getAuthenticationUrl([
      "public",
      "read_user",
      "write_user",
      "read_photos",
      "write_photos"
    ]);

    return unsplashApi;
  }

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

  renameCollection() {
    const body = {title: 'new Collect'}
   const token = JSON.parse(localStorage.getItem('accessToken'));

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token['access_token']}` )

    return this.http.put('https://api.unsplash.com/collections/bb6ba70894355c9cc33714621bbe61ca', body, {headers: headers})
  }

  getCollections() {
    const token = JSON.parse(localStorage.getItem('accessToken'));

    const headers = new HttpHeaders().set('Authorization', `Bearer ${token['access_token']}` )
    return this.http.get('https://api.unsplash.com//photos', {headers: headers})
  }

  fetCode() {
    const params = {
      client_id: '878049988068-m0kes856fbv6d1uuljvtvodcbegjcsqt.apps.googleusercontent.com',
      response_type: 'code',
      scope: 'https://www.googleapis.com/auth/gmail.send',
      redirect_uri: 'http://localhost:4200/unsplash'
    }
    return this.http.get('https://accounts.google.com/o/oauth2/v2/auth', {params: params})
  }

  getToken(code) {
    const headers = new HttpHeaders().set('Content-Type', 'Content-Type')
    const body = {
      client_id: '878049988068-m0kes856fbv6d1uuljvtvodcbegjcsqt.apps.googleusercontent.com',
      code: code['code'],
      scope: 'https://www.googleapis.com/auth/gmail.send',
      client_secret: 'APGp2DbYejYnS_CbXzFmNirh',
      grant_type: 'authorization_code',
      redirect_uri: 'http://localhost:4200/unsplash'
    }
    return this.http.post('https://www.googleapis.com/oauth2/v4/token', body, {headers: headers})
  }
}
