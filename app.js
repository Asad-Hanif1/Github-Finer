



<//------js data start------------//>

function getDev(event) {
    event.preventDefault()

    document.querySelector(".ins").classList.add("hidden")
    document.querySelector(".result").classList.remove("hidden")
    document.querySelector(".err").classList.add("hidden")
    let userName = document.querySelector("#userInput").value;
    let gitName = document.getElementById("name")
    let gitUsername = document.getElementById("username")
    let gitBio = document.getElementById("bio")
    let gitRepo = document.getElementById("repo")
    let gitFollowers = document.getElementById("followers")
    let gitFollowing = document.getElementById("following")
    let gitLocation = document.getElementById("location")
    let gitTwitter = document.getElementById("twitter")
    let gitUrl = document.getElementById("url")
    let gitCompany = document.getElementById("company")
    let gitProfileImage1 = document.getElementById("image1")
    let gitProfileImage2 = document.getElementById("image2")
    let gitDate = document.getElementById("date")