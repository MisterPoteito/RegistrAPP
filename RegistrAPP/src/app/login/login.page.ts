import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  router: any;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public route: Router) { 

    this.formularioLogin = this.fb.group({
      'usuario': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioLogin.value;

    if (this.formularioLogin.invalid) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Ingrese los datos correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    
    var usuario = {
      usuario: f.usuario,
      password: f.password
    }

    localStorage.setItem("usuario",JSON.stringify(usuario));
    this.route.navigate(['/home']);

  }

}