/*


// Classes, constructor, method

class CreatePencil {
  constructor(name, company, price, color) {                // constructor
    this.name = name;
    this.company = company;
    this.price = price;
    this.color = color;
  }

  erase() {                                                       // Method
    document.body.querySelectorAll("h1").forEach((elem) => {
      if (elem.style.color === this.color) {
        elem.remove();
      }
    });
  }

  write(text) {                                                     // Method
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }
}

let p1 = new CreatePencil("nataraj", "nataraj", 10, "black");
let p2 = new CreatePencil("apsara", "apsara", 15, "blue");


*/