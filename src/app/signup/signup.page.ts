import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(private router:Router,private toast: ToastController) { }

  ngOnInit() {
  }

  dataSignup = {
    email: "" , 
    password: ""
  }

  async presentToast() {
    const toast = await this.toast.create({
      message: 'Sorry cant SignUp now , Its under process',
      duration: 2000
    });
    toast.present();
  }


  onSignUp(dataSignup)
  {
    console.log("data" , dataSignup);
    this.presentToast();
  }

}
