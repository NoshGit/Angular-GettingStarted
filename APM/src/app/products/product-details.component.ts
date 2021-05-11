import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductTile } from '../interfaces/product-tile';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'pm-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle:string = 'Product Detail';
  product: ProductTile;
  id: number = 0;
  error: boolean =  false;

  constructor(private route: ActivatedRoute, private router: Router, private productService : ProductService) { 
    console.log('Page ID = ' , this.route.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduct(this.id);
  }

  getProduct(id: number): void{
    this.productService.getProduct(id).subscribe({
      next: p => this.product = p,
      error: err => this.error = true
    })
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
