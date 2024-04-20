import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'float',
    standalone:true
})
export class NumPipe implements PipeTransform{
    transform(value: number, arg: number = 2) {
        return value.toFixed(arg)
    }

}