import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient){ }

  getRequest<Type>(url:string){
    return this.http.get<Type>(url)
  }
  postRequest<Type>(url:string, value:Type){
    let header = new HttpHeaders ({'Content-type' : 'application/json'})
    return this.http.post(url, value,  {headers: header})
  }
  put(url:string, value:Object){
    let header = new HttpHeaders ({'Content-type' : 'application/json'})
    return this.http.put( url, value, {headers: header} )
  }
  delate(url:string){
    return this.http.delete(url)
  }
}
