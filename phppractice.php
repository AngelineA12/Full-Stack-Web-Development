Practice Program 1<br>

<?php
echo "Hello World!\n";
?>
<br>
And
<?php
// Display current date and time
echo "Current Date and Time: " .date("Y-m-d H:i:s");
?>
<br>
<br>
<br>
Practice Program 2<br>
<?php
$name = "John";
$age = 25;
$height = 5.9;
echo "Name: $name, <br>Age: $age, <br>Height: $height";
?>

<br>
<br>
<br>
Practice Program 3<br>

<?php
$num1 = 10;
$num2 = 5;

$sum = $num1 + $num2;
$difference = $num1 - $num2;
$product = $num1 * $num2;
$quotient = $num1 / $num2;
echo "Sum : $sum,<br>Difference: $difference,<br>Product: $product,<br>Qoutient: $quotient" 
?>
<br>
<br>
<br>
Practice Program 4<br>
<?php
// Get the score from the user
$score = (int)readline("Enter the score: ");

// Validate if the input is numeric
    if ($score >= 90) {
        echo "Grade: A";
    } elseif ($score >= 80) {
        echo "Grade: B";
    } elseif ($score >= 70) {
        echo "Grade: C";
    } else {
        echo "Grade: F";
    }
?>
<br>
<br>
<br>
Practice Program 5<br>
<?php
$string = "Hello, PHP!";

//String length
$length = strlen($string);
echo "Length: $length <br>";

//convert to uppercase
$uppercase = strtoupper($string);
echo "Uppercase: $uppercase <br>";

//substring
$substring = substr($string,0,5);
echo "Substring: $substring <br>";

//string replace
$newString = str_replace("PHP","World",$string);
echo "Replaced: $newString";
?>


<br>
<br>
<br>
Practice Program 6<br>
<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    echo "Hello, $name!";
}
?>
<form method = "post" action="<?php echo $_SERVER["PHP_SELF"];?>">
Enter your name: <input type = "text" name = "name">
<input type = "submit" value = "Submit">
</form>