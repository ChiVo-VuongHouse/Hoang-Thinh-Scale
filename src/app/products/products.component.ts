import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('Hàm này sẽ duoc thuc hien trong qua trinh khoi tao view truoc khi hien thi len tren man hinh' + 'lay du lieu luc nay');
  }
}
