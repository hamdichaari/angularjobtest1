import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  name="mon 1 test"
  constructor() { }

  getName(){
return this.name
  }
}
