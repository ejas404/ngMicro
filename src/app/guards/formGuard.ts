import { CanDeactivateFn } from "@angular/router";
import { FormComponent } from "../component/form/form.component";


export const formCheckGuard : CanDeactivateFn<FormComponent> = (component : FormComponent) : boolean =>{
   if(component.tempForm.dirty){
    return confirm('you have unsaved changes, you sure about leaving?');
   }
   return true;
}