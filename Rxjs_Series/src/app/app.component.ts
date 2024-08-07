import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
 
  constructor() {
    debugger
    this.datetest();
  }
  title = 'Rxjs_Series';
  date = new Date().getDate() - 1;
  datetest() {
    console.log(this.date);
    
  }
}
