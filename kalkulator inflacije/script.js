function inflationCalculator() {
    //let elementi
   let inflationRate = document.querySelector('#inflationRate');
   let money = document.querySelector('#money');
   let years = document.querySelector('#years');


    //pretvaranje stringa u float
    inflationRate = parseFloat (inflationRate.value);
    money = parseFloat (money.value);
    years = parseFloat (years.value);

     //formula za izracunavanje inflacije
     let vrednost = money + (money * (inflationRate / 100));


     //petlje (izracunavanje inflacije za ostale godine)
     for(let i = 1; i < years; i++ ) {
        vrednost += vrednost * (inflationRate / 100);
     }

     //podesavanje vrednosti tako da iza tacke ne bude vise od 2 znaka
     vrednost = vrednost.toFixed(2)

     //pravljenje novog elementa za poruku ispisanu ispod kalkulatora inflacije
     let new_element = document.createElement('div');
     new_element.className = 'new-value';
     new_element.innerText = `danasnjih   ${money} € vredi isto kao ${vrednost} € za  ${years} godina`; 


     document.querySelector('.container').appendChild(new_element);
     
}