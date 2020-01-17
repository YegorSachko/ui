import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LotService } from 'src/app/shared/lots.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lots',
  templateUrl: './lots.component.html',
  styleUrls: []
})

export class LotsComponent implements OnInit {
  constructor(private lotService:LotService,private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.Getalllots();
  }

  resetForm(form?:NgForm){
    if(form!=null)
      form.resetForm();
    this.lotService.formData = {
      Id:0,
      Lotname:'',
      LotUrl:'',
      Lotprice:0,
      LotOwner:''
    }
  }

Getalllots(){
  this.lotService.refreshList();
}
  onSubmit(form:NgForm){
    if(this.lotService.formData.Id==0)
    this.insertRecord(form);
    else
    this.updateRecord(form);
  }

  insertRecord(form:NgForm){
    this.lotService.PostLot().subscribe
    (res=>{this.resetForm(form);
    this.toastr.success('Your item has been created','Lot created');
    this.lotService.refreshList();},
    err =>{console.log(err)})
  }

  updateRecord(form:NgForm){
    this.lotService.putLot().subscribe
    (res=>{this.resetForm(form);
    this.toastr.info('Submit successfully','Lot Rewrite');
    this.lotService.refreshList();},
    err =>{console.log(err)})
  }

  SetBit(lotId:number,lotprice:number){
    this.lotService.SetBit(lotId,lotprice+10000);
    console.log("lotId",lotId);
    this.toastr.warning('You added 10000$ to cost','Lot Rewrite')
  }
}