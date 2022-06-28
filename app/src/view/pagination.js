// TESTE
const list = [...document.querySelectorAll('.productslist')];
let count = 0;
const items_per_page = 3;
const pagination_numbers_container = document.querySelector('.pagination-numbers');

const paginate = (p) => {
  
  hideAll();
   
  if(p === 'next') count += items_per_page;
  else if(p === 'previous') count -= items_per_page;
  else count = p;
 
  if(count < 0 ) count = 0;
  else if(count >= (list.length - items_per_page)) count = (list.length - items_per_page) + ((list.length+1) % items_per_page);
  
  for(let i = count; i < (count+items_per_page); i++) {
    if(list[i]) list[i].style.display = 'block';
  }
  
}


const paginateNumberClickHandler = (evt) => {
	const page = parseInt(evt.currentTarget.getAttribute('data-page'));
  paginate(page * items_per_page)
}

const createPaginationNumbers = () => {
  
  const total_pages_rest = list.length % items_per_page;
  const total_pages = (list.length / items_per_page);
  const pagination_numbers = [];
  pagination_numbers_container.innerHTML = '';
  for(let i = 0; i < total_pages; i++) {
    pagination_numbers_container.innerHTML += `<button data-page="${i}" class="pag">${i+1}</button>`;
  }
    
  [...document.querySelectorAll('.pag')].forEach( (p) => p.addEventListener('click', paginateNumberClickHandler ));
}

const hideAll = () => list.forEach( (l) => l.style.display = 'none');

const next = document.querySelector('.next');
const previous = document.querySelector('.previous');
next.addEventListener('click', (e) => paginate("next"));
previous.addEventListener('click', (e) => paginate("previous"));


paginate(0);
createPaginationNumbers();  