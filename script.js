//your JS code here. If required.

const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog'
];

const ul = document.getElementById("band");

function strip(band) {
    return band.replace(/^(a |an |the )/i, "");
}

bands.sort((a, b) => {
    return strip(a).localeCompare(strip(b));
});

bands.forEach((band) => {
    const li = document.createElement("li");
    li.innerText = band;
    ul.appendChild(li);
});
