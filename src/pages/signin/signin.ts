import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthService } from '../../services/auth';
import { AlertController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  constructor(private authService: AuthService,
              private alertCtrl: AlertController,
              private loadinngCtrl: LoadingController) {}
  
  onSignin(form: NgForm) {
    const loading = this.loadinngCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
    .then(data =>{
      loading.dismiss();
    })
    .catch(error => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
      title: 'Signin filed',
      message: error.message,
      buttons: ['Ok!']
      });
      alert.present();
    });
  }
}
