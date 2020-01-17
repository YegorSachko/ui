import { Injectable } from '@angular/core';
import{HttpClient}from "@angular/common/http"
import { Lot } from './lots.model';
import { Bit } from './bit.model';

@Injectable({
  providedIn: 'root'
})
export class LotService {
  formData:Lot;
  readonly rootURL='http://localhost:54029/api';
  list:Lot[];

  constructor(private http:HttpClient) { }

  PostLot(){
    return this.http.post(this.rootURL+'/Lots',this.formData)
  }

  putLot(){
    return this.http.put(this.rootURL+'/Lots/'+this.formData.Id,this.formData)
  }

  deleteLot(id){
    return this.http.delete(this.rootURL+'/Lots/'+id);
  }

  refreshList(){
    this.http.get(this.rootURL+'/Lots')
    .toPromise().then(res=>this.list = res as Lot[])
  }
  SetBit(lotId:number, lotprice:number){

    let bitModel = {
      userId: 2,
      lotId: lotId,
      price : lotprice,

    }

    this.http.post<Bit>(`${this.rootURL}/Bits/`,bitModel)
      .subscribe( 
        b => {this.list.find(i => i.Id == b.LotId).Lotprice = b.Price;},
        errro =>{console.log(errro)}
        )
    return true;
  }
}