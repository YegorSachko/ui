import { Injectable } from '@angular/core';
import { User } from './user.model';
import{HttpClient}from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class UserService {
 formData:User;
 readonly rootURL='http://localhost:54029/api';
 list:User[];
 
constructor(private http:HttpClient) { }
  
PostUser(){
    return this.http.post(this.rootURL+'/User',this.formData)
  }

putUser(){
    return this.http.put(this.rootURL+'/User/'+this.formData.Id,this.formData)
  }

deleteUser(id){
    return this.http.delete(this.rootURL+'/User/'+id);
  }

  refreshList(){this.http.get(this.rootURL+'/User')
  .toPromise().then(res=>this.list = res as User[])}
}
