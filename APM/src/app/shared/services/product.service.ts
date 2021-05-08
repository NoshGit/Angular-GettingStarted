import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators"
import { ProductTile } from "src/app/interfaces/product-tile";

@Injectable({
    providedIn:'root'
})

export class ProductService {
    private url = 'api/Products/products.json';
    
    constructor(private http: HttpClient){}

    getProducts(): Observable<ProductTile[]> {
        return this.http.get<ProductTile[]>(this.url).pipe(
            tap(data => console.log(data)),
            catchError(this.handleError)
        );
    }    

    private handleError(err: HttpErrorResponse){
        let errorMsg = '';
        if(err.error instanceof ErrorEvent){
            errorMsg = `An Error occured ${err.error.message}`;
        }else{
            errorMsg = `Server Return Code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errorMsg);
        return throwError(errorMsg);
    }
}

