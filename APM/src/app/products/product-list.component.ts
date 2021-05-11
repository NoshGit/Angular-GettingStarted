import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ProductTile } from "../interfaces/product-tile";
import { ProductService } from "../shared/services/product.service";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

    constructor(private ProductService: ProductService){}

    ngOnInit(){
      console.log('Product List Component Initialized');
      this.sub = this.ProductService.getProducts().subscribe({
        next: products => this.products = products,
        error: err => this.errorMessage = err
      });
    }

    pageTitle: string = 'Product List';
    imageHeight = 50;
    imageMargin = 2;
    showImage: boolean = false;
    filterType:string=''
    errorMessage: string = '';
    sub!: Subscription; 

    products: ProductTile[] = [];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    displayStars(message:string):void {
      this.pageTitle = `Product List <span class="titleMsg">${message}</span>`;
    }

    ngOnDestroy(): void {
      this.sub.unsubscribe();
    }
}
