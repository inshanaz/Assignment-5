<!DOCTYPE HTML>
<html>
<head>
<style>
table,tr, td
{
border: solid black;
width: 10%;
text-align: center;
border-collapse: collapse;
background-color:pink;
}
table { margin:right; }
</style>
<script>
document.write( "<table><tr><thcolspan='3'> NUMBERS FROM 0 TO 10 WITH THEIR SQUARES AND CUBES </th></tr>" );
document.write( "<tr><td>Number</td><td>Square</td><td>Cube</td></tr>" );
for(var n=0; n<=10; n++)
{
document.write( "<tr><td>" + n + "</td><td>" + n*n + "</td><td>" + n*n*n
+ "</td></tr>" ) ;
}
document.write( "</table>" ) ;
</script>
</head>
</html>
