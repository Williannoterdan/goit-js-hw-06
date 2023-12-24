class StringBuilder{
  #value;
  constructor(initialValue ){
    this.#value=Array.from(initialValue);
  }
  getValue()  {return this.#value.join('');}
  padEnd(str){this.#value.push(str);}
padStart(str){this.#value.unshift(str);}
padBoth(str){this.padStart(str);this.padEnd(str);}
}



const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="