import { Component, ViewChild, ElementRef, DoCheck } from '@angular/core';
import { bookList } from './books';

export interface Cart {
    id: number;
    name: string;
    count: number;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements DoCheck {
    title = 'bookShop';
    @ViewChild('appTitle', { static: false })
    headerTitle!: ElementRef;

    bookList = bookList;

    cartItems: Cart[] = [];

    ngDoCheck(): void {
        this.changeTitle();
    }

    changeTitle(): void {
        this.title = !this.cartItems.length ? 'bookShop' : 'bookShop - check your cart';
    }

    addBookToCart(id: number): void {
        const cartIndex = this.cartItems.findIndex((book) => book.id === id);
        if (cartIndex < 0) {
            const bookIndex = this.bookList.findIndex((book) => book.id === id);
            this.cartItems.push({
                id: this.bookList[bookIndex].id,
                count: 1,
                name: this.bookList[bookIndex].name,
            });
        } else {
            this.cartItems[cartIndex].count++;
        }
    }
}
