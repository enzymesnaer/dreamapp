import { Component, OnInit } from '@angular/core';
import {  FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import {ExtypiService}  from '../extypi.service';

@Component({
  selector: 'app-exforms',
  templateUrl: './exforms.component.html',
  styleUrls: ['./exforms.component.css']
})

export class ExformsComponent implements OnInit {

  angForm: FormGroup;
  submitted: boolean;
  userForm: FormGroup;
  orderForm: FormGroup;
  items: FormArray; 
  userData: any;
  
  constructor(public formBuilder: FormBuilder, private fb: FormBuilder, public typiService: ExtypiService) {
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      email: [''],
      password: ['']
    });
    }
    onClickSubmit2(email, password) {
      console.log(this.angForm.controls['password'].value)
      console.log(this.angForm.value)
     }
  ngOnInit() {

    this.userForm = this.formBuilder.group({
      username: [ '' ,  [Validators.required, Validators.pattern(/^[A-Za-z0-9_@.]*$/), Validators.maxLength(50)] ],
      password: [ '',   [Validators.required, Validators.minLength(8)]]
    });

    this.orderForm = this.fb.group({
      customerName: '',
      email: '',
      items: this.formBuilder.array([ this.createItem() ])
    });

    this.getData();
  }

  createItem(): FormGroup {
    return this.formBuilder.group({
      name: '',
      description: '',
      price: ''
    });
  }

  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  onClickSubmit(formData) {
    alert('Your Email is : ' + formData.email);
  }

  public myhasError = (controlName:string, errorName:string) =>{
    return this.userForm.controls[controlName].hasError(errorName); //hasError is predefined in angular
  }

  onSubmit() {
    this.submitted = true;
    if(this.userForm.invalid){  // stop here if form is invalid
      return;
    }
    alert ("Welcome => "+this.userForm.controls['username'].value);
  }

  getData(){
    this.typiService.fetchUsers().subscribe((res => {
      this.userData = res;
      console.log("User Data ", this.userData);
    }))
  }
 
}
