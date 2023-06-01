// RxJS v6+
import { fromEvent } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilityoperator',
  templateUrl: './utilityoperator.component.html',
  styleUrls: ['./utilityoperator.component.css']
})
export class UtilityoperatorComponent  implements OnInit{
  ngOnInit(): void {

    /********************Time Interval***************************** */
    fromEvent(document, 'mousedown')
      .pipe(timeInterval(), tap(console.log))
      .subscribe(
        i =>
          (document.body.innerText = `milliseconds since last click: ${i.interval}`)
      );
  
  }


}
