import { boot } from 'quasar/wrappers';

import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore'; // eslint-disable-line

const firebaseConfig = {
  apiKey: 'AIzaSyC0tNAN7jP5geo7A3qV0ub85K_9NFYrPEQ',
  authDomain: 'quasar-web-ced97.firebaseapp.com',
  projectId: 'quasar-web-ced97',
  storageBucket: 'quasar-web-ced97.appspot.com',
  messagingSenderId: '852786790002',
  appId: '1:852786790002:web:b9794cb9ec54a4e44acceb',


};

const fapp = initializeApp(firebaseConfig);

const db = getFirestore(fapp);

export default boot(async ({ app }) => {
  app.config.globalProperties.$db = db;

  app.config.globalProperties.$Firebaseapp = fapp;
});
export { fapp };
