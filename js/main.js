var elForm = document.querySelector('.form');
var elFormInput = document.querySelector('.form-input');
var elSecondInput = document.querySelector('.second-input');
var elSiteNav = document.querySelector('.site-nav');

var elArray = [];

elForm.addEventListener('submit', function (evt) {
  evt.preventDefault(); 

  var elFormInputValue = elFormInput.value.trim();
  elFormInput.value = null;

  var elSecondInputValue = elSecondInput.value.trim();
  elSecondInput.value = null;

  elSiteNav.innerHTML = null;

  var array = {
    name: elFormInputValue,
    surname: elSecondInputValue
  };

  elArray.push(array);

  for(var itemArray of elArray){
    var siteItem = document.createElement('li');
    siteItem.setAttribute('class', 'site-nav__item');
    siteItem.textContent = itemArray.name + " ";

    var itemBold = document.createElement('bold');
    itemBold.setAttribute('class', 'item-bold');
    itemBold.textContent =  itemArray.surname;

    siteItem.appendChild(itemBold);
    elSiteNav.appendChild(siteItem);
  }
});