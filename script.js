function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  }
  
  function addRecord() {
    const name = document.getElementById('name').value;
    const item = document.getElementById('item').value;
    const quantity = document.getElementById('quantity').value;
    const borrowedDate = formatDate(new Date());
    
    const table = document.getElementById('recordTable');
    const newRow = table.insertRow(-1);
    
    const nameCell = newRow.insertCell(0);
    nameCell.innerHTML = name;
    
    const itemCell = newRow.insertCell(1);
    itemCell.innerHTML = item;
    
    const quantityCell = newRow.insertCell(2);
    quantityCell.innerHTML = quantity;
    
    const borrowedCell = newRow.insertCell(3);
    borrowedCell.innerHTML = borrowedDate;
    
    const returnedCell = newRow.insertCell(4);
    returnedCell.innerHTML = '-';
  }
  
  function returnItem() {
    const table = document.getElementById('recordTable');
    const rows = table.getElementsByTagName('tr');
    
    if (rows.length > 1) {
      const lastRow = rows[rows.length - 1];
      const returnedCell = lastRow.cells[4];
      returnedCell.innerHTML = formatDate(new Date());
    }
  }
  
  function exportToExcel() {
    const table = document.getElementById('recordTable');
    const rows = table.getElementsByTagName('tr');
    
    let csvContent = 'data:text/csv;charset=utf-8,';
    
    for (const row of rows) {
      const rowData = [];
      
      for (const cell of row.cells) {
        rowData.push(cell.innerHTML);
      }
      
      csvContent += rowData.join(',') + '\n';
    }
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'borrowing_record.csv');
    document.body.appendChild(link);
    link.click();
  }