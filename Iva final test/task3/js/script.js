(function () {
    "use strict";
    var kids;

    $.getJSON('js/kids.json', function (data) {
        kids = data;
    });


    function filterByGame(kids, game) {
        return kids.filter(function (kids) {
            return kids.game === game;
        });
    }

    var names = name.sort;

    var ages = age.sort(function (a, b) {
        return a.age - b.age;
    });


    console.log(ages);

    console.log(names);

    /*functionKid(){

    }*/
})();
