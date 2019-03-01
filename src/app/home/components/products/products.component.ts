import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  constructor(
    private router: Router,
    private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getAllProductList()
      .subscribe((products) => {
        this.products = products;
      });
  }

  /**
   * @param  {any} product
   * @returns void
   */
  navigateToPorduct(product: any): void {
    this.router.navigateByUrl('/product/' + product.id);
  }
}
