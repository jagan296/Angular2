import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/prod.model';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit
{
  mobiles:Product[]=[];

  constructor(private dsObj:DataService){}

  ngOnInit()
  {
    this.mobiles=this.dsObj.getMobilesData();
  }

}
