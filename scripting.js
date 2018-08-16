function myFunction () {
    document.getElementById ("myDropdown") .classlist.toggle ("show");
}
window.onclick = function (event){
    if (!event.target.matches ('.dropbtn')) {
        var dropdowns = document.getElementByClassName ("dropdown-content")
        var i;
            for (i = 0 ; 1 < dropdowns.length ; i ++) {
            var openDropdowns = dropdowns [i];
                if (openDropdowns.classList.conatins ('show')) {
                openDropdown.classlist.remove ('show');
                }
            }
    }
}