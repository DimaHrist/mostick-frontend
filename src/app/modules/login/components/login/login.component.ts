import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form = new FormGroup({
    email: new FormControl(null,[Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    passwordSubmit: new FormControl(null,[Validators.required])
  })

}
