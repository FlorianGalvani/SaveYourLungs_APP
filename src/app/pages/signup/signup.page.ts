import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/api/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signupForm: FormGroup;
  isSubmitted = false;
  isLoading = false;
  constructor(public formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  get errorControl() {
    return this.signupForm.controls;
  }


  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname: ['razraz', [Validators.required, Validators.minLength(2)]],
      lastname: ['arazzr', [Validators.required, Validators.minLength(2)]],
      age: ['26', [Validators.required, Validators.max(99)]],
      gender: ['woman', [Validators.required]],
      email: ['cag@efjum.tc', [Validators.required, Validators.email]],
      password: ['azertyui', [Validators.required, Validators.minLength(8)]],
      confirmation: ['azertyui', [Validators.required, Validators.minLength(8)]]
    });
  }
  submitForm() {
    // console.log(this.ionicForm.value)
    this.isLoading = true;
    this.isSubmitted = true;
    if (!this.signupForm.valid) {
      this.isLoading = false;
      return false;
    } else {
      this.isLoading = false;
      console.log(this.signupForm.value);
      this.authService.register(this.signupForm.value).subscribe((res) => {
        if (res.success) {
          console.log('ok : ', res);
        } else {
          console.log('error : ', res);
        }
      }, (err) => {
        console.log(err);
      });
    }
  }
}
