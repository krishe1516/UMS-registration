import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LogoutService } from '../service/logout.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private serv:LogoutService){}
Logout=new FormGroup({
  emailId:new FormControl('',{
    validators:Validators.required,
    updateOn:'blur'
  })
})
ForgotOut(id:number){
 this.serv.forgotPass(id).subscribe((res)=>alert(res))
}
}
