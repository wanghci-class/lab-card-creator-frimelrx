document.getElementById('preview').addEventListener('click', preview);
document.getElementById('submit').addEventListener('click', save);
let recipient = document.getElementById('to');
let sender = document.getElementById('from');
let title = document.getElementById('title');
let subtitle = document.getElementById('subtitle');
let message = document.getElementById('message');

function preview() {
    document.querySelector('.to-text').innerHTML = recipient.value;
    document.querySelector('.from-text').innerHTML = sender.value;
    document.querySelector('.title-text').innerHTML = title.value;
    document.querySelector('.subtitle-text').innerHTML = subtitle.value;
    document.querySelector('.message-text').innerHTML = message.value;
}

function save() {
    let card = { to: recipient.value, from: sender.value, title: title.value, subtitle: subtitle.value, message: message.value };
    let cards = localStorage.getItem('cards');
    if (cards == null) {
        cards = [card];
    }
    else {
        cards = JSON.parse(cards);
        cards.push(card);
    }
    localStorage.setItem('cards', JSON.stringify(cards));
}