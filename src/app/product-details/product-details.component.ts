import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/prod.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  
{

  @Input()  proObj:Product={productTitle:'',Description:'',Image:''};

  @Output() myEvent = new EventEmitter()

  sendProductDetailsToParent(productTitle:string)
  {
    this.myEvent.emit(productTitle);
  }

}
