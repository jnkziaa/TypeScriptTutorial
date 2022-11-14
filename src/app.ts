//const anchor = document.querySelector('a')!;

//console.log(anchor.href);
import  { Invoice } from "./classes/Invoice.js"

const invOne = new Invoice("Luffy", "Fixing Merry", 150000);
const invTwo = new Invoice("Zoro", "Buying sword", 100000);

let invoices : Invoice[] = []
invoices.push(invOne);
invoices.push(invTwo);

console.log(invOne, invTwo);
console.log(invoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
//console.log(form.children);

const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e : Event) =>{
    e.preventDefault();

    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.value
    )
})