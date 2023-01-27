import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name ='mon site'
  link= 'assets/incriment.png'
  firstName='mon compte'
  first='aaa'
  constructor(){}
  ngOnInit(): void {
    
  }
  get(){
    console.log(this.firstName) }
   
  
}
