import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    cropWidth=75;
    @Input() rating:number = 0;
    @Output() starEvent: EventEmitter<string> = new EventEmitter();
    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }

    onStarClick() {
        let starStr = `Star click rating = ${this.rating}`;
        console.log(starStr);
        this.starEvent.emit(starStr);
    }

}