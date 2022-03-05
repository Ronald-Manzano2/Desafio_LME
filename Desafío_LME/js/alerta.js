function alertaJS(){
    var nombre = document.getElementById('name');
    var correo = document.getElementById('correo');
    var cantidad = document.getElementById('cant');
    let exp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let exp2 = /[A-Za-z]/;

    var precio = 1649;
    var iva = 0.13
    var subtotal = cantidad.value*precio;
    var totalIva = subtotal * iva;
    var total = totalIva + subtotal;

    if (nombre.value == "" || exp2.test(nombre.value) == false){
        swal.fire("Error","El nombre está vacío o no cumple con los requisitos","error");
        return false;
    }else{
        if(correo.value == "" || exp.test(correo.value)== false){
            swal.fire("Error","El correo está vacío o no cumple con los requisitos","error");
            return false;
        }else{
            if(cantidad.value == "" || cantidad.value < 1){
                swal.fire("Error","La cantidad es nula","error");
                return false;
            }else{
                swal.fire({
                    title: "Total a pagar", 
                    text: "cliente: "+nombre.value+"; correo electrónico: "+correo.value+"; cantidad a comprar: "+cantidad.value+"; subtotal: $"+subtotal+"; IVA: $"+totalIva+"; total: $"+total, 
                    icon:"success"
                });
                return false;
            }
        }
    }
}