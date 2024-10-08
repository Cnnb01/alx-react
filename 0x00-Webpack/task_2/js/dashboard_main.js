const $ = require( "jquery" );
const _ = require("lodash")

let count = 0;
function updateCounter(){
    count += 1
    $("#count").text(`${count} clicks on the button`);
}

let $debFunc = $("<button>Click here to get started</button>").on("click",
    _.debounce(updateCounter, 500, { leading: true, trailing: true })
)

$(document).ready(function(){
    $("body").append("<p>Holberton Dashboard</p>");
    $("body").append("<p>Dashboard data for the students</p>");
    $("body").append($debFunc);
    $("body").append("<p id='count'></p>");
    $("body").append("<p>Copyright - Holberton School</p>");
})
