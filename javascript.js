function delFunction() {

    var myObj = document.getElementsByClassName("comment");
    myObj.remove();

}

var reviews = [
    {username:"Frodo Bagins", usermail:"shiir@gmail.com", date:"2019-5-13", reviewID:"111111", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Vladimir Putin", usermail:"russian-bear@gmail.com", date:"2020-3-10", reviewID:"111112", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Petro Poroshenko", usermail:"chocolate_king@gmail.com", date:"2020-3-11", reviewID:"111113", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Harry Potter", usermail:"qvidichmaster@gmail.com", date:"2020-5-5", reviewID:"111114", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."},
    {username:"Sam Smit", usermail:"samuel@gmail.com", date:"2020-5-7", reviewID:"111115", reviewContent:"Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text.  Very important text.Very important text. Very important text. Very important text. Very important text.Very important text. Very important text. Very important text. Very important text.Very important text."}
];

var newReview = document.createElement("div");

var newInformation = document.createElement("div")

