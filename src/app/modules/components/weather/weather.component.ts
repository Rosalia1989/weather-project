import { Component, OnInit } from '@angular/core';
import { Weather } from 'src/app/shared/models/weather-model';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  city!:string;
  cityWeather!:Weather;

  constructor(private readonly weatherService: WeatherService ) { }


  ngOnInit(): void {
  }

  getCityWeather() {
    this.weatherService.getWeather(this.city).subscribe(response => this.cityWeather= response);
  }

}