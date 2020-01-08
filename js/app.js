'use strict';

function Animal(animal) {
  this.title = animal.title;
  this.image_url = animal.image_url;
  this.description = animal.description;
  this.keyword = animal.keyword;
  this.horns = animal.horns;
}

Animal.allAnimals = [];

Animal.prototype.render = function() {
  $('main').append('<div class="clone"></div>');
  let animalClone = $('div[class="clone"]');

  let animalHtml = $('#photo-template').html();

  animalClone.html(animalHtml);

  animalClone.find('h2').text(this.title);
  animalClone.find('img').attr('src', this.image_url);
  animalClone.find('#description').text(this.description);
  animalClone.find('#keyword').text(this.keyword);
  animalClone.find('#horns').text(this.horns);
  animalClone.removeClass('clone');
  animalClone.attr('class', this.text);
};

Animal.readJson = () => {
  $.get('../data/page-1.json', 'json')
    .then(page1 => {
      page1.forEach(item => {
        Animal.allAnimals.push(new Animal(item));
      });
    })
    .then(Animal.loadAnimals);
};

Animal.loadAnimals = () => {
  Animal.allAnimals.forEach(animal => animal.render());
};

//We want to DOM manipulate the <select> element in index.html to populate the "keywords" dynamically when clicking on it or on page load.//

//Then do something when clicking on the item "keyword" in the dropdown menu//

//Hide all images, and show "keyword" selected images//

$(() => Animal.readJson());
