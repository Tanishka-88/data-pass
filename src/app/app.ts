import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./common/card/card";
import { FormsModule } from '@angular/forms';
import { Navbar } from "./navbar/navbar";

@Component({
  selector: 'app-root',
  imports: [FormsModule, Navbar, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  data: any=[
  {
    imgUrl: "https://picsum.photos/300/300?random=1",
    productName: "Wireless Headphones",
    price: 2555,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=2",
    productName: "Bluetooth Speaker",
    price: 1899,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=3",
    productName: "Smart Watch",
    price: 4999,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=4",
    productName: "Gaming Mouse",
    price: 1299,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=5",
    productName: "Mechanical Keyboard",
    price: 3499,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=6",
    productName: "Laptop Stand",
    price: 999,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=7",
    productName: "USB-C Hub",
    price: 1599,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=8",
    productName: "Power Bank",
    price: 2199,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=9",
    productName: "Portable SSD",
    price: 6499,
  },
  {
    imgUrl: "https://picsum.photos/300/300?random=10",
    productName: "Noise Cancelling Earbuds",
    price: 3999,
  },
];


}
