import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-imagelink',
  templateUrl: './imagelink.component.html',
  styleUrls: ['./imagelink.component.css']
})
export class ImagelinkComponent implements OnInit, OnChanges {


    @Input() product;

  constructor() { }

  ngOnInit() {
  }


  ngOnChanges(changes) {
    console.log(changes);
    }

}
