import { Component, OnInit } from "@angular/core";
// import { DataService } from '../data.service';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class HomeComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private formBuilder: FormBuilder,private router: Router) {}

  ngOnInit() {
    this.messageForm = this.formBuilder.group({
      name: ["", Validators.required],
      message: ["", Validators.required]
    });
  }
  admin(){
    this.router.navigate(['/contact']);
  }
  onClickMe() {
    this.router.navigate(['/student']);
  }
}
