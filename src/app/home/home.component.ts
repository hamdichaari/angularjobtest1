import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnChanges,DoCheck {


name ='prix achat'
solde = 20

today : number=Date.now();



  constructor(private db:DatabaseService){
    console.log(this.db.getName)
  }


  ngOnInit(): void {
    console.log('ngoninit')
    
  }

  ngOnChanges(){
    console.log('onchanges')
 

   }
  ngDoCheck(){
    console.log('docheck')
 

   }
  
}
