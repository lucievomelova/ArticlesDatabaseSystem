function startFooter() {

    const line = document.createElement('hr');
    const a = document.createElement('a');
    textNode = document.createTextNode("Go to main page");
    a.appendChild(textNode);
    a.title = "Link to main page";
    a.href = "./index.html";
    document.body.appendChild(line)
    document.body.appendChild(a);
}

function displayTotalTime(starttime, endtime, description) {
    const totalTime = endtime - starttime;


    const time = document.createElement('p');
    time.className = 'time';
    const textNode = document.createTextNode("Measured time for " + description + ": " + totalTime + "ms");
    time.appendChild(textNode);

    document.body.appendChild(time);


}