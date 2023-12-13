import { Component, OnInit } from '@angular/core';
import { Music } from 'C:/Users/Renanh/Desktop/cyber-music-player-front-end/cyber-music-player-front-end/src/app/models/music';

@Component({
    selector: 'app-music-item',
    templateUrl: './music-item.component.html',
    styleUrls: ['./music-item.component.css']
})
export class MusicItemComponent implements OnInit {

    music : Music;

    constructor() {}

    ngOnInit() {
    }
}
