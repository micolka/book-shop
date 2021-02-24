import { Component, OnInit } from '@angular/core';

interface Cart {
    id: number;
    name: string;
    count: number;
}

@Component({
    selector: 'app-cart-component',
    templateUrl: './cart-component.component.html',
    styleUrls: ['./cart-component.component.scss'],
})
export class CartComponentComponent {
    cartItems: Cart[] = [
        { id: 1, name: 'Last Man Standing', count: 1 },
        { id: 2, name: 'The Kite Runner', count: 3 },
    ];

    constructor() {}

    addBook(id: number): void {
        const index = this.cartItems.findIndex((el) => el.id === id);
        this.cartItems[index].count++;
    }

    removeBook(id: number): void {
        const index = this.cartItems.findIndex((el) => el.id === id);
        if (this.cartItems[index].count > 0) {
            this.cartItems[index].count--;
        }
    }

    deleteBook(id: number): void {
        this.cartItems = this.cartItems.filter((el) => el.id !== id);
    }
}
