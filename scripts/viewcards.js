let cards = JSON.parse(localStorage.getItem('cards'));
let template = document.querySelector('#card-template');
let cardList = document.querySelector('#card-list');

for( let i = 0 ; i < cards.length; i++) {
    let card = cards[i];

    let cardView = template.content.cloneNode(true);
    
    let titleText = cardView.querySelector('.title-text');
    titleText.textContent = card.title;
    let subtitleText = cardView.querySelector('.subtitle-text');
    subtitleText.textContent = card.subtitle;
    let recipient = cardView.querySelector('.to-text');
    recipient.textContent = card.to;
    let sender = cardView.querySelector('.from-text');
    sender.textContent = card.from;
    let messageText = cardView.querySelector('.message-text');
    messageText.textContent = card.message;
    
    let deleteBtn = cardView.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', function() {
        cards.splice(i,1);
        localStorage.setItem('cards', JSON.stringify(cards));
        location.reload();
    } );

    cardList.appendChild(cardView);
}