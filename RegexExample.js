var name = "Max2";

var dog = {

name: "Burek",

bark:function () {
alert(`${this.name}  is barking`);
}

};
var dog2 = new Object();


dog2.bark = function(){
    alert(`${this.name}  is barking`);

};
 var barkFunc = dog.bark;
 barkFunc(); // Max is barking. (wartość pobrana z globalnej zmiennej "name")

// var barkFunc2 = dog.bark.bind(dog);
// barkFunc2(); //Burek is barking.