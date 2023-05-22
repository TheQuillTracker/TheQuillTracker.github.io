const firebaseConfig = {
    apiKey: "AIzaSyCaOVVb_owalQOlHC9DdjTYDPyQbu_2pmY",
    authDomain: "thequillinventorytracker.firebaseapp.com",
    databaseURL: "https://thequillinventorytracker-default-rtdb.firebaseio.com",
    projectId: "thequillinventorytracker",
    storageBucket: "thequillinventorytracker.appspot.com",
    messagingSenderId: "517005324655",
    appId: "1:517005324655:web:8645ad9e3e487f0414f89a",
    measurementId: "G-EE5L5XGL8B"
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