import { observable, computed } from 'mobx';

function checkForMobile() {
    return window.navigator.userAgent.match(/Android|iPad|iPhone|iPod/i) != null || window.screen.width <= 480;
}

export class AppState {

    @observable nightmode = false;
    @observable mobile = false;
    @observable menuEnabled = true;

    constructor() {
        const self = this;
        self.mobile = checkForMobile();
    }

    initializeApp() {
        //
    }


}

export const appState = new AppState();