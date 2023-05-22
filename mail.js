  const firebaseConfig = {
    apiKey: "AIzaSyAdp0VZdRdRHRyGAHIAEvpeIW9_mlFi8q4",
    authDomain: "thequilltracker.firebaseapp.com",
    databaseURL: "https://thequilltracker-default-rtdb.firebaseio.com",
    projectId: "thequilltracker",
    storageBucket: "thequilltracker.appspot.com",
    messagingSenderId: "1626545664",
    appId: "1:1626545664:web:6a1523bd326dc8f45982e5",
    measurementId: "G-K5EZLD7KSG"
  };

  firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// Reference to the inventory in the database
const inventoryRef = database.ref('inventory');

const form = document.querySelector('#form');
const table = document.querySelector('#table');
const exportBtn = document.querySelector('#export-btn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const item = document.querySelector('#item').value;
    const quantity = document.querySelector('#quantity').value;
    const dateBorrowed = new Date().toLocaleString();
    
    // Add the new item to the database and get its key
    const newItemRef = inventoryRef.push({
        name,
        item,
        quantity,
        dateBorrowed
    });
    
    addRow(newItemRef.key, name, item, quantity, dateBorrowed);
    form.reset();
});