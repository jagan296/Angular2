import { Injectable } from '@angular/core';
import { Product } from './models/prod.model';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable, observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService 
{

  constructor(private hc:HttpClient) { }



  getMobilesData():Observable<Product[]>
  {
    return this.hc.get<Product[]>("assets/mobiles.json")
  }

}
