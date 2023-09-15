import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {

  formularioCambiarContrasena: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) { 

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
        message: 'Ingrese los datos correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }
  
  }
}
