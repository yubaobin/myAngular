import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
@Component({
  selector: 'app-mform',
  templateUrl: './mform.component.html',
  styleUrls: ['./mform.component.css']
})
export class MformComponent implements OnInit {

  username = '';
  user = { username: '你好', uPwd: '', sex: 'boy', hobby: 2 }

  gForm: FormGroup;
  constructor(private fb : FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  submit(e, mb) {
    console.log(e);
    console.log("模版变量", mb);
  }

  submitForm() {
    console.log("提交表单");
  }
  get diagnostic() {
    return JSON.stringify(this.user);
  }

  createForm() {
    this.gForm = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

}
