import { Component } from '@angular/core';
import { ClickDirective } from '../../custom/click.directive';

@Component({
  selector: 'app-radio',
  standalone: true,
  imports: [ClickDirective],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss'
})
export class RadioComponent {
  flag : boolean =  false;
  toggle(){
    this.flag = !this.flag;
  }
}
