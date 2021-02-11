function pogoda(temp, wilg, zach, wsch, wiatr, kierWiatr,icons) {
  tempe.innerText = temp;
  wil.innerText = wilg;
  zacho.innerText = zach;
  wscho.innerText = wsch;
  wiadr.innerText = wiatr;
  kieruneg.innerText = kierWiatr;
  ikonga.src = icons;
}
function pobierzDane2(event) {
	// console.log(event)
	if (event.key == "Enter") {
		pobierzDane();
	}
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
      jsun.kierunekwiatru,
      jsun.ikony
    );
  });
	
}
