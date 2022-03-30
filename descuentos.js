//const precioOriginal = 120;
//const descuento = 18;

const coupons = [
    "Tortas15",
    "Zapatos35",
    "Perros22"
];

function calcularPrecioConDescuento (precio,descuento) {

    const porcentajePrecioCondescuento = 100 - descuento;

    const precioConDescuento = (precio * porcentajePrecioCondescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount () {
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;
    const ResultP = document.getElementById("ResultP");

    const InputCoupon = document.getElementById("InputCoupon");
    const couponValue = InputCoupon.value;
    let descuento;

    switch (couponValue) {
        case coupons[0]:
            descuento = 15;
            break;
        case coupons[1]:
            descuento = 30;
            break;
        case coupons[2]:
            descuento = 25;
    
        default:
            descuento = 0;
            break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);

    ResultP.innerText = "El precio con descuento es: $ " + precioConDescuento;
    
}


/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioCondescuento,
    precioConDescuento
});
*/

