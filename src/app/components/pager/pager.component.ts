import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pager',
    templateUrl: './pager.component.html',
    styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
    /**
     * number of all available pages
     */
    @Input() pages: number;

    /**
     * the page's url
     * pager sets the page number after it
     */
    @Input() baseUrl: string;

    /**
     * the current page's number
     */
    page: number;

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.queryParams.subscribe(params => {
            const page = +params['page'] || 1;
            this.page = page;
        });
    }

    /**
     * generates an array of numbers to show on the pager
     * @returns number array
     */
    getPageNumbers() {
        const diff = this.pages - this.page;
        const start = Math.max(1, this.page - 2 - ((diff < 3) ? 3 - diff : 0));
        const n = Math.min(this.page < 4 || this.page > this.pages - 4 ? 6 : 5, this.pages);
        return [...Array(n).keys()].map(i => i + start );
    }

    /**
     * dinammically sets the page number's classes
     * @param n the page number oon the pager
     * @returns the classes for a pager number
     */
    getClasses(n: number) {
        return {
            'page-item': true,
            'active': n === this.page
        }
    }

}
