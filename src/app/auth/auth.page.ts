import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { EncrDecrService} from './_encryptAndDecrypt';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(private authService: AuthService , 
              private _encrypt: EncrDecrService ,
              private router: Router ) { }

  ngOnInit() {
  }

   data = {
    email: "", 
    password: ""
  }

 

  onSubmit(data){
    var email = this.data.email;
    var password = this.data.password;
    console.log("data3",this.data);
    
    var encry = this._encrypt.set(JSON.stringify(this.data));
    console.log("dataexmple" , encry);
    console.log("dataexmple2222" , encry.password);
    
    this.authService.loginver(encry).subscribe(
      async data => {
        console.log("data2",data);
        
        if(data.status == 200){
          console.log("hoooo gaya");
          this.router.navigateByUrl('/tabs/tab-two');
        
          
        }

      }
    );

  }

  

}
