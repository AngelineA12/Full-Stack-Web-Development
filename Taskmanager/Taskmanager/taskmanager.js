document.addEventListener('DOMContentLoaded', function () {
    // Function to add a new list item
    function addItem() {
      var itemInput = document.getElementById('itemInput');
      var itemList = document.getElementById('itemList');

      // Get the value from the input field
      var newItemText = itemInput.value.trim();

      // Check if the input is not empty
      if (newItemText !== '') {
        // Create a new list item
        var newItem = document.createElement('li');
        newItem.textContent = newItemText;

        // Add click event listener to remove the item when clicked
        newItem.addEventListener('click', function () {
          itemList.removeChild(newItem);
        });

        // Add the new item to the list
        itemList.appendChild(newItem);

        // Clear the input field
        itemInput.value = '';
      }
    }

    // Add click event listener to the button
    var addItemBtn = document.getElementById('addItemBtn');
    addItemBtn.addEventListener('click', addItem);
  });