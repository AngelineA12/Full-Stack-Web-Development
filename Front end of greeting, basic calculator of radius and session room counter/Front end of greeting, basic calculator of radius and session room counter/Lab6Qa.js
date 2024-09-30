function greetUser() {
    var userName = document.getElementById('name').value;
  
    if (userName.trim() !== "") {
      var greeting = greet(userName);
      document.getElementById('output').innerHTML = '<p>' + greeting + '</p>';
    } else {
      document.getElementById('output').innerHTML = '<p>No name entered. Please try again.</p>';
    }
  }
  
  function greet(name) {
    return 'Hello, ' + name + '!';
  }
