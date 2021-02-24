import { Component } from '@angular/core';
import { bookList } from './books';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'bookShop';
    bookList = bookList;
}
