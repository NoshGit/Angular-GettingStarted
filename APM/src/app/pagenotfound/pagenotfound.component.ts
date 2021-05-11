import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  imgUrl = 'assets/images/page-not-found.png';
  constructor() { }

  ngOnInit(): void {
  }

}
