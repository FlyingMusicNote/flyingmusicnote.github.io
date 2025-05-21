
let birthdays = [
    ["moonlightcatalyst", [12, 1]],
    ["turtletastic", [6, 7]],
    ["ronny_wonny", [12, 6]],
    ["cs2958113", [4, 14]],
    ["reliant", [9, 15]],
    ["flyingmusicnote", [4, 20]],
    ["bluetheepickid", [10, 3]],
    ["mistermulch", [8, 14]],
];

function getDaysUntilBirthday(data) {
    const month = data[1][0];
    const day = data[1][1];

    const today = new Date();
    const currentYear = today.getFullYear();

    // this is stored in milliseconds btw
    let birthday = new Date(currentYear, month - 1, day);

    // If their birthday already passed this year, make it think
    // a year in advance
    if (today > birthday) {
        birthday = new Date(currentYear + 1, month - 1, day);
    }

    const millisecondsSince = birthday - today;

    let daysSince = Math.ceil(millisecondsSince / (1000 * 60 * 60 * 24));

    // When doing the math, the number gets set to 365 when their
    // birthday is today, so i changed it to be 0 instead
    if (daysSince == 365) { daysSince = 0; }

    return daysSince;
}

// Calculate brithdays!
for (let i = 0; i < birthdays.length; i++) {
    let daysSince = getDaysUntilBirthday(birthdays[i]);
    birthdays[i][2] = daysSince;
}

// Sort from the closest birthday to the furthest
birthdays.sort((a, b) => a[2] - b[2]);

function makeItemForDiv(name, days, monthdays) {
    const div = document.getElementById('list');

    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.gap = "8px";
    
    const img = document.createElement("img");
    img.src = "./images/" + name + ".png";
    img.width = 48;
    img.height = 48;
    img.alt = name;
    
    const content = document.createElement("p");
    var months = [ "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December" ];
    content.title = months[monthdays[0][0] - 1] + " " + monthdays[0][1]; // Tool tip

    if (days == 0) {
        days = "TODAY!! 🎂";
    } else {
        days = days + " days";
    }

    content.innerText = name + " .. " + days;

    content.style.fontFamily = "Verdana, Sans-Serif";

    container.appendChild(img);
    container.appendChild(content);
    
    div.appendChild(container);
}

// Make items
for (let i = 0; i < birthdays.length; i++) {
    let name = birthdays[i][0];
    let days = birthdays[i][2];
    makeItemForDiv(name, days, [birthdays[i][1]]);
}