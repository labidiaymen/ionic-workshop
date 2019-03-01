import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  products: any[] = [];
  constructor(
    private productService: ProductsService
  ) { }

  ngOnInit() {
    this.productService.getAllProductList().subscribe(products => {
      this.products = products;
    });
    this.productService.getBasket().subscribe((basket) => {
      this.products = this.products.filter(product => basket.indexOf(product.id) !== -1);
    });
  }

  removeFromBasket(product) {
    this.productService.removeProductFromBasket(product);

  }

}
