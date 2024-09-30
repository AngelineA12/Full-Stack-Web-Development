function calculateCircleArea() {
    var radius = document.getElementById('radius').value;
  
    if (!isNaN(radius) && radius > 0) {
      var area = calculateArea(radius);
      document.getElementById('output').innerHTML = `<p>The area of the circle with radius ${radius} is: ${area.toFixed(2)}</p>`;
    } else {
      document.getElementById('output').innerHTML = '<p>Invalid radius. Please enter a valid positive number.</p>';
    }
  }
  
  function calculateArea(radius) {
    // Assuming the value of π is 3.14
    return 3.14 * radius * radius;
  }