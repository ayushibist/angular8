import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  @Input() songs: any;

  // songsList = [];
  // @Input()
  // set songs(value) {
  //   console.log('In child setter function!');
  //   console.log(value);
  //   this.songsList = value;
  // }

  constructor(
    private artistService: ArtistService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('In ngOnChanges!');
    const currentItem: SimpleChange = changes.songs;
    console.log('prev value: ', currentItem.previousValue);
    console.log('got item: ', currentItem.currentValue);
  }

  info(song) {
    this.artistService.shareSong(song);
    this.router.navigateByUrl('/song-info');
  }

}
