let total = 0;

function clickHandler(target) {
    const itemName = target.parentNode.parentNode.childNodes[1].innerText;
    const ul = document.getElementById('list');
    const li = document.createElement('li');
    const price = target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
    li.innerText = itemName + ": $" +price;
    ul.appendChild(li);
    total += parseInt(price);
    document.getElementById("total").innerText = total;
    document.getElementById("grand-total").innerText = total;
}

