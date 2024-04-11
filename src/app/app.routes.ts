import { Routes } from '@angular/router';
import { RadioComponent } from './component/radio/radio.component';
import { HomeComponent } from './component/home/home.component';
import { FormComponent } from './component/form/form.component';
import { TimerComponent } from './component/timer/timer.component';

export const routes: Routes = [
    {path : 'radio',component : RadioComponent},
    {path : 'form',component : FormComponent},
    {path : 'timer',component : TimerComponent},
    {path : '',component : HomeComponent}
];
