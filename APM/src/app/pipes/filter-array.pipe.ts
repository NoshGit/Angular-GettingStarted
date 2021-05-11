import { Pipe, PipeTransform } from "@angular/core";
import { ProductTile } from "../interfaces/product-tile";

@Pipe({
    name: 'filterArray'
})

export class FilterArray implements PipeTransform {

    transform(val:any, filter:string): ProductTile[]{
        filter = filter.toLocaleLowerCase();
        return val.filter((product:ProductTile)=> product.productName.toLocaleLowerCase().includes(filter)); 
    }

}