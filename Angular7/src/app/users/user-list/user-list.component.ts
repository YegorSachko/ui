import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  constructor(private service:UserService,
     private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }

  populateForm(pd:User){
    this.service.formData=Object.assign({},pd);
  }

  onDelete(UserId){
    if(confirm('Are you sure to delete this record')){
    this.service.deleteUser(UserId).subscribe(res=>{
      this.service.refreshList();
      this.toastr.warning('Deleted successfully','User deleted');
    },
      err=>{console.log(err);})
    }
  }
}
