// function car (n,s){
//     this.name = n;
//     this.speed =s;
// }

// car.prototype.boost = function(b){
//     let netSpeed = this.speed + b;
//     console.log(`netSpeed of ${this.name} is now ${netSpeed} km/h`);
// }

// car.prototype.Reduce = function(r){
//     let redSpeed = this.speed - r;
//     console.log(`Reduced speed of ${this.name} is now ${redSpeed} km/h`);
// }

// var car1 = new car("Maserati",200);
// var car2 = new car("Lamborghini",350);
// var car3 = new car ("Ferrari-F430",250);
// car1.boost(50);
// car2.Reduce(70);
// car3.boost(120);

// var str = "masai";
// // 
// str.__proto__.meriProp = function (str){
//     console.log(this.length)
// }

// str.meriProp()
// console.log(str.__proto__)

// var name = "bksingh";
// name.meriProp()

// var array = [1,2,3,4,5];
// console.log(array);

function customArray(){
    
Object.defineProperty(this,"length",{
    value: 0,
    writable: true,
    enumerable:false,
})

this.length = arguments.length;
    // console.log(arguments)
    for(let i = 0;i<this.length;i++){
        this[i] = arguments[i];
    }

}
customArray.prototype.puss = function (i){
    let index = this.length;
    this[index] = i;
    this.length++;
}

customArray.prototype.poop = function(){
    let index = this.length -1;
    delete this[index];
    this.length--;
}
 
customArray.prototype.peek = function(){
    let index = this.length-1;
    console.log(this[index]);
}

customArray.prototype.printEkLineMein = function(){
   let bag ="";
    for(let i=0 ; i<this.length; i++){
    bag+= this[i]+",";
    }
    console.log("print Seedha: ",bag);
}
customArray.prototype.printUlta = function (){
    let bag ="";
    for(let i =this.length-1; i>=0 ; i--){
        bag+=this[i]+",";
    }
    console.log("print Ulta: ",bag)
}

customArray.prototype.size = function (){
    console.log(`Current length is : ${this.length}`)
}


var arr1 = new customArray("a",2,3,4,5,"b");

// console.log(arr1.__proto__)
arr1.puss(8);
arr1.puss("x");
arr1.poop();
arr1.poop();
arr1.poop();
arr1.puss("sabra");
arr1.peek();
arr1.printEkLineMein();
arr1.printUlta()
arr1.size();
console.log(Object.values(arr1))
console.log(arr1.__proto__)