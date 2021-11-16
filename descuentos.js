const coupons = [
    "promo_navidad",
    "promo_cumpleaños",
    "promo_dia_niño",
];

function calcularPrecioFinal(precio,descuento) {
    const porcentajePrecioConDescuento = (100 - descuento)/100;
    const precioConDescuento = precio * porcentajePrecioConDescuento;
    return precioConDescuento;
    
}

function onClickCalcularPrecioFinal(){
    const priceProduct = document.getElementById("priceProduct");
    const priceValue = priceProduct.value;
    
    const discount = document.getElementById("discountCoupons");
    const couponValue = discount.value;
    
    let descuento;
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
     } else if (couponValue === "JuanDC_es_Batman") {
        descuento = 15;
     } else if (couponValue === "pero_no_le_digas_a_nadie") {
        descuento = 30;
     } else if (couponValue === "es_un_secreto") {
        descuento = 25;
     }

    const precioConDescuento = calcularPrecioFinal(priceValue,descuento);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio del producto es: $" + precioConDescuento;
    console.log(precioConDescuento);
}
