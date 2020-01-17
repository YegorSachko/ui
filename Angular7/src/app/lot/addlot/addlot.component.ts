import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AddlotsService } from 'src/app/shared/addlots.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-addlot',
  templateUrl: './addlot.component.html',
  styleUrls: [],
})
export class AddlotComponent implements OnInit {
  constructor(private service:AddlotsService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData = {
      Id:0,
      Lotname:"",
      LotUrl:"",
      Lotprice:0,
      LotOwner:"",
      
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
    this.toastr.success('Submitted successfully','Lot Register');
    this.service.refreshList();},
    err =>{console.log(err)})
  }
  updateRecord(form:NgForm){
    this.service.putUser().subscribe
    (res=>{this.resetForm(form);
    this.toastr.info('Submitted successfully','Lot Rewrite');
    this.service.refreshList();},
    err =>{console.log(err)})
  }
}
