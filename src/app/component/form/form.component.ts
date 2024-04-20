import { Component, ViewChild, viewChild } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms'
import { NumPipe } from '../../custom/num.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, NumPipe, CommonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
@ViewChild('tempForm') tempForm !: NgForm;

num = 10;
text:string = ""
  onSubmit(form : NgForm){
    alert(this.tempForm.dirty)
  }
}
