const x = '5';

const y = '8';

// console.log(+x + +y);

function sum(arg1, arg2) {
    console.log(+arg1 + +arg2);
}

sum(x, y);

sum(54, '23');

const minus = (arg1, arg2) => {
    console.log(+arg1 - +arg2);
}


minus(54, 34);



class User {
    name;
    birthyear;
    getAge() {
        console.log(this.name + "u " + (2023 - this.birthyear) + " let");
    }
    constructor(n, b) {
        this.name = n;
        this.birthyear = b;
    }
}

const sardorkin = new User("Sardor", 2009);


sardorkin.getAge();

console.log(sardorkin.name);

const odil = new User('Ozodbek', 2012);

odil.getAge();



const shkola = { name: '10-shkola', rasstoyaniye: 1.5 };

const iceberg = { name: '...', rasstoyaniye: 3.45 }


function sum(shkola, iceberg) {
    console.log(shkola.rasstoyaniye + iceberg.rasstoyaniye);
}



class Product {
    name;
    price;
    constructor(n, p) {
        this.name = n;
        this.price = p;
    }
}

const hp = new Product('HP noutbook', 1000);

const iphone = new Product('Iphone XR', 800);

const galaxy = new Product('Galaxy s23 ultra', 1400);


function sumPrice(p1, p2, p3) {
    console.log(p1.price + p2.price + p3.price);
}

sumPrice(hp, iphone, galaxy);

// TODO: #2 Car: name, mileage
//
//  totalMileage
//
//  const tesla, bmw, nexia3