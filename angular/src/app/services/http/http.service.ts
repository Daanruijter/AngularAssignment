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
 getEvents(url): any {

   
console.log(url)
let token = localStorage.getItem("access_token")
  

  return this.http.get(url, {headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)}).pipe(
    tap((res: any) => {
      
      let result = res
      console.log(result)}),
    catchError(this.handleError)
  );
  
}

  //post authorization
  sendCredentials(url, credentials): any {
 

let body = credentials

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
    console.log(error)
    alert(error.message)
    return observableThrowError(error.error || 'Server error');
  }
}
