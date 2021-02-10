function pogoda(temp, wilg, zach, wsch, wiatr, kierWiatr) {
  tempe.innerText = temp;
  wil.innerText = wilg;
  zacho.innerText = zach;
  wscho.innerText = wsch;
  wiadr.innerText = wiatr;
  kieruneg.innerText = kierWiatr;
}
pogoda(12, 0.7, "22:20", "12:20", "12 km/h", "Północny");
let promise = fetch("javascript/weather.json");
promise
  .then(function (response) {
    console.log(response);
 
    return response.json();
  })
  .then(function (jsun) {
    pogoda(
      jsun.temperatura,
      jsun.wilgotnosc,
      jsun.zachod,
      jsun.wchod,
      jsun.wiatr,
      jsun.kierunekwiatru
    );
  });
