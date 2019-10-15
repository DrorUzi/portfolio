'use strict'

$(document).ready(function () {
  renderPortfolioItems();
  // renderModal();
})

function renderPortfolioItems() {
  var items = getItems();
  var currImg = 1
  var $elItemsContainer = $('.items-container')
  var strHTMLs = items.map(function (item) {
    return `<div class="col-md-4 col-sm-6 portfolio-item" onclick="renderModal(${item.id})"><a class="portfolio-link" data-toggle="modal" href="#portfolioModal">
   <div class="portfolio-hover">
     <div class="portfolio-hover-content">
       <i class="fa fa-plus fa-3x"></i>
     </div>
   </div>
   <img class="img-fluid" src=${item.imgUrl} alt="">
 </a>
 <div class="portfolio-caption">
   <h4>${item.name}</h4>
   <p class="text-muted">${item.subtitle}</p>
 </div></div>`
  })
  $elItemsContainer.html(strHTMLs.join(''));
}

function renderModal(id) {
  var items = getItems();
  var itemIdx = items.findIndex(function (item) {
    return item.id === id
  })
  var item = items[itemIdx]
  $('.item-name').text(item.name)
  $('.item-intro').text(item.intro)
  $('.item-img').attr('src',item.imgUrl)
  $('.item-desc').text(item.desc)
  $('.date').text(item.date)
  $('.category').text(item.category)
  $('.link').attr('href', item.link)
  
}

