import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { ConvertToSpacesPipe } from './pipes/covert-to-space.pipes';
import { FilterArrayPipe } from './pipes/filter-array.pipe';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StarComponent,
    ConvertToSpacesPipe,
    FilterArrayPipe
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacesPipe,
    FilterArrayPipe
  ]
})
export class SharedModule { }
