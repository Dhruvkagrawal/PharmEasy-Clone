var imgarr = [
  [
    "https://cdn01.pharmeasy.in/dam/products_otc/I05006/dettol-instant-original-hand-sanitizer-bottle-of-50-ml-2-1610441085.jpg?dim=240x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/I05006/dettol-instant-original-hand-sanitizer-bottle-of-50-ml-6.1-1610441003.jpg?dim=240x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/I05006/dettol-instant-original-hand-sanitizer-bottle-of-50-ml-6.2-1610441256.jpg?dim=240x0&dpr=1.25&q=100",
  ],
  [
    "https://cdn01.pharmeasy.in/dam/products_otc/D70449/oxysat-finger-tip-pulse-oximeter-with-2-batteries-18-months-warranty-2-1608125076.jpg?dim=240x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/D70449/oxysat-finger-tip-pulse-oximeter-with-2-batteries-18-months-warranty-6.5-1608125076.jpg?dim=240x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/D70449/oxysat-finger-tip-pulse-oximeter-with-2-batteries-18-months-warranty-6.2-1608125081.jpg?dim=240x0&dpr=1.25&q=100",
  ],
  [
    "https://cdn01.pharmeasy.in/dam/products_otc/Y43761/accusure-fingertip-pulse-oximeter-yk011-2-1620656558.jpg?dim=240x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/Y43761/accusure-fingertip-pulse-oximeter-yk011-6.2-1620656587.jpg?dim=240x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/Y43761/accusure-fingertip-pulse-oximeter-yk011-6.3-1620656619.jpg?dim=240x0&dpr=1.25&q=100",
  ],
  [
    "https://cdn01.pharmeasy.in/dam/products_otc/J24391/horlicks-mothers-plus-vanilla-drink-refill-500-gm-1-1611742405.jpg?dim=240x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/J24391/horlicks-mothers-plus-vanilla-drink-refill-500-gm-2-1613627246.jpg?dim=100x0&dpr=1.25&q=100",
    "https://cdn01.pharmeasy.in/dam/products_otc/J24391/horlicks-mothers-plus-vanilla-drink-refill-500-gm-6.1-1613627188.jpg?dim=240x0&dpr=1.25&q=100",
  ],
];
var tagarr = [
  "Dettol",
  "Kapiva",
  "Apollo",
  "Paracetamol",
  "Pfizer",
  "Is this even a Medicine",
  "Bolghar",
  "Zandu Balm",
  "Zova",
  "Lizol Power",
  "Eno regular",
  "cotton Buds",
  "colgate",
  "Disprin",
  "Allout liquid",
  "Pudin Hara",
  "Nivea milk lotion",
  "Nivea bath liquid",
  "Dove hair care",
  "Himalya Body Powder",
  "D-protine vanilla",
  "Live easy oethocare",
  "Bandage +",
];
var comparr = [
  "This",
  "That",
  "Here",
  "There",
  "Balaji",
  "L$T",
  "Nestle",
  "H$M",
  "Aboot",
  "Himalya",
  "23Yards",
  "ACCARE",
  "CANDID",
  "FASH",
  "LUX",
  "OLAY",
];
console.log(
  imgarr[Math.floor(Math.random() * imgarr.length)],
  tagarr[Math.floor(Math.random() * tagarr.length)],
  Math.floor(Math.random() * 3000)
);
//main element in which to be ppulated
var cont = document.getElementById("jav");
//function to generate n number of products
function loop(f) {
  localStorage.removeItem("pharm");
  cont.innerHTML = "";
  for (var i = 1; i <= 35; i++) {
    f(i);
  }
}
loop(run);

//!!!!!!IMPORTANT!!!!!!!!
function run(x) {
  var box = document.createElement("div");
  box.setAttribute("class", "box");
  box.setAttribute("id", `boxid${x}`);
  let im = imgarr[Math.floor(Math.random() * imgarr.length)];
  var imag = im[0];
  var img3 = im[1];
  var img2 = im[2];
  var img1 = imag;
  var company = comparr[Math.floor(Math.random() * comparr.length)];
  var taga = tagarr[Math.floor(Math.random() * tagarr.length)];
  var pri = Math.floor(Math.random() * 3000);
  var off = Math.round(Math.random() * 0.3 * 100) / 100;
  var mrp = Math.floor(pri / (1 - off));
  var stock = Math.round(Math.random() * 100) / 100;
  var count = x;
  var qty = 1;
  box.innerHTML = `
    <img src="${imag}" class="boximg"/>
    <h3 id="tag${x}" class="boxtag">${taga}</h3>
    <h3 id="price${x}" class="boxprice">₹${pri} Only</h3>
    `;

  cont.append(box);

  let product = {
    taga,
    pri,
    imag,
    img1,
    img2,
    img3,
    company,
    off,
    mrp,
    stock,
    count,
    qty,
  };
  let arr = localStorage.getItem("pharm");

  if (arr == null) {
    arr = [];
  } else {
    arr = JSON.parse(localStorage.getItem("pharm"));
  }

  arr.push(product);
  localStorage.setItem("pharm", JSON.stringify(arr));

  box.onclick = function (product) {
    console.log(product);
    let arr = JSON.parse(localStorage.getItem("pharm"));

    let id = box.id.split("boxid")[1];
    for (var i = 0; i < arr.length; i++) {
      //console.log(arr[i]);
      if (arr[i].count == id) {
        console.log(arr[i]);
        localStorage.removeItem("showproduct");
        localStorage.setItem("showproduct", JSON.stringify(arr[i]));
        break;
      }
    }
    window.location.href = "add_cart.html";
  };
}

//console.log(document.getElementById("sort").value);

//function to generate and sort the products LOW TO HIGH
function lowa() {
  cont.innerHTML = "";
  var pro = [];
  for (var h = 0; h < 30; h++) {
    pro.push(Math.floor(Math.random() * 3000));
  }

  pro.sort(function (a, b) {
    return a - b;
  });
  for (var c = 0; c < pro.length; c++) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", `boxid${c}`);
    var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
    var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

    box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

    cont.append(box);
  }
}

//function to generate and sort the products HIGH TO LOW

function higha() {
  cont.innerHTML = "";
  var pro = [];
  for (var h = 0; h < 30; h++) {
    pro.push(Math.floor(Math.random() * 3000));
  }

  pro.sort(function (a, b) {
    return b - a;
  });
  for (var c = 0; c < pro.length; c++) {
    var box = document.createElement("div");
    box.setAttribute("class", "box");
    box.setAttribute("id", `boxid${c}`);
    var imag = imgarr[Math.floor(Math.random() * imgarr.length)];
    var taga = tagarr[Math.floor(Math.random() * tagarr.length)];

    box.innerHTML = `
      <img src="${imag}" class="boximg"/>
      <h3 id="tag${c}" class="boxtag">${taga}</h3>
      <h3 id="price${c}" class="boxprice">₹${pro[c]} Only</h3>
      `;

    cont.append(box);
  }
}
//document.getElementById("sort").addEventListener("change", lowa);

//function to get the value from selected option from SELECT LIST

var doc = document.getElementById("sort");
doc.addEventListener("click", mai);
var sortcnt = 0;
function mai() {
  var doc = document.getElementById("sort");
  sortcnt++;
  if (sortcnt % 2 == 0) {
    if (doc.value == "low") {
      //console.log("fuck yeah");
      lowa();
    }
    if (doc.value == "high") {
      //console.log("higher")
      higha();
    }
    if (doc.value == "popu") {
      loop(run);
    }
  }
}
