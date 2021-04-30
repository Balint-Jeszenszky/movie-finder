import { Component, Input, OnInit } from '@angular/core';
import { Tv } from 'src/app/models/Tv';

@Component({
    selector: 'app-tv-card',
    templateUrl: './tv-card.component.html',
    styleUrls: ['./tv-card.component.css']
})
export class TvCardComponent implements OnInit {
    @Input() tv: Tv;

    constructor() { }

    ngOnInit(): void {
    }

}
