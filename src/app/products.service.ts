import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { isArray } from 'util';
import productsData from './products.static';
import { UiService } from './ui.service';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: BehaviorSubject<any> = new BehaviorSubject(productsData);
  basket: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor(private uiService: UiService) {
    try {
      const basket = localStorage.getItem('_basket');
      console.log('basket', basket);
      const basketJOSN = JSON.parse(basket);
      this.basket.next(basketJOSN || []);
    } catch (e) {
      console.log(e);
    }

    this.basket.subscribe(nexBasket => {
      localStorage.setItem('_basket', JSON.stringify(nexBasket));
    });
  }

  /**
   * @returns Observable
   */
  getBasket(): Observable<any> {
    return this.basket;
  }

  /**
   * @param  {any} product
   * @returns void
   */
  addProductToBasket(product: any): void {
    const products = this.basket.getValue();
    if (isArray(products)) {
      console.log(products, product.id);
      if (products.indexOf(product.id) === -1) {
        products.push(product.id);
        this.uiService.showAlert('Product added');
      } else {
        this.uiService.showAlert('Product already exist in the basket');
      }
      this.basket.next(products);
    }
  }

  /**
   * @param  {} selectedProduct
   * @returns void
   */
  removeProductFromBasket(selectedProduct): void {
    const products = this.basket.getValue();
    console.log(products, selectedProduct);
    if (isArray(products)) {
      const newProducts = products.filter((productId) => productId !== selectedProduct.id);
      console.log(newProducts);
      this.basket.next(newProducts);
    }
  }

  /**
   * @returns Observable
   */
  getAllProductList(): Observable<any> {
    return this.products;
  }

  getProductItem(productId) {
    let selectedProduct = {};
    const products = this.products.getValue();
    products.forEach(product => {
      console.log(product.id, productId);
      if (product.id === productId) {
        selectedProduct = product;
      }
    });
    return selectedProduct;
  }
}
