//CONNECTING DATABASE
// this whole block of code is the default for connecting to firestore from npm I firebaseadmin .
// Before creating this we have to create we have to create the firestore database
import { initializeApp,cert, getApps } from "firebase-admin/app"; // from npm i firebase admin 
import { getFirestore} from "firebase-admin/firestore";

import serviceAccount from "../secrets.js"; // we can only create this line after we create the private key in firestore  and drag it into "secrets" 
//then ensure it is in your git ignore and secrets.js should be grayed out . rename it secrets.js becuase it doesnt start like that . add export default in secrets 

export default function dbConnect() { // preparing our function to connect to the database // another default set up 
if(!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount)
    })
}
return getFirestore()
}