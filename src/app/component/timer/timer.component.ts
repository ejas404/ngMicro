import { Component } from '@angular/core';
import { Observable, TimeInterval } from 'rxjs';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.scss'
})
export class TimerComponent {
  time: number = 0;
  cancel !:number ;

  start() {
    this.cancel = setInterval(()=>{
      this.time++
    },1000)
  }

  stop() {
    clearInterval(this.cancel)
  }
}

