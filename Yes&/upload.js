function saveFileZ() {
    console.log("Saving...");
    const name = document.getElementById('txtName');
    const lname = document.getElementById('txtlName');
    const subject = document.getElementById('inputTopic');
    const feedback = document.getElementByID('inputFeedback');
    const division = document.getElementById('exampleDataList');
    const city = document.getElementById('inputCity');
    
    console.log("Saving2...");

    let data = 
        '\rName: ' + name.value + ' ' + lname.value + '\r\n' +
        'Topic: ' + subject.value + '\r\n' +
        'Division: ' + division.value + '\r\n' +
        'City: ' + city.value + '\r\n' +
        'Feedback: ' + feedback.value + '\r\n' +
        'Yes &: ';

    const textToBLOB = new Blob([data], {type: 'text/plain'});
    const sFileName =  subject.value + '.txt';

    let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click(); 
}
function hello() {
    console.log("Hello!");
}