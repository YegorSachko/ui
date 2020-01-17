import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
formModel={
  UserName:'',
  Password:'',
}
  constructor(private toastr:ToastrService) { }

  ngOnInit() {
  }

  CheckComein(){
    this.toastr.warning('Logged in','You come in in your account');
  }

}
