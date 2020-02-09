var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc'); // this is the location of the "Calculate prices" button

// let priceProduct = document.querySelector("#cart > tbody > tr > td.pu > span");
// let quantity = document.querySelector("#cart > tbody > tr > td.qty > label > input[type=number]");
// let subTotal = document.querySelector("#cart > tbody > tr > td.subtot > span"); // the location of "sub total"

function updateSubtot(product) {
  // Iteration 1.1
  console.log(product)
  let priceProduct = product.querySelector(".pu span").innerText;
  let quantity = product.querySelector(".qty input").value;
  console.log("price: " + priceProduct)
  console.log("quantity: " + quantity )
  let sub = priceProduct * quantity;
  console.log("sub: " + sub)
  // subTotal.textContent = Number(priceProduct.textContent) * Number(quantity.value)

  return sub;

}

function calcAll() {
  // Iteration 1.2
  // let product = document.querySelector("#cart > tbody > tr");
  // let sub = document.querySelector("#cart > tbody > tr > td.subtot > span"); 
  // let justText = document.querySelector("#cart > tbody > tr > td.subtot > span").innerHTML
  // console.log(typeof sub, typeof justText)
  // sub.innerText = updateSubtot(product);
  const allProducts = document.querySelectorAll('tr.product');
  let totalPrice = 0;
  allProducts.forEach(row => {
    let price = row.children[1].children[0].innerText;
    let qty = row.querySelector('.qty input').value;
    let total = price*qty;
    // totalPrice += total;
    row.querySelector('.subtot span').innerText = total;
  })
  document.querySelectorAll('.subtot span').forEach(subtot => {
    totalPrice += Number(subtot.innerText);
  });

 // let totalPrice = [...document.querySelectorAll('.subtot span')].reduce((acc, val) => acc+Number(val.innerText), 0);

  document.querySelector("body > h2 > span").innerText = totalPrice;

}
$calc.onclick = calcAll;

/**
 * Steps for iteration 4
 * 1. make a collection of all delete buttons
 * 2. loop through collection and add an onclick event that will call a function removeProduct() 
 *    (or whatever you want to name the fucntion) that will remove the whole row (i.e. the product)
 * 3. Create the function to remove the row (i.e. the product) where delect was clicked 
 */

/**
 * Resources
 * onclick - https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick
 * getElementsByClassName() - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName 
 * Intro to events - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events 
 * Event - https://developer.mozilla.org/en-US/docs/Web/API/Event 
 * Event.currentTarget - https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
 * Node.parentElement - https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement 
 * Comparison of Event Targets - https://developer.mozilla.org/en-US/docs/Web/API/Event/Comparison_of_Event_Targets  
 * ChildNode.remove() - https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/remove 
 */

// HTML collection you can only loop using a regualr for loop
// NodeList (you can create a node list using querySelectorAll) you can use array methods such as forEach
// NodeListhttps://developer.mozilla.org/en-US/docs/Web/API/NodeList


function addDeleteListener(){
  let deleteBtnCollection = document.getElementsByClassName('btn btn-delete');    // Step 1: make a collection of all delete buttons
  for(let i = 0; i < deleteBtnCollection.length;i++){    // Step 2: loop through collection to add onclick event that will remove the product
    deleteBtnCollection[i].onclick = removeProduct; 
  }
}

addDeleteListener()

function removeProduct(event) { // Step 3: create the function to remove the row (i.e. the product) where delect was clicked
  console.log("what", typeof event.currentTarget)
  console.log("What does event look like: ", event);
  console.log("What is the current target: ", event.currentTarget);
  console.log("What is the parent element of the current target: ", event.currentTarget.parentElement);
  console.log("What is the parent of the parent of the current target: ", event.currentTarget.parentElement.parentElement);
  event.currentTarget.parentElement.parentElement.remove(); 
 } 

 
 let createBtn = document.querySelector("#create")
 
 createBtn.onclick = createRow
 
 function createRow(){
   let productName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]").value 
   let price = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value
   let rowHTML = `<tr class="product">
   <td class="name">
     <span>${productName}</span>
   </td>
   <td class="pu">$<span>${price}</span></td>
   <td class="qty">
     <label>
       <input type="number" value="0" min="0" />
     </label>
   </td>
   <td class="subtot">$<span>0</span></td>
   <td class="rm">
     <button class="btn btn-delete">Delete</button>
   </td>
   </tr>`

   
   document.querySelector("#cart > tbody").innerHTML += rowHTML

  addDeleteListener()

 }