let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "submit-btn",
    disabled: false
}

interface elementI {
    tagName: string,
    textContent: string,
    id: string,
    disabled: boolean
};

let button = element as elementI

console.log("Tag:", button.tagName);
console.log("Text:", button.textContent);
console.log("ID:", button.id);
console.log("Disabled:", button.disabled);

//Practice
let element1: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "Submit-btn",
    disabled: false
}

interface elementInt {
    tagName: string,
    textContent: string,
    id: string,
    disabled: boolean
}

let button1 = element1 as elementInt;

console.log("TAG: ", button1.tagName);
console.log("TEXT: ", button1.textContent);
console.log("ID: ", button1.id);
console.log("Disbled?: ", button1.disabled);
