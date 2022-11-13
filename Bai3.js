let a = "swimm";
if (a+"ing") {
    console.log(a.replace("ing", "ly"));
}
else if (a.length<3){
    console.log(a);
}
else{
    console.log(a+"ing");
}