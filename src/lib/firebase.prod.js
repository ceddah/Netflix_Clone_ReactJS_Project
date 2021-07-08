import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCiED4mtn_s3-NDKyd5UVmCALd3NWKsMow",
    authDomain: "netflix-clone-ae78d.firebaseapp.com",
    projectId: "netflix-clone-ae78d",
    storageBucket: "netflix-clone-ae78d.appspot.com",
    messagingSenderId: "532191794574",
    appId: "1:532191794574:web:ba21d6494961c0204200df"
}

const firebase = Firebase.initializeApp(config);

export { firebase }