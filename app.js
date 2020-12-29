class Auto {
    constructor(marca, modelo, puertas, precio){
        this.Marca = marca;
        this.Modelo= modelo;
        this.Puertas = puertas;
        this.Precio= "$" + precio;
    }
    print() {
        console.log(`Marca: ${this.Marca} // Modelo: ${this.Modelo} // Puertas: ${this.Puertas} // Precio: ${this.Precio}`)
    }
}

class Moto {
    constructor(marca, modelo, cilindrada, precio){
        this.Marca = marca;
        this.Modelo= modelo;
        this.Cilindrada = cilindrada+"cc";
        this.Precio= "$" + precio;
    }
    print() {
        console.log(`Marca: ${this.Marca} // Modelo: ${this.Modelo} // Cilindrada: ${this.Cilindrada} // Precio: ${this.Precio}`)
    }
}

var autoUno = new Auto ("Peugeout", "206", 4, "200.000,00");
var motoUno= new Moto ("Honda", "Titan", 125, "60.000,00");
var autoDos= new Auto("Peugeot", "208", 5, "250.000,00");
var motoDos= new Moto("Yamaha", "YBR", 160, "80.500,50");

let vehiculos= [autoUno, motoUno, autoDos, motoDos];
let preciosOrdenados= [];

vehiculos.forEach((x)=> x.print());

class Vehiculo {
    constructor(vehiculos){
        this.vehiculos = vehiculos;
    }
    // Vehículo más caro: 
    masCaro() {
        preciosOrdenados= this.vehiculos.sort( (a, b)=> parseFloat(a.Precio.substring(1)) - parseFloat(b.Precio.substring(1)));
        console.log('============================');
        console.log(`Vehiculo más caro:  ${preciosOrdenados[preciosOrdenados.length-1].Marca} ${preciosOrdenados[preciosOrdenados.length-1].Modelo}`);
    }
    // Vehículo más barato: 
    masBarato() {
        console.log(`Vehiculo más barato:  ${preciosOrdenados[0].Marca} ${preciosOrdenados[0].Modelo}`);
    }
    // Vehículo que contiene en el modelo la letra ‘Y’: 
    contieneY() {
        let contieneY= this.vehiculos.filter((x)=> x.Modelo.includes('Y'));
        console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${contieneY[0].Marca} ${contieneY[0].Modelo} ${contieneY[0].Precio} `);

    }
    //Vehículos ordenados por precio de mayor a menor: 
    ordenar() {
        console.log('============================');
        console.log('Vehículos ordenados por precio de mayor a menor: ')
        preciosOrdenados.reverse().forEach((x) => {
            console.log(`${x.Marca} ${x.Modelo}`);
        });
    }
}

let vehiculo= new Vehiculo(vehiculos);
vehiculo.masCaro();
vehiculo.masBarato();
vehiculo.contieneY();
vehiculo.ordenar();
