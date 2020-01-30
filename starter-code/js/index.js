var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');
function updateSubtot($product) {
  // Iteration 1.1
  let priceProduct = document.querySelector("#cart > tbody > tr > td.pu > span").innerHTML;
  let quantity = document.querySelector("#cart > tbody > tr > td.qty > label > input[type=number]").value;
  let sub = Number(priceProduct * quantity);
  return sub;
}
function calcAll() {
  // Iteration 1.2
  let product = document.querySelector("#cart > tbody > tr");
  //all product
  // ?
  let sub1 = document.querySelector("#cart > tbody > tr > td.subtot > span");
  //updeting innerText to let Sub value
  sub1.innerText = updateSubtot(product);
  // Iteration 2 // Add another product/ inside calcAll, modify when Calculate prices
  //<tr class="product"> for ALL! rows of products)
  let allProduct = document.querySelectorAll('tr.product');
  allProduct.forEach(row => {
  //each chid in a row (Product name [0]/ Price unit[1] / Quantity[2] / Sub-total[3] /  Action[4])
  let price = row.children[1].children[0].innerText;
  //  Quantity .value(because it has input)
  let qty = row.querySelector('.qty input').value;
  //.subtot = .innerText because it's text inside of the table
  row.querySelector('.subtot span').innerText = price*qty;
  });// assining innerText to price*qty (new)
 // Iteration 3 Calculate Total price of all 
 //1.sum each product's subtotal to compute the total
 //2.update the HTML with that total value.
 let reducer = (acc,val) => acc + Number(val.innerText)//span = val
 let totalPrice = Array.from(document.querySelectorAll('.subtot span')).reduce(reducer, 0);// need 0 because reduce needs a value
 
 document.querySelector('body > h2 > span').innerText = totalPrice
}
$calc.onclick = calcAll;
//Iteration 3
//Associate the "Delete" buttons to click events 
//For each button, assign a click event/select the wrapper tr /- select the tbody parent/removeChild
//1. Select all the "Delete" buttons
let deleteColection =  document.querySelectorAll('.btn-delete');
for(i =0; i < deleteColection.length; i++){// loop buttons
  deleteColection[i].onclick = function(e){ // reaction on click
   this.parentElement.parentElement.remove()//remove parent element
   console.log(e,this)
  }
}
//Iteration 4
/*
You should be able to calculate the product's total price.
That product's price should be included in the total price of the entire Shopping Cart.
You should be able to delete the product.
*/
/*
let productName = document.querySelector("#cart > tfoot > tr > td:nth-child(1) > input[type=text]")
let price = document.querySelector("#cart > tfoot > tr > td:nth-child(2) > input[type=number]").value;
let creatBtn = document.querySelector('#create')
creatBtn.onclick = createRow;
function createRow () {
  let rowHTML  = <tr class="product">
  <td class="name">
    <span>IronBubble-head</span>
  </td>
  <td class="pu">$<span>25.00</span></td>
  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>
  <td class="subtot">$<span>0</span></td>
  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>
</tr>
// add html to document
}
*/