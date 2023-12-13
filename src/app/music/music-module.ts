import { NgModule } from '@angular/core';

import { MusicComponent } from './music.component';
import { PlayMusicDirective } from './play-music.directive';
import { MusicService } from './music.service';

@NgModule({
  declarations: [
    MusicComponent,
    PlayMusicDirective
  ],
  imports: [],
  providers: [MusicService],
  bootstrap: [MusicComponent]
})
export class MusicModule { }