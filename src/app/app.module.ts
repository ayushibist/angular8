import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layouts/main/main.component';
import { HomeComponent } from './static-pages/home/home.component';
import { AboutUsComponent } from './static-pages/about-us/about-us.component';
import { SampleInfoComponent } from './static-pages/sample-info/sample-info.component';
import { AlbumsComponent } from './artists/albums/albums.component';
import { SongInfoComponent } from './artists/song-info/song-info.component';
import { SongsComponent } from './artists/songs/songs.component';
import { AlbumListingComponent } from './artists/album-listing/album-listing.component';
import { ArtistInfoComponent } from './artists/artist-info/artist-info.component';
import { SampleReactiveFormComponent } from './forms/sample-reactive-form/sample-reactive-form.component';
import { SampleTemplateFormComponent } from './forms/sample-template-form/sample-template-form.component';
import { MyPipesComponent } from './static-pages/my-pipes/my-pipes.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { MyDirectivesComponent } from './static-pages/my-directives/my-directives.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AboutUsComponent,
    SampleInfoComponent,
    AlbumsComponent,
    SongInfoComponent,
    SongsComponent,
    AlbumListingComponent,
    ArtistInfoComponent,
    SampleReactiveFormComponent,
    SampleTemplateFormComponent,
    MyPipesComponent,
    ExponentialPipe,
    MyDirectivesComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
