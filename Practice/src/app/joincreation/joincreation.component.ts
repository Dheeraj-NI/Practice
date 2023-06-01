import { Component, OnInit } from '@angular/core';
import {
  timer,
  combineLatest,
  interval,
  take,
  concat,
  map,
  race,
  tap,
  share,
} from 'rxjs';

@Component({
  selector: 'app-joincreation',
  templateUrl: './joincreation.component.html',
  styleUrls: ['./joincreation.component.css'],
})
export class JoincreationComponent implements OnInit {
  ngOnInit(): void {
    /**************************Combine Latest********************************* */
    // this.combinedTimers.subscribe((value) => console.log(value));
    /**************************Concat********************************* */
    // this.result.subscribe((x) => console.log(x));
    // race(this.obs1, this.obs2, this.obs3).subscribe((winner) =>
    // console.log(winner)
    // );
    /**************************Race********************************* */
    // this.source.subscribe((x) => console.log('subscription 1: ', x));
    // this.source.subscribe((x) => console.log('subscription 2: ', x));
  }

  /**************************Combine Latest********************************* */
  // firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
  // secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
  // combinedTimers = combineLatest([this.firstTimer, this.secondTimer]);

  /**************************Concat********************************* */

  // timer1 = interval(1000).pipe(take(10));
  // timer2 = interval(2000).pipe(take(6));
  // timer3 = interval(500).pipe(take(10));

  // result = concat(this.timer1, this.timer2, this.timer3);

  /**************************Race********************************* */
  // obs1 = interval(7000).pipe(map(() => 'slow one'));
  // obs2 = interval(3000).pipe(map(() => 'fast one'));
  // obs3 = interval(5000).pipe(map(() => 'medium one'));

  /**************************Share********************************* */

  source = interval(1000).pipe(
    tap((x) => console.log('Processing: ', x)),
    map((x) => x * x),
    take(6),
    share()
  );

  // Logs:
  // Processing: 0
  // subscription 1: 0
  // subscription 2: 0
  // Processing: 1
  // subscription 1: 1
  // subscription 2: 1
  // Processing: 2
  // subscription 1: 4
  // subscription 2: 4
  // Processing: 3
  // subscription 1: 9
  // subscription 2: 9
  // Processing: 4
  // subscription 1: 16
  // subscription 2: 16
  // Processing: 5
  // subscription 1: 25
  // subscription 2: 25
}
