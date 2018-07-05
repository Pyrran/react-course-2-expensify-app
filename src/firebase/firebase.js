import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};


  // apiKey: 'AIzaSyADNvJLhqxKq4jqjZfKyFhyfAYF_MeZN2o',
  // authDomain: 'expensify-f0cdf.firebaseapp.com',
  // databaseURL: 'https://expensify-f0cdf.firebaseio.com',
  // projectId: 'expensify-f0cdf',
  // storageBucket: 'expensify-f0cdf.appspot.com',
  // messagingSenderId: '495490846322'


firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref().remove();

// const expensesData = {
//   first: {
//     description: 'Gas Bill',
//     amount: 345.23,
//     note: 'This is the first expense',
//     createdAt: 0
//   },
//   second: {
//     description: 'Water Bill',
//     amount: 61.94,
//     note: 'This is the second expense',
//     createdAt: 2387642876
//   },
//   third: {
//     description: 'Netflix',
//     amount: 9.99,
//     note: 'This is the third expense',
//     createdAt: 1123876687
//   }
// };

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log('DELETED:', snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log('CHANGED:', snapshot.key, snapshot.val());
// });

// // child_added (gets called for existing entries as well as new)
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log('ADDED:', snapshot.key, snapshot.val());
// });

// database.ref('expenses').push(expensesData.first);
// database.ref('expenses').push(expensesData.second);
// database.ref('expenses').push(expensesData.third);

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
// },
// (e) => {
//   console.log('Error with data fetching', e);
// });


// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });


// database.ref('notes/-LGUeqFIUZXB-rPik4s5').remove();

// database.ref('notes').push({
//   title: 'Course Topics',
//   body: 'This is my new note'
// });

// database.ref().set(notes);

// const onValueChange = (snapshot) => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// };

// const onValueChange = (snapshot) => {
//   console.log(snapshot.val());
// };

// database.ref().on('value', onValueChange, (e) => {
//   console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//   database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//   database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref('age').set(30);
// }, 10500);

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Daren Green',
//   age: 49,
//   stressLevel: 6,
//   job: {
//     title: 'Software Developer',
//     company: 'Google'
//   },
//   isSingle: true,
//   location: {
//     city: 'Basildon',
//     country: 'UK'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((error) => {
//   console.log('This failed', error);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref('isSingle').remove()
//   .then(() => {
//     console.log('isSingle removed from database successfully');
//   })
//   .catch((e) => {
//     console.log('ERROR: Something went wrong removing isSingle!', e);
//   });
