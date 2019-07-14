import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartdata-osgroup';
  products = [
    { "id": 1, "name": "Apple Iphone XR", "description": 'It is the best!' },
    { "id": 2, "name": "Samsung S10" },
    { "id": 3, "name": "Samsung A50", "description": 'It is good!' },
    { "id": 4, "name": "Nokia 6.1", "description": 'It is a wastage of money!' }
  ];

  share(product) {
    console.log("Product info", product);
  }

}
