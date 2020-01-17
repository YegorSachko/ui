import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {
  
  constructor(private service:UserService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Id:0,
      Login:"",
      Password:"",
      Address:"",
      Name:"",
      Fam:"",
      Otc:""
    }
  }
  onSubmit(form:NgForm){
    if(this.service.formData.Id==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }
  insertRecord(form:NgForm){
    this.service.PostUser().subscribe
    (res=>{this.resetForm(form);
    this.toastr.success('Submitted successfully','User Register');
    this.service.refreshList();},
    err =>{console.log(err)})
  }
  updateRecord(form:NgForm){
    this.service.putUser().subscribe
    (res=>{this.resetForm(form);
    this.toastr.info('Submitted successfully','User Rewrite');
    this.service.refreshList();},
    err =>{console.log(err)})
  }
}
