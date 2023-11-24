const item = document.getElementById ("item")
const input = document.getElementById ("precio");
const descuento = document.getElementById ("descuento")
const input2 = document.getElementById ("impuesto");
const cantidad = document.getElementById ("cantidad");
const btntotal = document.getElementById("btntotal");

//Datos extra

const cliente = document.getElementById("cliente");

const creacion = document.getElementById("creacion");
const plazoPago = document.getElementById("plazoPago");
const identificacion = document.getElementById("identificacion");
const medioPago = document.getElementById("medioPago");
const Vencimiento = document.getElementById("Vencimiento");


cliente.addEventListener("input", ()=> {
    const clientevalue = cliente.value;
    const divcliente = document.getElementById("clientediv");
    clientediv.textContent = clientevalue;
})

creacion.addEventListener("input", ()=> {
    const creacionvalue = creacion.value;
    const divcrea = document.getElementById("creaciondiv");
    divcrea.textContent = creacionvalue;
})
plazoPago.addEventListener("input", ()=> {
    const plazoPagovalue = plazoPago.value;
    const plazodiv = document.getElementById("plazodiv");
    plazodiv.textContent = plazoPagovalue;
})
identificacion.addEventListener("input", ()=> {
    const identificacionvalue = identificacion.value;
    const identdiv = document.getElementById("identdiv");
    identdiv.textContent = identificacionvalue;
})
medioPago.addEventListener("input", ()=> {
    const medioPagovalue = medioPago.value;
    const mediodiv = document.getElementById("mediodiv");
    mediodiv.textContent = medioPagovalue;
})
Vencimiento.addEventListener("input", ()=> {
    const Vencimientovalue = Vencimiento.value;
    const plazodiv = document.getElementById("vencediv");
    vencediv.textContent = Vencimientovalue;
})
 
input.addEventListener("input", ()=> {
    const inputvalue = input.value;
    const divprecio = document.getElementById("divprecio");
    divprecio.textContent = inputvalue;
})
descuento.addEventListener ("input", ()=>{
    const descuentovalue = descuento.value;
    const divdescuento = document.getElementById ("divdescuento");
    divdescuento.textContent = descuentovalue;
})
input2.addEventListener ("input", ()=>{
    const input2value = input2.value;
    const div2precio = document.getElementById ("div2precio");
    div2precio.textContent = input2value;
})

cantidad.addEventListener ("input", ()=>{
    const cantidadvalue = cantidad.value;
    const divcantidad = document.getElementById ("divcantidad");
    divcantidad.textContent = cantidadvalue;
})
item.addEventListener ("input", ()=>{
    const itemvalue = item.value;
    const divcantidad = document.getElementById ("divitem");
    divitem.textContent = itemvalue;
})


btntotal.addEventListener("click", () =>{
    const sumatoria = document.getElementById("sumatoria")
    const precio = parseFloat(input.value) || 0;
    const impuesto = parseInt(input2.value) || 0;
    const cantidad22 = parseFloat(cantidad.value) || 0;
    const descuento33 = parseFloat(descuento.value) || 0;

    const subtotal = precio * cantidad22; 
    const total = subtotal-(subtotal*(impuesto/100))-(subtotal*(descuento33/100));
    sumatoria.innerText = total.toFixed (2);

})


