import { Component } from '@angular/core';
import { title } from 'process';
interface Iproduct{
  title:string;
  image:string;
}
@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {


  products:Iproduct[]= [
    {
    "title":"Product 1",
    "image" : "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg"
    },
    {
      "title":"Product 2",
      "image" : "https://ecommerce.routemisr.com/Route-Academy-products/1680403266739-cover.jpeg"
    },
    {
      "title":"Product 3",
      "image" : "https://ecommerce.routemisr.com/Route-Academy-products/1680403156501-cover.jpeg"
    },
    {
      "title":"Product 4",
      "image" : "https://ecommerce.routemisr.com/Route-Academy-products/1680402838276-cover.jpeg"
    },
    {
      "title":"Product 5",
      "image" : "https://ecommerce.routemisr.com/Route-Academy-products/1680402563605-cover.jpeg"
    },
    {
      "title":"Product 6",
      "image" : "https://ecommerce.routemisr.com/Route-Academy-products/1680402411833-cover.jpeg"
    },
  ]
}
