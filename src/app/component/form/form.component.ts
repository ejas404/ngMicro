import { Component, ViewChild, viewChild } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
@ViewChild('tempForm') tempForm !: NgForm;

  onSubmit(form : NgForm){
    alert(this.tempForm.dirty)
  }
}
