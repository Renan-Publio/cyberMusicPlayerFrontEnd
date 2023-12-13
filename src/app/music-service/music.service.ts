import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Music } from '/Users/Renanh/Desktop/cyber-music-player-front-end/cyber-music-player-front-end/src/app/models/music';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root'
})
export class MusicService {

    private readonly http!: HttpClient;

    constructor() {}

    getMusics(): Observable<Music[]> {
        return this.http.get<Music[]>('https://example.com/api/musics');
    }
}