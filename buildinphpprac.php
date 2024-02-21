<?php

// Example 1: String manipulation
$string = "Hello, World!";
$uppercaseString = strtoupper($string);
$lowercaseString = strtolower($string);

echo "Original String: $string<br>";
echo "Uppercase String: $uppercaseString<br>";
echo "Lowercase String: $lowercaseString<br>";

// Example 2: Array manipulation
$numbers = [1, 2, 3, 4, 5];
$sum = array_sum($numbers);
$reversedArray = array_reverse($numbers);

echo "Sum of Numbers: $sum<br>";
echo "Reversed Array: ";
print_r($reversedArray);
echo "<br>";

// Example 3: Date and time functions
$currentDate = date('Y-m-d');
$nextWeek = date('Y-m-d', strtotime('+1 week'));

echo "Current Date: $currentDate<br>";
echo "Next Week: $nextWeek<br>";

?>