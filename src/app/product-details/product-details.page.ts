import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  currentProduct: any = {};
  constructor(private router: ActivatedRoute,
    private productService: ProductsService) {
    const { productId } = this.router.snapshot.params;
    console.log(productId);
    this.currentProduct = this.productService.getProductItem(+productId);

  }

  ngOnInit() {

  }

  addProductToBasket(product) {
    this.productService.addProductToBasket(product);
  }

}
