import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-small-frame',
    templateUrl: './small-frame.component.html',
    styleUrls: ['./small-frame.component.css']
})
export class SmallFrameComponent implements OnInit {
    @Input() title: string;
    @Input() description: string;
    @Input() link: string;
    @Input() imageUrl: string;

    constructor() { }

    ngOnInit(): void {
    }

}
