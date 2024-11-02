import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plantas } from './plantas';

import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  private apiUrl = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getPlantas(): Observable<Plantas[]> {
    return this.http.get<Plantas[]>(this.apiUrl);
  }

}
