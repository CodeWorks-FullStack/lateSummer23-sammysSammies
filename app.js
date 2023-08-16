const sandwiches = [
    {
        name: 'caprese',
        price: 11,
        quantity: 0
    },
    {
        name: 'reuben',
        price: 10,
        quantity: 0
    },
    {
        name: 'notsponsored',
        price: 18,
        quantity: 0
    },
    {
        name: 'soup',
        price: 9,
        quantity: 0
    }
]

let cartElem = document.getElementById('cart')
let subTotalElem = document.getElementById('subtotal')
let totalElem = document.getElementById('total')

function buyCaprese() {
    // TODO find the sandwich I want to buy...find the caprese ✅
    // TODO increase how many sandwiches I have...increase the quantity ✅
    //  TODO add the sandwich to the cart ... update the DOM ✅

    // NOTE here's our story:
    // -----> look at ALL the sandwiches, and FIND the one sandwich => where it's name == 'caprese'
    let caprese = sandwiches.find(sandwich => sandwich.name == 'caprese')
    caprese.quantity++
    console.log('buying caprese', caprese)

    // draw to the DOM
    // cartElem.innerHTML = `   <div class="d-flex justify-content-between p-1 fs-3">
    //                     <span>${caprese.name} x${caprese.quantity}</span>
    //                     <span>$${caprese.price}</span>
    //                 </div>`
    drawCart()
}

function buyReuben() {
    // TODO look at all the sandwiches and find the reuben
    // TODO after finding the reuben, increase quantity
    // TODO add it to our cart...update the DOM

    let reuben = sandwiches.find(sandwich => sandwich.name == 'reuben')
    reuben.quantity++
    console.log('buying reuben', reuben)

    // cartElem.innerHTML = `   <div class="d-flex justify-content-between p-1 fs-3">
    //                     <span>${reuben.name} x${reuben.quantity}</span>
    //                     <span>$${reuben.price}</span>
    //                 </div>`
    drawCart()
}

function buySandwich(sandwichName) {
    // TODO look at all the sandwiches and find the sandwich we want to buy
    // TODO after finding the sando, increase quantity
    // TODO add it to our cart...update the DOM
    let foundSandwich = sandwiches.find(sandwich => sandwich.name == sandwichName)
    foundSandwich.quantity++
    console.log('buying sandwich', foundSandwich)
    drawCart()
}

function removeSandwich(sandwichName) {
    // TODO look at all the sandwiches and FIND the one we want to remove
    // TODO after finding, decrease quantity
    // TODO udpdate the DOM
    let foundSandwich = sandwiches.find(sandwich => sandwich.name == sandwichName)
    foundSandwich.quantity--
    console.log('removing', foundSandwich)
    drawCart()
}

function checkOut() {
    // TODO look at ALL the sandwiches
    // TODO set their quantity back to 0 
    // TODO update the DOM

    // NOTE window.confirm needs to be wrapped up in an if statement to catch the user's input
    if (window.confirm('Are you ready to check out?')) {
        //NOTE we can do this in one line of logic so I do not need the {}
        sandwiches.forEach(sandwich => sandwich.quantity = 0)
        console.log('checking out', sandwiches)
        drawCart()
    }

}



function drawCart() {
    // look at ALL the sandwiches
    // do I have one of these sandwiches....check if the quantity is greater than 0 
    // if I have one of the sandwiches....update the DOM

    //    NOTE anytime we have a 'placeholder' or 'total' that needs to be injected into from a for loop...we MUST declar and assign it outside of the loop
    let template = ''
    sandwiches.forEach(sandwich => {
        // NOTE in order to 'inject' javascript values in a string... we must use `` AND ${}
        if (sandwich.quantity > 0) {
            template += `   <div class="d-flex justify-content-between p-1 fs-3">
                <span>${sandwich.name} x ${sandwich.quantity}</span>
                    <span>$${sandwich.price}</span>
                    <button class="btn text-danger fs-2" title="Remove Item" onclick="removeSandwich('${sandwich.name}')"><i class="mdi mdi-delete"></i></button>
                </div>`
        }
        console.log(template)
    })
    // NOTE be mindful of order...make sure to console.log where things are happening w/in your loops/functions
    cartElem.innerHTML = template
    drawTotals()
}

function drawTotals() {
    // TODO look at ALL the sandwiches
    // TODO while looking at the sandos, check if they are in the cart.... is the quantity > 0
    // TODO if it is, how many do I have * how much do they cost....multiple quantity and price
    // TODO add the multiplied value to a total
    // TODO draw it to the DOM

    let subTotal = 0
    let total = 0
    sandwiches.forEach(sandwich => {
        if (sandwich.quantity > 0) {
            subTotal += sandwich.quantity * sandwich.price
        }
    })

    // @ts-ignore
    total = (subTotal * 1.06).toFixed(2)

    console.log(subTotal, 'subtotal')
    console.log(total, 'total')

    subTotalElem.innerText = subTotal.toString()
    totalElem.innerText = total.toString()
}

