const div = document.createElement('div');

div.textContent = 'Test task for Upstaff';

div.style.backgroundColor = '#fff';
div.style.color = 'black';
div.style.padding = '18px';
div.style.borderRadius = '5px';
div.style.boxShadow = '1px 1px 5px 5px #f1f1f1';
div.style.justifyContent = 'center';
div.style.display = 'flex';
div.style.alignItems = 'center';

function insertDiv() {
  const products = document.querySelectorAll('.product-item');
  
  if (products.length >= 4) {
    const fourthProduct = products[3];
    fourthProduct.parentNode.insertBefore(div, fourthProduct.nextElementSibling);
  }
}

function updateDivWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1200) {
    div.style.width = '50%';
  } else if (screenWidth >= 768) {
    div.style.width = '66.66%';
  } else {
    div.style.width = '100%';
  }
}

insertDiv();
updateDivWidth();

window.addEventListener('resize', updateDivWidth);