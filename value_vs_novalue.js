//determining whether a variable has a value. If keyword evaluates true if variable has a value or false if variable is either undefined or null. 


var myVar=[null,0,''];
for (i=0;i<myVar.length; i++)
{
 if(myVar[i])
    alert('myVar has a value ' + myVar[i]);

 else 
	alert('myVar does not have a value ' + myVar[i]);
}
