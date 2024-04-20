import { Component } from '@angular/core';
import { Observable, Subscription, TimeoutConfig } from 'rxjs';

@Component({
  selector: 'app-observable-timer',
  standalone: true,
  imports: [],
  templateUrl: './observable-timer.component.html',
  styleUrl: './observable-timer.component.scss'
})
export class ObservableTimerComponent {
  time : number = 0;
  obs !: Observable<any> ;
  unsub !: Subscription;
  intervalId !: ReturnType<typeof setTimeout>;
  flag  = false;

  startTimer(){
    let tm = this.time;
    this.obs = new Observable((observer)=>{
      this.intervalId = setInterval(()=>{
        observer.next(tm++)
      },1000)
    })
  }

  start(){
   if(this.flag) return;
   this.flag = true;

   this.startTimer();
   this.unsub = this.obs.subscribe({
      next : (res)=>{
        this.time =res;
      },
      error : err =>{
        console.log('error occured'+err)
      }
    })
  }

  stop(){
    this.flag = false;
    this.unsub.unsubscribe()
    clearInterval(this.intervalId)
  }

  reset(){
    this.stop()
    this.time = 0;
  }
}
