import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart.component';

@NgModule({
    declarations: [CartComponent],
    exports: [CartComponent],
    imports: [CommonModule],
})
export class CartModule {}
