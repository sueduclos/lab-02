// Working code with pair partner

// We want to DOM manipulate the <select> element in index.html to populate the "keywords" dynamically when clicking on it or on page load.//

//Then do something when clicking on the item "keyword" in the dropdown menu//

//Hide all images, and show "keyword" selected images//
Animal.createFilter = () => {
  let = filterKeywords = [];
  
  $('option').not(':first').remove();

  Animal.all.forEach(image => {
    if (!filterKeywords.includes(image.keyword);
  });

  filterKeywords.sort();

  filterKeywords.forEach(keyword => {
    let optionTag = `<option value="${keyword}">${keyword}</option>`;
    $('select').append(optionTag);
});
};

Animal.handleFilter = () => {
  $('select').on('change', function () {
    let $selected = $(this).val();
    if ($selected !== 'default') {
      $('div').hide();

      Animal.all.forEach(image => {
        if ($selected === image.keyword) {
          $(`div[class="${$selected}"]`).addClass('filtered').fadeIn();
        }
      });

      $(`option[value=${$selected}]`).fadeIn();
    } else {
      $('div').removeClass('filtered').fadeIn();
      $(`option[value=${$selected}]`).fadeIn();
    }
  });
};


// $(() => Animal.readJson());
