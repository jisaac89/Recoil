import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';

export class AppState {
    @observable nightmode = false;
    @observable loginView = true;
    @observable dashboardView = true;
    @observable inventoryView = false;
    @observable suppliersView = false;
    @observable slideIndex = 0;
    
    constructor() {
        //
    }
    
    toggleNightMode() {
      this.nightmode = this.nightmode ? false : true;
    }
    
    toggleSignIn() {
      this.loginView = this.loginView ? false : true;
    }
    
    signOut() {
      this.loginView = true;
    }
    
    gotoSlideIndex(index) {
      this.slideIndex = index;
    }
}

export const appState =  new AppState();