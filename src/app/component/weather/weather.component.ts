import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  city !: string ;
  name : string = "City"
  temp : string = '0'
  desc : string = "description"
  title : string = "Condition"
  bg : string = "default"
  
  getWeather(){    
    const url  = `${environment.WEATHER_API_URL}?q=${this.city}&appid=${environment.WEATHER_API_KEY}&units=metric`
    fetch(url)
    .then(res => res.json())
    .then(res => {
      this.name = `${res.name}, ${res.sys.country}`;
      this.temp = `${Math.round(res.main.temp)}`
      this.desc = res.weather[0].description
      this.title = res.weather[0].main

      console.log(res)

      this.setBackground(this.title)
    })
  }

  setBackground(text : string){
    if(text.toLowerCase().includes('cloud')) {
      this.bg = 'cloud'
      return;
    }

    if(text.toLowerCase().includes('clear')) {
      this.bg = 'clear'
      return;
    }

    this.bg = 'default'
  }
}
