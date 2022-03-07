import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  constructor(public formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  submitForm() {
    // console.log(this.ionicForm.value)
    this.isLoading = false;
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      this.isLoading = false;
      return false;
    } else {
      this.isLoading = false;
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res) => {
        if (res.token) {
          this.router.navigate(['/home']);
        } else {
          console.log('===========================================');
          console.log('NO TOKEN');
          console.log('===========================================');
        }

      },(err) => {
        console.log('===========================================');
        console.log(err);
        console.log(this.loginForm);
        console.log('===========================================');
      });
    }
  }
}
