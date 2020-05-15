let defaultCustomTagValue = "0"; //Get the id of "custom" tag from db: DATABASE

let tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+1);

// Setting constraints on start date and deadline
document.getElementById("startDateInput").valueAsDate = new Date();
document.getElementById("startDateInput").max = tomorrow;
document.getElementById("deadlineInput").valueAsDate = tomorrow;

//Handling tag hide/show
$("#tagNameForm").hide();
if ($("#tagInput").val()==defaultCustomTagValue) {
    $("#tagNameForm").show();
}

/*
First we need to import all the tags from the database,
Then we create "select option" in html
We assign them value attr to identify them
Then we display their background color as well (color is obtained from the db)
Then we work with the selected tag
DATABASE
*/

$("#tagInput").change(function(){
    if ($("#tagInput").val()==defaultCustomTagValue) {
        $("#tagNameForm").show();
    } else {
        $("#tagNameForm").hide();
    }
})

$("#submitCourseFormBtn").click(function(){
    if ($("#tagInput").val()==defaultCustomTagValue) {
        // Add a new tag to the database: DATABASE
    }

    // Add a new course to the database: DATABASE
});
