import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  songs: any[];
  // songs = [];

  constructor(
    private artistService: ArtistService
  ) { }

  ngOnInit() {
    console.log('In home component!');
    this.loadSongs();
  }

  loadSongs() {
    this.artistService.getArtistSongs().subscribe(result => {
      this.songs = result;
      console.log(this.songs)
    });
  }

}
