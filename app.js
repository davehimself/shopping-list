(function ($) {

  // When the DOM is ready
  $(document).ready(function () {
    // Capture the form submit
    $('#js-shopping-list-form').on('submit', function (event) {
      console.log('add item');

      // Prevent the default action which would reload the page
      event.preventDefault();

      // Get the value of our new item
      var newItemValue = $('#shopping-list-entry').val();

      // Create the new item html
      var newItem = ''
        + '<li>'
        + '<span class="shopping-item">' + newItemValue + '</span>' // Be sure to add our newItemValue
        + '<div class="shopping-item-controls">'
        + '  <button class="shopping-item-toggle">'
        + '    <span class="button-label">check</span>'
        + '  </button>'
        + '  <button class="shopping-item-delete">'
        + '    <span class="button-label">delete</span>'
        + '  </button>'
        + '</div>'
        + '</li>';

      // Append the newly constructed item to the DOM
      $('.shopping-list').append(newItem);
    });

    // Handle click events to toggle the item
    $('.shopping-list').on('click', '.shopping-item-toggle', function (event) {
      console.log('check item');

      // Traverse up the DOM to the closest li element
      // Then, find the child element that contains the name of the item
      // Finally, add/remove the CSS class which strikesthrough the item name
      $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });

    // Handle click events to delete the item
    $('.shopping-list').on('click', '.shopping-item-delete', function (event) {
      console.log('delete item');

      // Traverse up the DOM to the closest li element
      // Then, remove it from the DOM
      $(this).closest('li').remove();
    });

  });

}(jQuery));
