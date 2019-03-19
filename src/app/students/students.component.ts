import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentComponent implements OnInit {
  users: Object;
  isLoaded = false;
  constructor(private data: DataService,private router: Router) {}
  ngOnInit() {}
  clickToLoadStudents() {
    this.data.getUsers().subscribe((data) => {
      this.users = data;
      this.isLoaded = true;
    });
  }
  save(){
    alert("Saved Succesfully")
  }
  goBack(){
    this.router.navigate(['./']);
  }
}
