import {observable, computed} from 'mobx';

export class TakeState {
    @observable inventoryView = false;
    @observable slideIndex = 0;
    @observable cart = [];
    
    @computed get cartLength() {
        return this.cart.length;
    }
    
    addItemToCart(item) {
        var cart = [this.cart];
        cart.push(item.guid);
        this.cart = cart;
    }
}

export const takeState =  new TakeState();