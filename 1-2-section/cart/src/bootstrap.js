import faker from 'faker';

const cartDiv = `<div>You have ${faker.random.number()} items in your cart</div>`;

document.getElementById('cart-root').innerHTML = cartDiv;