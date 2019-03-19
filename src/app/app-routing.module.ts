import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./login/login.component";
import { StudentComponent } from "./students/students.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "student", component: StudentComponent },
  { path: "contact", component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
