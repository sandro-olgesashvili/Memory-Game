const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
]


cardArray.sort( () => 0.5 - Math.random() )

const resultDisplay = document.getElementById('result')
const grid = document.getElementById('grid')
const btnEl = document.getElementById('btn')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []


function createBoard () {
    for(let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        
        card.setAttribute('src', 'images/blank.png')

        card.setAttribute('data-id', i)

        card.addEventListener('click', flipCard)

        grid.appendChild(card)

    }
}



function checkMatch() {
    const cards = document.querySelectorAll('img');

    // if(cardsChosenIds[0] == cardsChosenIds[1]) {
    //     cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
    //     cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
    //     alert('Try Again');
    // }


    if(cardsChosen[0] === cardsChosen[1]) {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png');
        cards[cardsChosenIds[0]].removeEventListener('click', flipCard);
        cards[cardsChosenIds[1]].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png');
        cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png');
        // alert('try again')
    }

    resultDisplay.textContent = cardsWon.length


    if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'

        btnEl.innerHTML = `<button> Restart </button>`
      }

    cardsChosen= [];
    cardsChosenIds = [];
}
 




function flipCard(e) {
    const cardId = (e.target.getAttribute('data-id'))
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    e.target.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout( checkMatch , 1000);
    }
}


createBoard();


