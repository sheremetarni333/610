var generated=Math.floor(Math.random()*(28-18)+18);


if(generated<=12)
{

document.getElementById("temperature").innerHTML=generated + ' ˚';
document.getElementById("icon-desc").className = "btn-icon fc fc-weather-c";
}
else if(generated >= 13 && generated <= 21)
{

document.getElementById("temperature").innerHTML=generated + ' ˚';
document.getElementById("icon-desc").className = "btn-icon fc fc-weather-b";
}

else if(generated >= 22 && generated <= 29)
{

document.getElementById("temperature").innerHTML=generated + ' ˚';
document.getElementById("icon-desc").className = "btn-icon fc fc-weather-a";
}



else
{

}
