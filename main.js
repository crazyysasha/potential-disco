class car {
price;
car;
 constructor(p, c){
    this.price = p;
    this.car = c;
}
}

const bmw = new car ('bmw car', 2500);

const tesla = new car ('tesla car', 3000);

const nexia3 = new car ('nexia3 car', 1000);

function sumCar(c1, c2, c3) {
    console.log(c1.car + c2.car + c3.car);
}

sumCar(bmw, tesla, nexia3)