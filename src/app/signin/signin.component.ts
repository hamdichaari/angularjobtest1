import { Component } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
constructor(private dbb:DatabaseService){
  console.log(this.dbb.getName)
}
}
