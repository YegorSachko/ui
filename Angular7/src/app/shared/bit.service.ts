import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http"
import { Bit } from './bit.model';

@Injectable({
  providedIn: 'root'
})
export class BitService {
  formData:Bit;
    readonly rootURL ='https://yahorauction.azurewebsites.net/';
  list:Bit[];

  constructor(private http:HttpClient) { }

  PostLot(){
    return this.http.post(this.rootURL+'/Bits',this.formData)
  }

  putLot(){
    return this.http.put(this.rootURL+'/Bits/'+this.formData.Id,this.formData)
  }

  deleteLot(id){
    return this.http.delete(this.rootURL+'/Bits/'+id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Lots')
    .toPromise().then(res=>this.list = res as Bit[])
  }
}
