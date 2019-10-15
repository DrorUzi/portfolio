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
        createItem('First','img/portfolio/1-thumbnail.jpg','First One','this is a game','hfhfhfhfhhfhhfhfhfhffhhffhfhhfhffhhff','sep-2019','game','https://github.com/DrorUzi'),
        createItem('Second','img/portfolio/2-thumbnail.jpg','Second One','this is a game','aaaaaaaaaaaaaaaaaaaaaaa'), 
        createItem('Third','img/portfolio/3-thumbnail.jpg','Third One','this is a game','hfhfhfhfhhfhhfhfhfhffhhffhfhhfhffhhff'),
        createItem('First','img/portfolio/4-thumbnail.jpg','First One','this is a game','hfhfhfhfhhfhhfhfhfhffhhffhfhhfhffhhff'),
        createItem('First','img/portfolio/5-thumbnail.jpg','First One','this is a game','hfhfhfhfhhfhhfhfhfhffhhffhfhhfhffhhff'),
        createItem('First','img/portfolio/6-thumbnail.jpg','First One','this is a game','hfhfhfhfhhfhhfhfhfhffhhffhfhhfhffhhff'),
    ]
    gNextId = gItems[gItems.length - 1].id + 1;
}

function getItems(){
    return gItems;
}