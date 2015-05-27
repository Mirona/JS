function areaOfPizzaSlice(diameter, numberOfSlices){
    var sliceArea =   areaOfPizza(diameter)/numberOfSlices; 
    return sliceArea;
 
function areaOfPizza(diameter)
{
     var radius = diameter/2; 
        var area = 3.14 * radius * radius;
        return area;
}
} 

alert(areaOfPizzaSlice(10,4));

