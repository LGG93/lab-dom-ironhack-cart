// ITERATION 1
function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  //alert('Calculate Prices clicked!');
  // Get price and quantity
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  // Subtotal
  let subtotalCalculate = price * quantity;
  // Assing value to subtotal
  product.querySelector('.subtotal span').innerText = subtotalCalculate;

  return subtotalCalculate;
}

function calculateAll() {
  //const singleProduct = document.querySelector('.product');
  //const subtotalCalculate = updateSubtotal(singleProduct);
  // Subtotal
  const multiProducts = document.querySelectorAll('.product');
  const totalProducts = [];
  multiProducts.forEach(singleProduct => {
    totalProducts.push(updateSubtotal(singleProduct));
  });

  // Total
  const initialValue = 0;
  const total = totalProducts.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );

  document.querySelector('#total-value span').innerText = total;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  let product = target.closest('.product');
  product.remove();
  calculateAll();
}

// ITERATION 5
function createProduct() {
  const nameProduct = document.querySelector('.create-product input[type="text"]').value;
  const priceproduct = document.querySelector('.create-product input[type="number"]').value;

  if(nameProduct != "" && priceproduct != 0){
    createNewProductHTML(nameProduct, priceproduct);
    document.querySelector('.create-product input[type="text"]').value = "";
    document.querySelector('.create-product input[type="number"]').value = 0;
  }else {
    alert('It is neccessary to fill all the fields');
  }
}

// Create new HTML Product
function createNewProductHTML(nameProduct, priceproduct){
  const node = document.createElement("tr");
  node.setAttribute("class", "product");
  const tbodyElement = document.querySelector('tbody');
  const tr = tbodyElement.appendChild(node);
  tr.innerHTML = '<td class="name">'+nameProduct+'<span></span></td><td class="price">$<span>'+priceproduct+'</span></td><td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity"></td><td class="subtotal">$<span>0</span></td><td class="action"><button class="btn btn-remove">Remove</button></td>';
  var singleBtn = tr.querySelector('.btn-remove');
  singleBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  // BTN Calculate
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  // BTN Remove
  const removeBtns = document.querySelectorAll('.btn-remove');
  removeBtns.forEach(singleBtn => {
    singleBtn.addEventListener('click', removeProduct);
  });
  // BTN Create
  const createBtn = document.getElementById('create');
  createBtn.addEventListener('click', createProduct);
});
