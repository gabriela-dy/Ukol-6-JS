/*Catering ukol 6
Mějme tři cateringové společnosti dodávající občerstvení na různé akce.
Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.
Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.
Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. 
Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. 
Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu
Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč*/


function CompanyJustFood (sumPeople) {
  let price = sumPeople * 150; 
  return `Catering od Just Food pro ${sumPeople} lidí bude za ${price} Kč`;
}

function CompanyYourMama (sumPeople) {
  let price = sumPeople * 300;
  return `Catering od Just Food pro ${sumPeople} lidí bude za ${price} Kč`;
}

function CompanyFlavourHaver (sumPeople) {
  let price = sumPeople * 550; 
  return `Catering od Just Food pro ${sumPeople} lidí bude za ${price} Kč`;
}

document.body.innerHTML += `<p>${CompanyJustFood(50)}</p>`  
document.body.innerHTML += `<p>${CompanyYourMama(100)}</p>`
document.body.innerHTML += `<p>${CompanyFlavourHaver(150)}</p>`

function createEvent (eventName, sumPeople, companyFunction) {
  let company = companyFunction(sumPeople);
  return `Událost ${eventName} s ${company}`;
}

document.body.innerHTML += (createEvent("Inaugurace prezidenta", 100, CompanyFlavourHaver));
