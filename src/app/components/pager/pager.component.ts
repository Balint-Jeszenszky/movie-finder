import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
    @Input() pages: number;
    page: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const page = +params['page'] || 1;
            this.page = page;
        });
    }

    getPageNumbers() {
        const diff = this.pages - this.page;
        const start = Math.max(1, this.page - 2 - ((diff < 3) ? 3 - diff : 0));
        const n = this.page < 4 || this.page > this.pages - 4 ? 6 : 5;
        return [...Array(n).keys()].map(i => i + start );
    }

    getClasses(n: number) {
        return {
            'page-item': true,
            'active': n === this.page
        }
    }

}
