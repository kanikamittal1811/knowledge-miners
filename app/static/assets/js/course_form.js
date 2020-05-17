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
    $("#tagNameForm").show(800);
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
        $("#tagNameForm").show(800);
    } else {
        $("#tagNameForm").hide(200);
        $("#tagNameInput").val("");
    }
})

$("#submitCourseFormBtn").click(function(){
    //Checking working of all fields
    console.log($("#courseNameInput").val());
    console.log($("#sourceInput").val());
    console.log($("#tagInput").val());
    console.log($("#tagNameInput").val());
    console.log($("#durationInput").val());
    console.log($("#timeFormatInput").val());
    console.log($("#startDateInput").val());
    console.log($("#deadlineInput").val());
    console.log($("#projectsInput").val());
    console.log($('input[name="certificate-available"]:checked').val()); //This will give 1 for yes and 0 for no
    console.log($("#commentsInput").val());


    if ($("#tagInput").val()==defaultCustomTagValue) {
        // Add a new tag to the database: DATABASE
    }

    // Add a new course to the database: DATABASE
});
