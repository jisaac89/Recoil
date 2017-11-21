import {observable, computed} from 'mobx';
import {browserHistory} from 'react-router';

function checkForMobile() {
    return window.navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) != null || window.screen.width <= 480;
}

export class AppState {
    
    @observable nightmode = false;
    @observable mobile = false;
    @observable menuEnabled = false;

    constructor() {
        const self = this;
        self.mobile = checkForMobile();
    }

    initializeApp() {
        //
    }
    
    gotoPage(page : string) {
        browserHistory.push(page);
    }

}

export const appState = new AppState();