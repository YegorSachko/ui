import { Component, OnInit } from '@angular/core';
import { LotService } from 'src/app/shared/lots.service';
import { ToastrService } from 'ngx-toastr';
import { Lot } from 'src/app/shared/lots.model';

@Component({
  selector: 'app-lots-menu',
  templateUrl: './lots-menu.component.html',
  styleUrls: [],
})
export class LotsMenuComponent implements OnInit {
  constructor(private service:LotService,
    private toastr:ToastrService) { }

 ngOnInit() {
   this.service.refreshList();
 }

 populateForm(pd:Lot){
   this.service.formData=Object.assign({},pd);
 }

 onDelete(Id){
   if(confirm('Are you sure to delete this record')){
   this.service.deleteLot(Id).subscribe(res=>{
     this.service.refreshList();
     this.toastr.warning('Deleted successfully','Lot deleted');
   },
     err=>{console.log(err);})
   }
 }
}
