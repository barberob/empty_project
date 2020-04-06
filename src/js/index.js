import '../css/app.scss';
import ClassTemplate from './ClassTemplate'

class App {

    constructor () {
      
        this.initApp();      
    }

    initApp () {
      // Start application
      new ClassTemplate();
      
    }
}

new App();
