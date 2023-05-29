import { Component, OnInit } from '@angular/core';
import { Observable, of, from, interval } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css'],
})
export class OperatorsComponent implements OnInit {
  ngOnInit(): void {
    /* Of Operator */
    this.ofArray$.subscribe((res) => {
      const num = interval(2000);
      num.subscribe((res) => {
        console.log(num ,res);
      });
      
    });
    // this.ofString.subscribe((res) => {
    //   console.log(res);
    // });
    // this.ofObject.subscribe((res) => {
    //   console.log(res);
    // });
    /* From Operator */
    // this.fromArray.subscribe((res) => {
    //   console.log(res);
    // });
  }

  /* Of Operator */
  array = ['Hello', 2, 3, 4, 5];
  ofArray$ = of(this.array);
  // _string = 'Hello';
  // ofString: Observable<any> = of(this._string);
  // _object = { firstName: 'John', lastName: 'Doe', gender: 'Male' };
  // ofObject: Observable<any> = of(this._object);

  /* From Operator */

  // array = ['Hello ', 'Nimap', 'Infotech'];
  // fromArray: Observable<any> = from(this.array);
}
