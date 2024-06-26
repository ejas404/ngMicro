import { Routes } from '@angular/router';
import { RadioComponent } from './component/radio/radio.component';
import { HomeComponent } from './component/home/home.component';
import { FormComponent } from './component/form/form.component';
import { TimerComponent } from './component/timer/timer.component';
import { ObservableTimerComponent } from './component/observable-timer/observable-timer.component';
import { formCheckGuard } from './guards/formGuard';
import { WeatherComponent } from './component/weather/weather.component';

export const routes: Routes = [
    {path : 'radio',component : RadioComponent},
    {path : 'form',canDeactivate : [formCheckGuard],component : FormComponent},
    {path : 'timer',component : TimerComponent},
    {path : 'obs-timer',component : ObservableTimerComponent},
    {path : 'weather',component : WeatherComponent},
    {path : '',component : HomeComponent}
];
