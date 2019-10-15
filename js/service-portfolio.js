'use strict'

var gNextId = 101;
var gItems;

createItems()
console.log(gItems);


function createItem(name,imgUrl,subtitle,intro,desc,date,category,link){
    return {
        id: gNextId++,
        name,
        subtitle,
        imgUrl,
        intro,
        desc,
        date: 'Date: '+date,
        category:'Category: '+category,
        link: link
    }
}

function createItems(){
    gItems = [
        createItem('Gallery','img/portfolio/gallery-pixel-perfect.png','Pixel perfect','Pixel perfect by Dror Uzi','Pixel perfect design from a pdf','oct-2019','Design','https://droruzi.github.io/gallery-pixel-perfect/'),
        createItem('Minesweeper','img/portfolio/minesweeper.png','Board game','Minesweeper game by Dror Uzi','My minesweeper','sep-2019','Game','https://droruzi.github.io/minesweeper/.'),
        createItem('Book Shop','img/portfolio/book-shop.png','Landing page','Book shop by Dror Uzi','Welcome to my book shop','oct-2019','Design','https://droruzi.github.io/book-shop/.'),
        createItem('Pacman','img/portfolio/pacman.png','Board game','Pacman by Dror Uzi','My Pacman game','sep-2019','Game','https://droruzi.github.io/pacman/'), 
        createItem('In picture','img/portfolio/in-picture.png','Quiz game','In-picture game by Dror Uzi','What is in the picture?','sep-2019','Game','https://droruzi.github.io/in-picture/.'),
        createItem('Touch the num','img/portfolio/touch-the-num.png','Game','Touch the num by Dror Uzi','How fast can you touch the next number?','sep-2019','Game','https://droruzi.github.io/touch-nums/'),
    ]
    gNextId = gItems[gItems.length - 1].id + 1;
}

function getItems(){
    return gItems;
}