import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    /**
     * the website's main pages available in the navbar
     */
    pages = [{ name: 'Popular', path: '/' }, { name: 'Search', path: '/search' }, { name: 'Favourites', path: '/favourites' }];

    constructor(location: Location) { }

    ngOnInit(): void {
    }

    /**
     * dynamically set the classes for a nav link
     * @param page the current page object containing the name and the path
     * @returns an an object with classes to set to the html element
     */
    getClasses(page) {
        return {
            'nav-link': true,
            'active': location.pathname === page.path
        }
    }

    /**
     * clicks on the navbar closing icon if the user 
     * navigating to another page by clicking a nav link 
     */
    navLinkClicked() {
        if (window.innerWidth < 992) (document.querySelector(".navbar-toggler") as HTMLElement).click();
    }

}
