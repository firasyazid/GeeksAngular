import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalstorageService } from '../../services/localstorage.service';

@Component({
  selector: 'eshop-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
   loginFormGroup! : FormGroup;
   isSubmitted = false;
   authError = false;
   authMessage = 'Email or Password are wrong';
 

  
  constructor(private formBuilder: FormBuilder,
    private localstorageService: LocalstorageService,
    private router: Router


    ) { }

  ngOnInit(): void {
    this._initLoginForm();
  }

  private _initLoginForm() {
    this.loginFormGroup = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required]
    });
  }
  get loginForm() {
    return this.loginFormGroup.controls;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onSubmit() {
  
}
}