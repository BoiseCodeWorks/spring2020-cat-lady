let cat = {
  name: "Mr Snibbly",
  petCount: 0,
  moods: [
    {
      status: "Happy",
      img: "https://images2.minutemediacdn.com/image/upload/c_crop,h_1414,w_2101,x_10,y_0/v1554921998/shape/mentalfloss/549585-istock-909106260.jpg?itok=NB9DbGG9"
    },
    {
      status: "Irritated",
      img: "https://media.istockphoto.com/photos/portrait-of-british-short-hair-blue-cat-with-yellow-eyes-picture-id866080898?k=6&m=866080898&s=612x612&w=0&h=WowvebXRpSx52wzJCDs_DD0FrOUCJE5c90nNJ329uIs="
    },
    {
      status: "Bitey",
      img: "https://us.123rf.com/450wm/baggira/baggira1703/baggira170300027/75539553-a-ferocious-evil-cat-on-the-windowsill-on-the-street-angry-mistrustful-cussing-cat-the-cat-looks-mal.jpg?ver=6"
    },
    {
      status: "Blood Thirsty",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg8rVyvIUPa2qZ1I-DaipSIjtjQaGuA3kTAmrsK7fLk85qn4qS"
    }
  ]
}

let catStatusElem = document.getElementById("cat-status")
let catImageElem = document.getElementById("cat-image")



// NOTE when we invoke this function, we expect the petCount of the cat to go up by one
function petCat() {
  cat.petCount++
  if (cat.petCount > 8) {
    console.log("Cat looks mad")
  }
  console.log(cat.petCount)
  drawCat()
}



function giveCatnip() {
  console.log("Gave the cat catnip, it likes it!")
  cat.petCount -= 3
  if (cat.petCount < 0) {
    cat.petCount = 0
  }
  drawCat()
}


function drawCat() {
  document.body.style.backgroundColor = "orange"
  document.getElementById("cat-name").textContent = cat.name;
  document.querySelector("#cat-pet-count").textContent = cat.petCount.toString();
  drawStatus()
}

function drawStatus() {
  let moodIndex = 0
  if (cat.petCount > 8) {
    moodIndex++
  }
  if (cat.petCount > 15) {
    moodIndex++
  }
  if (cat.petCount > 20) {
    moodIndex++
  }

  let mood = cat.moods[moodIndex]


  //NOTE this could be replaced with drawCatMood as well.
  catStatusElem.textContent = mood.status
  catImageElem.src = mood.img
}

// NOTE this is responsible for feeding the cat and changing its mood after the food digests
function feedCat() {
  setTimeout(randomizeCatMood, 3 * 1000)
}


function catStart() {
  setInterval(randomizeCatMood, 2000)
}


function randomizeCatMood() {
  let moodIndex = Math.floor(Math.random() * cat.moods.length)
  let mood = cat.moods[moodIndex]

  //NOTE drawCatMood is expecting a mood to be passed in.
  drawCatMood(mood)

}

function drawCatMood(mood) {
  catStatusElem.textContent = mood.status
  catImageElem.src = mood.img
}

drawCat()

//NOTE this will randomize every 2 seconds indefinitely
catStart()

// NOTE this would randomize one single time only on page load
// randomizeCatMood()

// console.log(document.getElementById("cat-pet-count").textContent)

