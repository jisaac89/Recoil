import {observable, computed} from 'mobx';
import InventoryData from '../data/InventoryData';

export class InventoryState {
    @observable inventoryView = false;
    @observable showModal = false;
    @observable inventory = InventoryData;
    
    @computed get inventoryLength() {
        return this.inventory.length;
    }
    
    constructor() {
      console.log(this.inventory);
    }
    
    toggleModal() {
      this.showModal = this.showModal ? false : true;
    }
    
    addInventory() {
      var sampleData = {
        "index": 1,
        "price" : 15.00,
        "orderedBefore" : false,
        "guid": "a23be417-d3cf-4ad1-bc93-f9b15462697g",
        "item" : {
          "name": "Glove - Walmart",
          "description": "A close-fitting covering for the hand with a separate sheath for each finger and the thumb, worn especially as protection from the cold",
          "slideIndex": "1",
          "imageUrl" : "http://ecx.images-amazon.com/images/I/51QLC7kJruL._AC_AA160_.jpg"
          }
      };
 
      this.inventory.push(sampleData);
    }
}

export const inventoryState =  new InventoryState();