import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../app.component';

@Component({
    selector: 'app-cart-component',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
    @Input()
    cartItems!: Cart[];
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

    deletePosition(id: number): void {
        const index = this.cartItems.findIndex((el) => el.id === id);
        this.cartItems.splice(index, 1);
    }
}
