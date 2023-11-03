const currency = {
    "USD": 14000,
    "JPY": 131,
    "SGD": 11000,
    "MYR": 3500
};
console.log(currency);

// Menghitung priceInJPY ke priceInIDR
const priceInJPY = 5000;
const priceInIDR = priceInJPY * currency["JPY"];

// Menampilkan hasilnya
console.log("Harga dalam IDR:", priceInIDR);