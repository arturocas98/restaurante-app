import app from 'firebase/app';
import firebaseConfig from './config';
import 'firebase/firestore';

class Firebase{
    constructor(){
        // si firebase da algún error en la implementación
        // se agrega la condicional
        if (!app.apps.length) {
            app.initializeApp(firebaseConfig);
        }
        this.db = app.firestore();
        
    }
}


const firebase = new Firebase();
export default firebase;