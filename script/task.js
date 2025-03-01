const date = new Date();
const update = date.toDateString();
const parts = update.split(" ");
parts[0] = parts[0] + " ,";
const finalDate = parts[1] + " " + parts[2] + " " + parts[3];
document.getElementById("updatedDay").innerText = parts[0];
document.getElementById("updatedDate").innerText = finalDate;


//Js code for task-01
document.getElementById("shopease-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("shopease-btn").style.backgroundColor = 'gray';
    document.getElementById("shopease-btn").disabled = true;

    const assignedtask = document.getElementById("assignedCount").innerText;
    const convertedAssignedCount = parseInt(assignedtask);

    const completeCount = document.getElementById("complete-count").innerText;
    const convertedCount = parseInt(completeCount);

    const value = "0";
    const finalassigned = value.concat(convertedAssignedCount - 1);
    document.getElementById("assignedCount").innerText = finalassigned;

    const finalCount = convertedCount + 1;
    document.getElementById("complete-count").innerText = finalCount;

    const heading = document.getElementById("taskHeading1").innerText;

    const time = new Date().toLocaleTimeString();
    alert("Board updated successfully");

    //Jekhane comment publish korbo sei jayga locate korlam
    const publishPlace = document.getElementById('notification');

    //New jaygay text add korar jonno new wlwmwnt add korlam
    const userInput = document.createElement('p');
    userInput.classList.add('comment');

    //fetch kora comment publish place a anlam
    userInput.innerText = "You have completed the task " + heading + " at " + time;

    //finally comment ta ke publish place a child hisebe append korlam
    publishPlace.appendChild(userInput);
    if(finalassigned===("0"+0))
        {
            alert("Congrates !!! You have completed all the current task");
        }

})

//Js code for task-02
document.getElementById("CloudSync-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("CloudSync-btn").style.backgroundColor = 'gray';
    document.getElementById("CloudSync-btn").disabled = true;

    const assignedtask = document.getElementById("assignedCount").innerText;
    const convertedAssignedCount = parseInt(assignedtask);

    const completeCount = document.getElementById("complete-count").innerText;
    const convertedCount = parseInt(completeCount);

    const val = "0";
    const finalassigned = val.concat(convertedAssignedCount - 1);
    document.getElementById("assignedCount").innerText = finalassigned;

    const finalCount = convertedCount + 1;
    document.getElementById("complete-count").innerText = finalCount;

    const heading = document.getElementById("taskHeading2").innerText;

    const time = new Date().toLocaleTimeString();
    alert("Board updated successfully");

    //Jekhane comment publish korbo sei jayga locate korlam
    const publishPlace = document.getElementById('notification');

    //New jaygay text add korar jonno new wlwmwnt add korlam
    const userInput = document.createElement('p');
    userInput.classList.add('comment');

    //fetch kora comment publish place a anlam
    userInput.innerText = "You have completed the task " + heading + " at " + time;

    //finally comment ta ke publish place a child hisebe append korlam
    publishPlace.appendChild(userInput);
    if(finalassigned===("0"+0))
        {
            alert("Congrates !!! You have completed all the current task");
        }
})

//Js code for task-03
document.getElementById("SwiftPay-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("SwiftPay-btn").style.backgroundColor = 'gray';
    document.getElementById("SwiftPay-btn").disabled = true;

    const assignedtask = document.getElementById("assignedCount").innerText;
    const convertedAssignedCount = parseInt(assignedtask);

    const completeCount = document.getElementById("complete-count").innerText;
    const convertedCount = parseInt(completeCount);

    const val = "0";
    const finalassigned = val.concat(convertedAssignedCount - 1);
    document.getElementById("assignedCount").innerText = finalassigned;

    const finalCount = convertedCount + 1;
    document.getElementById("complete-count").innerText = finalCount;

    const heading = document.getElementById("taskHeading3").innerText;

    const time = new Date().toLocaleTimeString();
    alert("Board updated successfully");

    //Jekhane comment publish korbo sei jayga locate korlam
    const publishPlace = document.getElementById('notification');

    //New jaygay text add korar jonno new wlwmwnt add korlam
    const userInput = document.createElement('p');
    userInput.classList.add('comment');

    //fetch kora comment publish place a anlam
    userInput.innerText = "You have completed the task " + heading + " at " + time;

    //finally comment ta ke publish place a child hisebe append korlam
    publishPlace.appendChild(userInput);
    if(finalassigned===("0"+0))
        {
            alert("Congrates !!! You have completed all the current task");
        }
})

//Js code for task-04
document.getElementById("Meta-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("Meta-btn").style.backgroundColor = 'gray';
    document.getElementById("Meta-btn").disabled = true;

    const assignedtask = document.getElementById("assignedCount").innerText;
    const convertedAssignedCount = parseInt(assignedtask);

    const completeCount = document.getElementById("complete-count").innerText;
    const convertedCount = parseInt(completeCount);

    const val = "0";
    const finalassigned = val.concat(convertedAssignedCount - 1);
    document.getElementById("assignedCount").innerText = finalassigned;

    const finalCount = convertedCount + 1;
    document.getElementById("complete-count").innerText = finalCount;

    const heading = document.getElementById("taskHeading4").innerText;

    const time = new Date().toLocaleTimeString();
    alert("Board updated successfully");

    //Jekhane comment publish korbo sei jayga locate korlam
    const publishPlace = document.getElementById('notification');

    //New jaygay text add korar jonno new wlwmwnt add korlam
    const userInput = document.createElement('p');
    userInput.classList.add('comment');

    //fetch kora comment publish place a anlam
    userInput.innerText = "You have completed the task " + heading + " at " + time;

    //finally comment ta ke publish place a child hisebe append korlam
    publishPlace.appendChild(userInput);
    if(finalassigned===("0"+0))
        {
            alert("Congrates !!! You have completed all the current task");
        }
})

//Js code for task-05
document.getElementById("Google-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("Google-btn").style.backgroundColor = 'gray';
    document.getElementById("Google-btn").disabled = true;

    const assignedtask = document.getElementById("assignedCount").innerText;
    const convertedAssignedCount = parseInt(assignedtask);

    const completeCount = document.getElementById("complete-count").innerText;
    const convertedCount = parseInt(completeCount);

    const val = "0";
    const finalassigned = val.concat(convertedAssignedCount - 1);
    document.getElementById("assignedCount").innerText = finalassigned;

    const finalCount = convertedCount + 1;
    document.getElementById("complete-count").innerText = finalCount;

    const heading = document.getElementById("taskHeading5").innerText;

    const time = new Date().toLocaleTimeString();
    alert("Board updated successfully");

    //Jekhane comment publish korbo sei jayga locate korlam
    const publishPlace = document.getElementById('notification');

    //New jaygay text add korar jonno new wlwmwnt add korlam
    const userInput = document.createElement('p');
    userInput.classList.add('comment');

    //fetch kora comment publish place a anlam
    userInput.innerText = "You have completed the task " + heading + " at " + time;

    //finally comment ta ke publish place a child hisebe append korlam
    publishPlace.appendChild(userInput);
    if(finalassigned===("0"+0))
        {
            alert("Congrates !!! You have completed all the current task");
        }
})

//Js code for task-06
document.getElementById("Glassdoar-btn").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("Glassdoar-btn").style.backgroundColor = 'gray';
    document.getElementById("Glassdoar-btn").disabled = true;

    const assignedtask = document.getElementById("assignedCount").innerText;
    const convertedAssignedCount = parseInt(assignedtask);

    const completeCount = document.getElementById("complete-count").innerText;
    const convertedCount = parseInt(completeCount);

    const val = "0";
    const finalassigned = val.concat(convertedAssignedCount - 1);
    document.getElementById("assignedCount").innerText = finalassigned;

    const finalCount = convertedCount + 1;
    document.getElementById("complete-count").innerText = finalCount;

    const heading = document.getElementById("taskHeading6").innerText;

    const time = new Date().toLocaleTimeString();
    alert("Board updated successfully");

    //Jekhane comment publish korbo sei jayga locate korlam
    const publishPlace = document.getElementById('notification');

    //New jaygay text add korar jonno new wlwmwnt add korlam
    const userInput = document.createElement('p');
    userInput.classList.add('comment');

    //fetch kora comment publish place a anlam
    userInput.innerText = "You have completed the task " + heading + " at " + time;

    //finally comment ta ke publish place a child hisebe append korlam
    publishPlace.appendChild(userInput);

    if(finalassigned===("0"+0))
        {
            alert("Congrates !!! You have completed all the current task");
        }
})

//Clear activity log
document.getElementById("clear-btn").addEventListener("click", function (event) {
    const clear = document.getElementById("notification");
    clear.innerHTML = "";
})


//change theme
const colors = ['#51e2f5', '#9df9ef', '#edf756', '#ffa8B6', '#d0bdf4'];
let i = 0;
document.getElementById("theme-btn").addEventListener('click', function (event) {
    document.getElementById("theme").style.backgroundColor = colors[i];
    i = (i + 1);
    if(i===colors.length)
    {
        i=0;
    }
})

//discover new
document.getElementById("discover").addEventListener("click",function(){
    window.location.href="./blog.html"
})
