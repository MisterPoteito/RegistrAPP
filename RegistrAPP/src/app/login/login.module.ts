import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPage]
})

var Contraseña = LoginPage.getElementbyId('Contraseña');
validarContrasenia(Contraseña

export class LoginPageModule {}
function validarContrasenia(Contraseña: any, string: any) {
  throw new Error('Función no implementada.');
}

