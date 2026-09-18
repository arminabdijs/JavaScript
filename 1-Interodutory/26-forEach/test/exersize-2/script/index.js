let citiesToTravel = {
  Tehran: [
    " Nasirshahr ",
    " Andisheh ",
    " Shamshak ",
    " Pakdasht ",
    " Baghershahr ",
  ],
  Kermanshah: [
    " Javanrud ",
    " Ravansar ",
    " Paveh ",
    " Kangavar ",
    " Sarpel Zehab ",
  ],
  Kardastan: [
    " Kamyaran ",
    " Kani Sur ",
    " Kani Dinar ",
    " Saqez ",
    " Dehglan ",
  ],
};

let enterProvince = prompt("Enter your desired province : ", "Kermanshah");

let desiredProvince = citiesToTravel[enterProvince];

desiredProvince.forEach((Citie) => {
  console.log(Citie);
});