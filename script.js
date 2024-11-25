


var tabLinks = document.getElementsByClassName('skills');  // Get all elements with the class 'skills'
var tabContents = document.getElementsByClassName('table-content');  // Get all elements with the class 'table-content'



function opentab(event, tabname) {
    // Remove active class from all tab links
    for (var tabLink of tabLinks) {
        tabLink.classList.remove('activelink');
    }

    // Remove active class from all content sections to hide them
    for (var tabContent of tabContents) {
        tabContent.classList.remove('active');
    }

    // Add the active class to the clicked tab's content to show it
    var selectedTab = document.getElementById(tabname);
    selectedTab.classList.add('active');  // Show the selected content

    // Add the active-link class to the clicked tab (for underline effect)
    event.currentTarget.classList.add('activelink');
}




        document.getElementById('form').addEventListener('submit', function(event) {
            var valid = true; // Define valid variable
            
            const telephone = document.getElementById('telephone').value;
            if (!telephone) {
                alert("Telephone number is required.");
                valid = false;  // If no telephone number, set valid to false
            }
            
            // If form is not valid, prevent submission
            if (!valid) {
                event.preventDefault(); // Prevent form submission
            }

            if (!name) {
        alert("Name is required.");
        valid = false;  // Mark the form as invalid
    }
    // Check if name contains only letters and spaces
    else if (!validateName(name)) {
        alert("Name should only contain letters and spaces.");
        valid = false;  // Mark the form as invalid
    }
        });
        