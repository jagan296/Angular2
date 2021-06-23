import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-televisions',
  templateUrl: './televisions.component.html',
  styleUrls: ['./televisions.component.css']
})
export class TelevisionsComponent implements OnInit 
{

  n:any;

  constructor(private tsObj:TestService) { }

  ngOnInit(): void 
  {
    this.n=this.tsObj.getData();
  }

}
