const options = {
    first: ["CS101","CS102","CS103","CS104","CS105","CS106","CS107","CS108","CS109","CS110","CS111","CS112","CS113","CS114","CS115","CS116","CS117","CS118"],
    second: ["CS201","CS202","CS203","CS204","CS205","CS206","CS207","CS208","CS209","CS210","CS211","CS212","CS213","CS214","CS215","CS216","CS217","CS218"],
    third: ["CS301","CS302","CS303","CS304","CS305","CS306","CS307","CS308","CS309","CS310","CS311","CS312","CS313","CS314","CS315","CS316","CS317","CS318"]
};  

function populateSubForm(subFormId) {
    const floor = document.getElementById('floor').value;
    const items = options[floor];
    const subForm = document.getElementById(subFormId);
    const selectId = subFormId === 'loc' ? 'location' : 'destination';
    const select = subForm.querySelector('select');
    select.innerHTML = '';
    items.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
    });
    subForm.style.display = 'block';
}

function populateAllFloors() {
    const select = document.getElementById('destination');
    select.innerHTML = '';
    for (const floor in options) {
        options[floor].forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            select.appendChild(option);
        });
    }
    document.getElementById('dest').style.display = 'block';
}

let currentLocationValue = '';
let destinationLocationValue = '';

function submitForm() {
    const currentLocation = document.getElementById('location').value;
    const destinationLocation = document.getElementById('destination').value;
    console.log('Current Location:', currentLocation);
    console.log('Destination Location:', destinationLocation);
    displayFloorImage(destinationLocation);
}

function displayFloorImage(destinationLocation) {
    const firstDigit = parseInt(destinationLocation[2]);
    let imageUrl = '';
    switch (firstDigit) {
        case 1:
            imageUrl = 'image/floor1.jpg';
            break;
        case 2:
            imageUrl = 'image/floor2.jpg'; 
            break;
        default:
            imageUrl = 'image/floor3.jpg'; 
            break;
    }
    const imageContainer = document.getElementById('imageContainer');
    const floorImage = document.getElementById('floorImage');
    floorImage.src = imageUrl;
    imageContainer.style.display = 'block';
    floorImage.style.height="300px";width ="500px";
}

document.getElementById('floor').addEventListener('change', function() {
    populateSubForm('loc');
});

document.getElementById('submitBtn').addEventListener('click', function() {
    submitForm();
});

populateSubForm('loc');
populateAllFloors();
