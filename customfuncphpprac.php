<?php

// Custom function to calculate the area of a rectangle
function calculateRectangleArea($length, $width) {
    $area = $length * $width;
    return $area;
}

// Example usage of the custom function
$rectangleLength = 5;
$rectangleWidth = 8;

$areaOfRectangle = calculateRectangleArea($rectangleLength, $rectangleWidth);

// Output the result
echo "The area of the rectangle with length $rectangleLength and width $rectangleWidth is: $areaOfRectangle";

?>
