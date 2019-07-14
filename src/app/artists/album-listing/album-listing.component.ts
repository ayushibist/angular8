import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { ArtistInfoComponent } from "../artist-info/artist-info.component";

@Component({
  selector: 'app-album-listing',
  templateUrl: './album-listing.component.html',
  styleUrls: ['./album-listing.component.css']
})
export class AlbumListingComponent implements OnInit {

  albums: any[];
  @Output() albumEvent = new EventEmitter<object>();

  // @ViewChild(ArtistInfoComponent, {static: false, read: ElementRef}) child;
  @ViewChild(ArtistInfoComponent, {static: false}) child;
  message:string;

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    this.loadAlbums();

    // this.message = this.child.message;
    // console.log('this.message=', this.child.message);
  }

  loadAlbums() {
    this.artistService.getArtistAlbums().subscribe(result => {
      this.albums = result;
      console.log(this.albums)
    });
  }

  sendAlbumInfo(data) {
    this.albumEvent.emit(data);
  }

  ngAfterViewInit() {
    this.message = this.child.message;
    console.log('this.message=', this.child.message);
    // console.log('this.message=', this.child.nativeElement);
  }

}
