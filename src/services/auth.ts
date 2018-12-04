import firebase from 'firebase'
import { SigninPage } from '../pages/signin/signin';

export class AuthService {
    signup(email: string, password: string) {
       return firebase.auth().createUserWithEmailAndPassword(email, password);
    }
    signin(email: string, password: string) {
       return firebase.auth().signInWithEmailAndPassword(email, password);
    }
}