var counter = 0


class vampire {
    constructor(name, origin, portraitUrl, x, y) {
        this.id = counter++
        this.name = name
        this.origin = origin
        this.portraitUrl = portraitUrl
        this.x = x
        this.y = y
    }

    sayGoodBye() {
        console.log("Good Bye");
    }

    moveXRandomly() {
        this.x = (Math.round(Math.random() * 1000))
    }

    moveYRandomly() {
        this.y = (Math.round(Math.random() * 500))
    }
}
const vampires = []
let vampire1 = new vampire("Alucard", "Hellsing Series", "https://displate.com/displates/2017-12-05/ec77e1a93d57293dbe0faf06164bd54a_513121fc27eed7329a2e027c48eeb98d.jpg?v=3&w=280&h=392", 200, 200)
let vampire2 = new vampire("Regis", "The Witcher Series", "https://pm1.narvii.com/6414/c040943d9e9849017cc1dacb4a109deb3a54f2ae_hq.jpg", 100, 100)
vampires.push(vampire1, vampire2)
console.log(vampires)



var container = document.getElementById("appender")
function draw() {

    for (let index = 0; index < vampires.length; index++) {
        const img = document.createElement("img");
        img.src = vampires[index].portraitUrl
        img.style.position = "relative"
        img.height = 200;
        img.width = 200;
        img.style.left = vampires[index].x + 'px'
        img.style.top = vampires[index].y + 'px'
        container.append(img)
    }


    createBtn()
}



draw(vampires)


// moveMyCards()
function createBtn() {

    const btn = document.createElement("button");
    btn.innerText = "asdasdaskd"
    btn.style.position = "relative"

    btn.onclick = function () { moveMyCards() }
    container.append(btn)
}

function moveMyCards() {
    let container = document.getElementById("appender")
    container.innerHTML = ""
    for (let index = 0; index < vampires.length; index++) {
        vampires[index].moveXRandomly()
        vampires[index].moveYRandomly()
    }


    draw(vampires)
}



//  const vampires = []
// vampires.push(vampire1,vampire2)
