const items = document.querySelectorAll('.item');


console.log(items[4].className.search('item-large'));

function bgRandomColor(grp) {
    grp.forEach((item, i) => {
        if (item.className.search('item-large') == -1) {
            item.style.setProperty('background-color', "#" + ((1 << 24) * Math.random() | 0).toString(16));
            item.innerText = `test ${i}`;
        }
    });
}


bgRandomColor(items);

// items.forEach((item, i) => {
//     if (item.className.search('item-large') == -1) {
//         item.style.setProperty('background-color', "#" + ((1 << 24) * Math.random() | 0).toString(16));
//         item.innerText = `test ${i}`;
//     }
// });

// const interval = setInterval(function() {
    
    
//     })}, 1000);

// clearInterval(interval);