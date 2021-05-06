import { Component, OnInit } from "@angular/core";
import { ProductTile } from "../interfaces/product-tile";

@Component({
    selector:'pm-products',
    templateUrl:'./product-list.component.html',
    styleUrls:['./product-list.component.css']
})
export class ProductListComponent implements OnInit{

    ngOnInit(){
      console.log('Product List Component Initialized');
      this.filterType = '';
    }

    pageTitle: string = 'Product List';
    imageHeight = 50;
    imageMargin = 2;
    showImage: boolean = false;

    private _listFilter: string = '';

    get filterType(): string {
      return this._listFilter;
    }

    set filterType(val:string) {
      this._listFilter = val;
      console.log('From Set Filter Setter',this._listFilter);

      this.filteredProducts = this.performFilter(this.filterType);
    }

    filteredProducts: ProductTile[] = [];

    products: ProductTile[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2021",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2021",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2021",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "assets/images/hammer.png"
          },
    ];

    performFilter(filterVal:string): ProductTile[] {
      filterVal = filterVal.toLocaleLowerCase();
      return this.products.filter((product:ProductTile)=> product.productName.toLocaleLowerCase().includes(filterVal));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}
