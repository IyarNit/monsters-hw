// const { log } = console
// var counter = 0
// var clickImg

// class vampire {
//     constructor(name, origin, portraitUrl, x, y) {
//         this.id = counter++
//         this.name = name
//         this.origin = origin
//         this.portraitUrl = portraitUrl
//         this.x = x
//         this.y = y
//     }

//     sayGoodBye() {
//         console.log("Good Bye");
//     }

//     moveXRandomly() {
//         this.x = (Math.round(Math.random() * 1000))
//     }

//     moveYRandomly() {
//         this.y = (Math.round(Math.random() * 500))
//     }
// }
// const vampires = []
// let vampire1 = new vampire("Alucard", "Hellsing Series", "https://displate.com/displates/2017-12-05/ec77e1a93d57293dbe0faf06164bd54a_513121fc27eed7329a2e027c48eeb98d.jpg?v=3&w=280&h=392", 200, 200)
// let vampire2 = new vampire("Regis", "The Witcher Series", "https://pm1.narvii.com/6414/c040943d9e9849017cc1dacb4a109deb3a54f2ae_hq.jpg", 100, 100)
// vampires.push(vampire1, vampire2)
// console.log(vampires)



// var container = document.getElementById("appender")
// container.style.position = "relative"
// function draw() {

//     for (let index = 0; index < vampires.length; index++) {
//         const img = document.createElement("img");
//         img.src = vampires[index].portraitUrl
//         img.id = vampires[index].id
//         img.style.position = "relative"
//         img.height = 200;
//         img.width = 200;
//         img.onclick = function (e) {
//             clickImg = e.target.id
// log(e.target.id)
//         }
//         img.style.left = vampires[index].x + 'px'
//         img.style.top = vampires[index].y + 'px'
//         container.append(img)
//     }


//     createBtn("left", function () {
//         moveLeft(clickImg)
//     }, 40)
//     createBtn("right", function () {
//         moveRight(clickImg)
//     }, 70)
//     createBtn("top", function () {
//         moveTop(clickImg)
//     }, 100)
//     createBtn("bottom", function () {
//         moveBottom(clickImg)
//     }, 130)

// }

// function moveLeft(id) {
//     let img = document.getElementById(id)
//     img.style.left = parseInt(img.style.left) - 10 + "px"
// }

// function moveRight(id) {
//     let img = document.getElementById(id)
//     img.style.left = parseInt(img.style.left) + 10 + "px"
// }

// function moveTop(id) {
//     let img = document.getElementById(id)
//     img.style.top = parseInt(img.style.top) - 10 + "px"
// }

// function moveBottom(id) {
//     let img = document.getElementById(id)
//     img.style.top = parseInt(img.style.top) + 10 + "px"
// }

// draw(vampires)


// // moveMyCards()
// function createBtn(t, movefunction, y = 20) {

//     const btn = document.createElement("button");
//     btn.innerText = t
//     btn.style.position = "absolute"
//     btn.style.top = y + 'px'
//     btn.style.left = "20px"
//     btn.onclick = function () { movefunction() }
//     container.append(btn)
// }

// function moveMyCards() {
//     let container = document.getElementById("appender")
//     container.innerHTML = ""
//     for (let index = 0; index < vampires.length; index++) {
//         vampires[index].moveXRandomly()
//         vampires[index].moveYRandomly()
//     }


//     draw(vampires)
// }


var c = 0
const userName = { id: "id" + c++, un: username, clan: clanName }