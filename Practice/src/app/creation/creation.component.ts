import { Component, OnInit } from '@angular/core';
import { interval, of, defer, fromEvent, range, iif } from 'rxjs';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css'],
})
export class CreationComponent implements OnInit {
  ngOnInit(): void {
    /************************************Of Operator with Interval**********************************/
    // this.ofArray$.subscribe((res) => {
    //   const num = interval(2000);
    //   num.subscribe((res) => {
    //     console.log(num, res);
    //   });
    // });
    // this.ofString.subscribe((res) => {
    //   console.log(res);
    // });
    // this.ofObject.subscribe((res) => {
    //   console.log(res);
    // });
    /************************************* From Operator ******************************************/
    // this.fromArray.subscribe((res) => {
    //   console.log(res);
    // });
    //************************ Defer operator and fromEvent operator ************************/
    // this.clicksOrInterval.subscribe((x) => console.log(x));
    /* ****************************** Range operator *************************************/
    // this.numbers.subscribe({
    //   next: (value) => console.log(value),
    //   complete: () => console.log('Complete!'),
    // });

    this.subscribeToFirst = true;
    this.firstOrSecond.subscribe((value) => console.log(value));
    this.subscribeToFirst = false;
    this.firstOrSecond.subscribe((value) => console.log(value));
  }

  /******************************Of Operator *******************************************/
  // array = ['Hello', 2, 3, 4, 5];
  // ofArray$ = of(this.array);
  // _string = 'Hello';
  // ofString: Observable<any> = of(this._string);
  // _object = { firstName: 'John', lastName: 'Doe', gender: 'Male' };
  // ofObject: Observable<any> = of(this._object);

  /*************************** From Operator ******************************************* */

  // array = ['Hello ', 'Nimap', 'Infotech'];
  // fromArray: Observable<any> = from(this.array);

  /************************ Defer operator and fromEvent operator ************************/

  // clicksOrInterval = defer(() => {
  //   return Math.random() > 0.5 ? fromEvent(document, 'click') : interval(1000);
  // });

  /* ****************************** Range operator *************************************/
  // numbers = range(1, 3);

  subscribeToFirst: any;
  firstOrSecond = iif(() => this.subscribeToFirst, of('first'), of('second'));

  // Logs:
  // 'first'

  // Logs:
  // 'second'
}
