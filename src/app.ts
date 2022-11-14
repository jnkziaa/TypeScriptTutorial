//const anchor = document.querySelector('a')!;

//console.log(anchor.href);
interface  isPerson{
    personName:string,
    age:number,
    speak(a:string) : void,
    spend(a:number) : number;
}

const me : isPerson = {
    personName: "john",
    age: 29,
    speak(a: string) {
        console.log(`${this.personName} said ${a}`);
    },
    spend(a: number): number {
        return a;
    }
};

me.speak("Hello");

console.log(me);

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