function hello(name) {
    console.log("Hello " + name);
}
var firstName = "bob";
hello(firstName);
hello(firstName + "Marley");
function concat(a, b) {
    return a + b;
}
var wcs = concat("Wild", concat("Code", "School"));
console.log(wcs);
