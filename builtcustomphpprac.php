<?php
// Custom function to calculate the area of a circle
function calculateCircleArea($radius) {
    $pi = pi(); // Using the built-in pi() function to get the value of pi
    $area = $pi * pow($radius, 2); // Using pow() for exponentiation
    return $area;
}

// Using the custom function with a specific radius
$radius = 5;
$circleArea = calculateCircleArea($radius);

// Displaying the result
echo "Radius: $radius\n";
echo "Area of the circle: $circleArea\n";
?>
