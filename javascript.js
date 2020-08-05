var Review = function(username, usermail, revieContent){

    this.username = username;
    this.usermail = usermail;
    this.revieContent = revieContent;
}
function delFunction() {

    var myObj = document.getElementById("comment");
    myObj.remove();

}
