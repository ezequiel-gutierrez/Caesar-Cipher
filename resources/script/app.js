const encryptRadio =  document.getElementById("encrypt-radio");
const decipherRadio = document.getElementById("decipher-radio");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
    if (encryptRadio.checked) {
        console.log(`You selected ${encryptRadio.value}`)
    } else if (decipherRadio.checked) {
        console.log(`You selected ${decipherRadio.value}`)
    } else {
        console.log("You must select an option");
    }
})
