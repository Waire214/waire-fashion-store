import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collections('users').doc('0ndehsbn43yu74nnsiiu').collections('cartitems').doc('fdq34yahujanbvfx32eds');
// or
firestore.doc('/users/0ndehsbn43yu74nnsiiu/cartitems/fdq34yahujanbvfx32eds');
firestore.collection('users/0ndehsbn43yu74nnsiiu/cartitems');