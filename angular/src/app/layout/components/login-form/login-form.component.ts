import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../services/http/http.service';
import { BasePageComponent } from '../../../pages/base-page/base-page.component';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../interfaces/app-state';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent extends BasePageComponent implements OnInit {
  loginForm: FormGroup;
  httpSv: HttpService

  constructor(private fb: FormBuilder, router: Router, httpSv: HttpService, store: Store<IAppState>,) {
    super(store, httpSv);


  }

  ngOnInit() {

    this.loginForm = this.fb.group({

      login: ['', Validators.required],
      pass: ['', Validators.required]

    });
  }

  triggerPostCredentials() {

    let email = this.loginForm.get('login').value
    let password = this.loginForm.get('pass').value
    let body = { email, password }
    let url = "https://qub3z-api-test.herokuapp.com/v1/auth"

    this.httpSv.sendCredentials(url, body).subscribe(
      data => {
        localStorage.setItem("access_token", data.token)
        if (data.token) {
          window.location.href = 'http://localhost:4200/';
        }
      }
    )
  }

  submitCredentials() {
    this.triggerPostCredentials()
  }
}
