class Storage{
  #intems;
  constructor(intems) {
    this.#intems = intems;
  }
 getItems() {
    return this.#intems;
  }
  addItem(newItem){
    this.#intems.push(newItem);
  }
  removeItem(itemToRemove){
    this.#intems=this.#intems.filter(intem=>intem!==itemToRemove)
  }
  }




const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]