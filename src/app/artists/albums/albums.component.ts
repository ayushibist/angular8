import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albumInfo: any;

  constructor() { }

  ngOnInit() {
  }

  receiveAlbum($event) {
    this.albumInfo = $event;
    console.log($event);
  }

}
