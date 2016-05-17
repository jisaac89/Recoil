import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import SupplierData from '../data/SupplierData';

export class SupplierState {
    @observable inventoryView = false;
    @observable slideIndex = 0;
    @observable suppliers = SupplierData;
    
    @computed get suppliersLength() {
        return this.suppliers.length;
    }
    
    constructor() {
      console.log(this.suppliers);
    }
    
    toggleSlideIndex() {
      this.slideIndex = this.slideIndex === 0  ? 1 : 0;
    }
    
    addSupplier(supplier) {
      this.suppliers.push(supplier);
    }
    
    removeSupplier(supplier) {
      this.suppliers =  this.suppliers.filter((el)=>{return el.SupplierName != supplier;}) 
    }
}

export const supplierState =  new SupplierState();