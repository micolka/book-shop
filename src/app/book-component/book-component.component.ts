import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../books';

@Component({
    selector: 'app-book-component',
    templateUrl: './book-component.component.html',
    styleUrls: ['./book-component.component.scss'],
})
export class BookComponentComponent {
    @Input()
    book!: BookModel;
    constructor() {}

    addBookToCart(name: string): void {
        console.log(`Book ${name} added to cart`);
    }
}
