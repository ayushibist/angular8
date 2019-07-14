import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-reactive-form',
  templateUrl: './sample-reactive-form.component.html',
  styleUrls: ['./sample-reactive-form.component.css']
})
export class SampleReactiveFormComponent implements OnInit {

  angForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }

  get angFormData() {
    return this.angForm.controls;
  }

  onReactiveFormSubmit(data, username, password) {
    console.log(data, username, password);
  }

}
