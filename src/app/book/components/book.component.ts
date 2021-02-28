import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BookModel } from '../../books';

@Component({
    selector: 'app-book-component',
    templateUrl: './book.component.html',
    styleUrls: ['./book.component.scss'],
})
export class BookComponent {
    @Input()
    book!: BookModel;
    constructor() {}

    @Output() isBookAdded = new EventEmitter<number>();
    addBookToCart(): void {
        this.isBookAdded.emit(this.book.id);
    }
}
