import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Weather } from 'src/app/shared/models/weather-model';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private readonly http: HttpClient) { }

  getWeather(city: string): Observable<Weather> {
    const params = new HttpParams().set('q', city).set('appid', '3f155a8eb4b9b50a43e0034feea4fdf5');
    return this.http.get<any>(environment.apiUrl, { params }).pipe(map(response => response = {
      temp: response.main.temp,
      name: response.name,
      country: response.sys.country,
      description: response.weather[0].description,
      icon: response.weather[0].icon,
      date: new Date(),
    }));
  }
}