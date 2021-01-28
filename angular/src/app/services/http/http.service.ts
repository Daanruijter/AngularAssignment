import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

 //fetch the event data
 getEvents(url, token): any {

   

  console.log(token)

  return this.http.get(url, {headers: new HttpHeaders().set('Authorization', `Bearer ${token.token}`)}).pipe(
    tap((res: any) => res),
    catchError(this.handleError)
  );
}

  //post authorization
  sendCredentials(url): any {
 

let body = {email: "daan_ruijter@hotmail.com", password: "ApolloIsTeGek!"}

    return this.http.post(url, body).pipe(
      tap((res: any) => res),
      catchError(this.handleError)
    );
  }

getData(source: string) {
  return this.http.get(source).pipe(
    tap((res: any) => res),
    catchError(this.handleError)
  );
}



  private handleError(error: any) {
    return observableThrowError(error.error || 'Server error');
  }
}
