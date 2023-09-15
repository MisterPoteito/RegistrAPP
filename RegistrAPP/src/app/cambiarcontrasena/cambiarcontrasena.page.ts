import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-cambiarcontrasena',
  templateUrl: './cambiarcontrasena.page.html',
  styleUrls: ['./cambiarcontrasena.page.scss'],
})
export class CambiarcontrasenaPage implements OnInit {

  formularioCambiarContrasena: FormGroup;

  constructor(public fb: FormBuilder) { 

  this.formularioCambiarContrasena = this.fb.group({
    'contraseña': new FormControl("",Validators.required),
    'confirmar': new FormControl("",Validators.required)
  })
}

  ngOnInit() {
  }

}
