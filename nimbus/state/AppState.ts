import {observable, computed} from 'mobx';
import {observer} from 'mobx-react';
import {browserHistory} from 'react-router';

export class AppState {
    @observable nightmode = false;
    @observable loggedIn = false;
    @observable viewName = '';
    @observable userName = '';
    
    toggleNightMode() {
      this.nightmode = this.nightmode ? false : true;
    }
    
    toggleLoggedIn() {
      this.loggedIn = this.loggedIn ? false : true;
      this.userName = 'Joseph Isaac'
    }
    
    signOut() {
      this.loggedIn = false;
    }
  
    changeViewName(name) {
      this.viewName = name;
    }
    
   gotoPage(page) {
       browserHistory.push(page);
   }
 
}

export const appState =  new AppState();