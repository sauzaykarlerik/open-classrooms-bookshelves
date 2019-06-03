import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    // <!-- The core Firebase JS SDK is always required and must be listed first -->
    // <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>
    // <!-- TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#config-web-app -->

    const firebaseConfig = {
      apiKey: 'AIzaSyB6qa42-HEdMxMB3SOMEcRRow6chjh8cPQ',
      authDomain: 'open-classrooms-bookshelves.firebaseapp.com',
      databaseURL: 'https://open-classrooms-bookshelves.firebaseio.com',
      projectId: 'open-classrooms-bookshelves',
      storageBucket: 'open-classrooms-bookshelves.appspot.com',
      messagingSenderId: '191159890949',
      appId: '1:191159890949:web:25b76d243249279e'
    };
    firebase.initializeApp(firebaseConfig);
  }
}
