<!DOCTYPE html>
<html>
<body>

<p id="demo"></p>

<script>

var result = function (a,b)
{

var c = a*b;
return c;
}

alert(result(5,5));//result(5,5) is an argument and function call at the //same time
document.getElementById('demo').outerHTML=result(5,5);



</script>

</body>
</html>
