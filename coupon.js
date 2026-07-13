```javascript
// js/coupon.js

const coupons = {

WELCOME50:{
discount:50,
type:"flat"
},

AUTO20:{
discount:20,
type:"percent"
},

BIKE10:{
discount:10,
type:"percent"
}

};

window.applyCoupon=function(){

const code=document.getElementById("coupon").value.toUpperCase();

let fare=parseFloat(document.getElementById("fare").innerHTML);

if(!coupons[code]){

alert("Invalid Coupon");

return;

}

let discount=0;

if(coupons[code].type==="flat"){

discount=coupons[code].discount;

}else{

discount=(fare*coupons[code].discount)/100;

}

let finalFare=fare-discount;

if(finalFare<0){

finalFare=0;

}

document.getElementById("discount").innerHTML=discount.toFixed(0);

document.getElementById("finalFare").innerHTML=finalFare.toFixed(0);

alert("Coupon Applied");

}
```
