class cars {
    cars;
    millage;
    constructor(c, m) {
        this.cars = c;
        this.millage = m;
    }
}

const Tesla = new cars ('Tesla', 2000 );

const Bmw = new cars ('BMW', 5000);

const nexia3 = new cars ('nexia3', 4000);

function sumMashina (m1, m2, m3) {
console.log(+m1.millage + +m2.millage + +m3.millage)
}

sumMashina(Tesla, Bmw, nexia3);