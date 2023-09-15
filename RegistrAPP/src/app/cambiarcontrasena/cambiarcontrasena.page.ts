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
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {

  formularioCambiarContrasena: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public route: Router) { 

  this.formularioCambiarContrasena = this.fb.group({
    'contraseña': new FormControl("",Validators.required),
    'confirmar': new FormControl("",Validators.required)
  })
}

  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioCambiarContrasena.value;

    if (this.formularioCambiarContrasena.invalid) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'La contraseña no puede quedar vacía.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
    this.route.navigate(['/home']);
  }
}
