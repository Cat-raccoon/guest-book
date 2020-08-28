function delFunction() {

    var myObj = document.getElementsByClassName("comment")[0];
    myObj.remove();

}

var reviews = [
    {username:"Frodo Bagins", usermail:"shiir@gmail.com", date:"2019-5-13", reviewID:"111111", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Vladimir Putin", usermail:"russian-bear@gmail.com", date:"2020-3-10", reviewID:"111112", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Petro Poroshenko", usermail:"chocolate_king@gmail.com", date:"2020-3-11", reviewID:"111113", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Harry Potter", usermail:"qvidichmaster@gmail.com", date:"2020-5-5", reviewID:"111114", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Sam Smit", usermail:"samuel@gmail.com", date:"2020-5-7", reviewID:"111115", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."}
];

var comments = document.getElementById("comments");

var newCom =
  '<div class="comment"> ' +
      '<div class="information"> ' +
          '<p class="username">Jhony</p>' +
          '<p class="usermail">pochta@gmail.com</p>' +
          '<p class="date">2019-5-12</p>' +
      '</div>' +
      '<div class="review">' +
          '<p class="reviewContent">' +
          'Very important text. Very important text. Very important text.Very important text. ' +
          'Very important text. Very important text. Very important text.Very important text. Very important text. ' +
          'Very important text. Very important text.Very important text. Very important text. Very important text.  ' +
          'Very important text.Very important text. Very important text. Very important text. Very important text.' +
          'Very important text. Very important text. Very important text. Very important text.Very important text.' +
          '</p>' +
      '</div>' +
      '<div class="buttons">' +
          '<button class="edit" onclick="">Edit</button>' +
          '<button class="delete" onclick="delFunction()">Delete</button>' +
          '<hr class="mark">' +
      '</div>' +
  '</div>';

//  comments.innerHTML =
//   '<div class="comment"> ' +
// '<div class="information"> ' +
//       '<p class="username">Jhony</p>' +
//       '<p class="usermail">pochta@gmail.com</p>' +
//       '<p class="date">2019-5-12</p>' +
//   '</div>' +
//   '<div class="review">' +
//       '<p class="reviewContent">' +
//       'Very important text. Very important text. Very important text.Very important text. ' +
//       'Very important text. Very important text. Very important text.Very important text. Very important text. ' +
//       'Very important text. Very important text.Very important text. Very important text. Very important text.  ' +
//       'Very important text.Very important text. Very important text. Very important text. Very important text.' +
//       'Very important text. Very important text. Very important text. Very important text.Very important text.' +
//       '</p>' +
//   '</div>' +
//   '<div class="buttons">' +
//       '<button class="edit" onclick="">Edit</button>' +
//       '<button class="delete" onclick="delFunction()">Delete</button>' +
//       '<hr class="mark">' +
//   '</div>' +
// '</div>';
var a = "";


for (i=0; i < reviews.length; i++) {
    a = a + '<div class="comment"> ' +
    '<div class="information"> ' +
        '<p class="username">Jhony</p>' +
        '<p class="usermail">pochta@gmail.com</p>' +
        '<p class="date">2019-5-12</p>' +
    '</div>' +
    '<div class="review">' +
        '<p class="reviewContent">' +
        'Very important text. Very important text. Very important text.Very important text. ' +
        'Very important text. Very important text. Very important text.Very important text. Very important text. ' +
        'Very important text. Very important text.Very important text. Very important text. Very important text.  ' +
        'Very important text.Very important text. Very important text. Very important text. Very important text.' +
        'Very important text. Very important text. Very important text. Very important text.Very important text.' +
        '</p>' +
    '</div>' +
    '<div class="buttons">' +
        '<button class="edit" onclick="">Edit</button>' +
        '<button class="delete" onclick="delFunction()">Delete</button>' +
        '<hr class="mark">' +
    '</div>' +
'</div>';
}


comments.innerHTML = a;

// var items = [
//     'Hello',
//     'my',
//     'name',
//     'is',
//     'John',
//     'Doe'
//   ];
//     var string = "";

//   for (i=0; i < items.length; i++) {
//       string = string + " " + items[i];
//   }
//   console.log(string);

