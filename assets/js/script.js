// declare today and display in header
var today = moment().format('MMMM Do YYYY, h:mm a');
var currentDay = $("#currentDay").text(today);

// give each hour an id starting at 9
var $timeID = $(".time-block");
$timeID.attr('id', function (timeIDIndex) {
    return (timeIDIndex +9 );
})

var checkTime = function () {
    // get current hour
    var currentHour = moment().hour();
    var timeIDIndex = 9;

    $(".time-block").each(function () {
        var time = parseInt($(this).attr("id"))
        // task time has past
        if (time < currentHour) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        // task time is now
        else if (time === currentHour) {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // task time is in the future
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    }
    )
}

// save the ID and text for the row that the button is in
$(".saveBtn").on("click", function () {
    var saveID = $(this).parent().attr("id");
    var saveText = $(this).siblings(".description").val();

    localStorage.setItem(saveID, saveText);
})


// Tried to loop getItem but failed
// getItemCount = 9;
// $timeID.each(function() {
//     $timeID.children(".description").val(localStorage.getItem(getItemCount))
//     ++getItemCount
// })

// for (i = 0; i <= 9; i++) {
//     itemCount = i + 9;
//     $timeID[i].getElementsbyClassName(".desciption").innerHTML =(localStorage.getItem(itemCount));
// }

// Individual get Item
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

checkTime();
