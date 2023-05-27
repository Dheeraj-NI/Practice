import { Component, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit {
  //***************Accessing the observable through subscribe method */
  ngOnInit(): void {
    console.log('Observable start');
    this.Observe.subscribe(
      (val: any) => {
        console.log(val);
      },
      (err: any) => {
        alert(err.message);
      },
      () => {
        alert('Observable has completed all the values emmited');
      }
    );
  }

  // ************************ Observable Constructor

  // Observe = new Observable((observer) => {
  //   setTimeout(() => {
  //     observer.next('1');
  //   }, 1000);
  //   setTimeout(() => {
  //     observer.next('2');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('3');
  //   }, 3000);
  //   // setTimeout(() => {
  //   //   observer.error(new Error('Something went wrong! Please try again later'));
  //   // }, 3000);
  //   setTimeout(() => {
  //     observer.next('4');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.next('5');
  //   }, 5000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 6000);

  //   // observer.next("1")
  //   // observer.next("2")
  //   // observer.next("3")
  //   // observer.next("4")
  //   // observer.next("5")
  // });

  // Different types to create Observables

  // ********************************Observable create method to create observable

  // Observe = Observable.create((obs:any) => {
  //   setTimeout(() => {
  //         obs.next('A');
  //       }, 1000);
  //       setTimeout(() => {
  //         obs.next('B');
  //       }, 2000);
  //       setTimeout(() => {
  //         obs.next('C');
  //       }, 3000);
  //       // setTimeout(() => {
  //       //   obs.error(new Error('Something went wrong! Please try again later'));
  //       // }, 3000);
  //       setTimeout(() => {
  //         obs.next('D');
  //       }, 4000);
  //       setTimeout(() => {
  //         obs.next('E');
  //       }, 5000);
  //       setTimeout(() => {
  //         obs.complete();
  //       }, 6000);
  // })
/* Of operator accepts n number of arguments and it will print iterable variable as it is  */
  array1 = [1, 2, 3, 4, 5, 6];
  array2 = ['A', 'B', 'C', 'D'];
  // Observe = of(this.array1, this.array2, 2, 56, 45, 756, 'fshfjas');

  /* From operator   --> Only acceps one argument that should be iterable and it converts the promise into observable*/
  

  Observe = from(this.array1);
}
