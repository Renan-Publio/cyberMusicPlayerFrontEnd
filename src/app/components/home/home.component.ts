import { Component, OnInit } from '@angular/core';
import { MusicService } from '/Users/Renanh/Desktop/cyber-music-player-front-end/cyber-music-player-front-end/src/app/music-service/music.service';
import { Music } from '/Users/Renanh/Desktop/cyber-music-player-front-end/cyber-music-player-front-end/src/app/models/music';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    musics: Array<Music> = [];

    constructor(private musicService: MusicService) {}

    ngOnInit() {
        this.musics = this.musicService.getMusics();
    }
}