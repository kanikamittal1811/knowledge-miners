let tomorrow = new Date();
tomorrow.setDate(new Date().getDate()+1);

// Setting constraints on start date and deadline
document.getElementById("startDateInput").valueAsDate = new Date();
document.getElementById("startDateInput").max = tomorrow;
document.getElementById("deadlineInput").valueAsDate = tomorrow;
