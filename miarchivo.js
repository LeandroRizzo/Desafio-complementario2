class Producto{
    constructor(tipo,marca,tamaño,precio){
        this.tipo = tipo,
        this.marca = marca,
        this.tamaño = tamaño,
        this.precio = precio
    }
}

const Producto1 = new Producto("Yerba mate", "Taraguí","1 kg", 500)
const Producto2 = new Producto("Azucar", "Ledezma","1 kg", 250)
const Producto3 = new Producto("Microondas", "Atma","5 lt", 1500)
const Producto4 = new Producto("Sabanas", "Ruby","Kingsize", 4000)

const Productos = []

Productos.push(Producto1)
Productos.push(Producto2)
Productos.push(Producto3)
Productos.push(Producto4)

let ProductosOrdenados = Productos.sort(function(a, b){
    if (a.tipo > b.tipo){
        return 1;
    }
    if (a.tipo < b.tipo){
        return -1;
    }
    return 0;
});

console.log(ProductosOrdenados);
