import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    pages = [{ name: 'Popular', path: '/' }, { name: 'Search', path: '/search' }, { name: 'Favourites', path: '/favourites' }];

    constructor(location: Location) { }

    ngOnInit(): void {
    }

    getClasses(page) {
        return {
            'nav-link': true,
            'active': location.pathname === page.path
        }
    }

}
