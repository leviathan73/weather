function pogoda(temp, wilg, zach, wsch, wiatr, kierWiatr,icons) {
  tempe.innerText = temp;
  wil.innerText = wilg;
  zacho.innerText = zach;
  wscho.innerText = wsch;
  wiadr.innerText = wiatr;
  kieruneg.innerText = kierWiatr;
  ikonga.innerHTML = icons;
}
function pobierzDane() {
let promise = fetch(`http://localhost:3000/weather?q=${loc.value}`);
promise
  .then(function (response) {
    console.log(response);
 
    return response.json();
  })
  .then(function (jsun) {
    pogoda(
      jsun.temperature,
      jsun.wilgotnosc,
      jsun.zachod,
      jsun.wschod,
      jsun.wiatr,
      jsun.kierunekwiatru
      jsun.ikony
    );
  });
	
}
