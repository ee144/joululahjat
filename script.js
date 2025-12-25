
let giftsFound = 0;

const passwordInput = document.getElementById('password');
const checkButton = document.getElementById('checkButton');

const passwords = [
    "Cheese-kalikka",
    "144",
    "Music😎",
    "0"+(11%7).toString()+(12%7).toString()+(11%9).toString()+(12%9).toString()+(13%9).toString()+(12%11).toString()+(17%11).toString()+(20%13).toString()+(20%13).toString(),
    "Tamppalainen",
    "Not gonna let you lose that Booty!!!",
]

const hints = [
    "2. vihje: Kurkkaa sängyn alle",
    "3. vihje: Perhaps vaatekaapissasi?",
    "4. vihje: Nyt närhen silmällä, olisikohan keittiön kaapeissa?",
    "5. vihje: Kenties käytävän kaapeissa?",
    "6. vihje: Kukkataulun paikkeilla",
    "7. vihje: Nyt viimeistäänkin tarkkana kuin porkkana!!! Tämä kirjekuori löytyy rojulaatikoista",
]

checkButton.addEventListener('click', () => {
    const cleanPassword = passwordInput.value.trim();
    passwordInput.value = "";

    console.log("password: " + cleanPassword);

    if (cleanPassword === passwords[giftsFound]) {
        document.getElementById('hint'+(giftsFound+2).toString()).textContent = hints[giftsFound];
        giftsFound++;
    }



});
