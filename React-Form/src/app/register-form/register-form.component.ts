import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms'

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  countryList = [
    {id: 1, name: 'United States'},
    {id: 2, name: 'China'},
    {id: 3, name: 'Japan'},
    {id: 4, name: 'Korea'},
    {id: 5, name: 'Canada'}
  ];

  comparePassword(c: AbstractControl) {
    const v = c.value;
    return (v.password === v.confirmPassword) ?
      null : {
      passwordNotMatch: true
      };
  }

  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required, Validators.minLength(10)]),
    lastname: new FormControl('', [Validators.required, Validators.minLength(9), Validators.pattern("^[a-zA-Z]+$")]),
    email: new FormControl('', [Validators.email, Validators.required]),
    pwGroup: new FormGroup({
      password: new FormControl(''),
      confirmPassword: new FormControl('')
      }, this.comparePassword),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl(),
    address: new FormGroup({
      city: new FormControl(),
      street: new FormControl(),
      pinCode: new FormControl()
    })
  });

  // get firstname() {
  //   return this.contactForm.get('firstname');
  // }

  get lastname() {
    return this.contactForm.get('lastname');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get gender() {
    return this.contactForm.get('gender');
  }

  get isMarried() {
    return this.contactForm.get('isMarried');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get city() {
    // @ts-ignore
    return this.contactForm.get("address").get('city');
  }

  get street() {
    // @ts-ignore
    return this.contactForm.get("address").get('street');
  }

  get pinCode() {
    // @ts-ignore
    return this.contactForm.get("address").get('pinCode');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }
}
