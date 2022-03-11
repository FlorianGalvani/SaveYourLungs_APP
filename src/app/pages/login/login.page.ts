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
  errors = '';

  constructor(public formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
  }

  get errorControl() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['az@nr.com', [Validators.required, Validators.email]],
      password: ['azertyui', [Validators.required, Validators.minLength(8)]]
    });
  }

  submitForm() {
    // console.log(this.ionicForm.value)
    this.errors = '';
    this.isLoading = true;
    this.isSubmitted = true;
    if (!this.loginForm.valid) {
      return false;
    } else {

      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe((res) => {
        if (res.token) {
          this.isLoading = false;
          this.router.navigate(['/home']);
        } else {
          this.isLoading = false;
          console.log('===========================================');
          console.log('NO TOKEN');
          console.log('===========================================');
        }

      },(err) => {
        this.isLoading = false;
        console.log('===========================================');
        console.log(err);
        console.log(this.loginForm);
        switch (err.error.message) {
          case 'Invalid credentials.':
            this.errors = 'Aucun compte n\'a etait trouver avec cette combinaison';
            break;
        
          default:
            break;
        }
        console.log('===========================================');
      });
    }
  }
}
