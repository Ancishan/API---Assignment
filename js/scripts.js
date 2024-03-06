// import api calls
import { discussApiCall, discussBySearchCategory, getAllPost } from './api.js';
import { discussCard, latestPostCard, notificationCard } from './markup.js';

// elements
let discussDiv = document.querySelector("#discuss .left-content")
let notificatioinDiv = document.querySelector("#discuss .right-content .notification")
let keywordField = document.getElementById("keyword")
let submitBtn = document.getElementById("submit-btn")
let postCardDiv = document.querySelector(".post-cards")
let discussSection = document.querySelector('.discuss-section .content .left-content')
let loadingScreen = document.querySelector('.loading-screen')
let readCounter = document.getElementById("read-count")

let counter = 0


// set notification
let setNotification = (title, views) => {
  notificatioinDiv.insertAdjacentHTML("beforeend", notificationCard(title, views))
}

// fetch all discussion
let callApi = async () => {
  discussDiv.innerHTML = ""
  let resut = await discussApiCall()
  // insert data inside the discuss div
  resut.map((e) => {
    discussDiv.insertAdjacentHTML("beforeend", discussCard(e))
  })
}

// post fetch
let fetchPost = async () => {
  postCardDiv.innerHTML = ""
  let result = await getAllPost()

  result.map((e) => {
    postCardDiv.insertAdjacentHTML("beforeend", latestPostCard(e))
  })
}


// load data on window load
window.onload = async () => {
  await callApi()
  await fetchPost()

  loadingScreen.classList.add('opacity-0')
  loadingScreen.classList.add('invisible')
}

// load data based on search
submitBtn.onclick = async () => {
  if (keywordField.value.trim() == "") {
    await callApi()
    return alert("write category in search bar")
  }

  loadingScreen.classList.remove('opacity-0')
  loadingScreen.classList.remove('invisible')

  discussDiv.innerHTML = ""
  let discussion = await discussBySearchCategory(keywordField.value)

  discussion.map((e) => {
    discussDiv.insertAdjacentHTML("beforeend", discussCard(e))
  })

  loadingScreen.classList.add('opacity-0')
  loadingScreen.classList.add('invisible')
}

// on click of discussion cards
let handleClick = (e) => {
  let parent = e.target.parentNode
  if (parent.classList.contains("notify-btn")) {
    let target = parent.closest(".discuss-card")
    let views = target.querySelector('.views')
    let title = target.getAttribute("data-id")
    let viewsCount = views.getAttribute('data-views')
    setNotification(title, viewsCount)
    readCounter.textContent = "" + (++counter)
  }
}

discussSection.addEventListener('click', handleClick)
