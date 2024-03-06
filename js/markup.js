// discuss card
const discussCard = (data) => {
  let markup = `
  <div class="discuss-card p-10 flex gap-3 lg:gap-6 rounded-2xl hover:border-indigo-400 border-2 hover:bg-indigo-200 bg-gray-100 w-full mb-6 cursor-pointer" data-id="${data.title}">
            <div class="image w-16 h-16 relative pointer-events-none">
              <div class="badge ${data.isActive ? "badge-success" : "badge-error"} badge-sm absolute right-[-5px] top-[-5px]"></div>
              <img src="${data.image}" alt="" class="w-full h-full object-cover object-center rounded-md">
            </div>

            <div class="text-content flex-grow">
              <p class="text-[14px] pb-3"><span class="pr-5">#${data.category}</span> Author : ${data.author.name} </p>
              <h3 class="text-2xl font-bold pb-4">${data.title}</h3>
              <p class="text-xl pb-5">${data.description}</p>
              <div class="flex justify-between border-dashed border-t-2 border-gray-400 pt-5 w-full">
                <p class="pointer-events-none">
                <span class="pr-2"><i class="fa-regular fa-comment-dots"></i></span> ${data.comment_count}
                <span class="px-2 views" data-views="${data.view_count}"><i class="fa-regular fa-eye"></i></span> ${data.view_count}
                <span class="px-2"><i class="fa-regular fa-clock"></i></span> ${data.posted_time}min
              </p>

                <button class="w-8 h-8 rounded-full bg-green-400 text-white notify-btn"><i
                    class="fa-regular fa-envelope-open -z-10"></i></button>
              </div>
            </div>
          </div>
  `

  return markup
}

// notification
let notificationCard = (title, views) => {
  let markup = `
  <div class="bg-white rounded-lg w-full p-4 mt-4 flex gap-[5px] flex-grow items-center">
    <h5 class="font-semibold w-3/4">${title}</h5>
    <button disabled class="text-gray-400 flex">
      <span class="pr-2"><i class="fa-regular fa-eye"></i></span>${views}</button>
  </div>
  `

  return markup
}

// latest post cards
let latestPostCard = (data) => {
  let markup = `
  <div class="cards rounded-xl border-2 border-gray-300 p-6">
          <div class="image w-full h-[190px] overflow-hidden mb-6 rounded-2xl">
            <img src="${data.cover_image} alt="" class="w-full h-full object-cover object-center">
          </div>

          <p class="text-gray-400"><span><i class="fa-regular fa-calendar-days"></i></span> ${data.author.posted_date}</p>

          <h5 class="font-extrabold text-[18px] pb-3 pt-4">${data.title}</h5>
          <p class="text-gray-400 pb-4">${data.description}</p>
          <div class="user-info flex">
            <img src="${data.profile_image}" alt="" class="w-11 h-11 rounded-full me-4">
            <div class="text">
              <h6 class="font-bold">${data.author.name}</h6>
              <p class="text-[14px]">${data.author?.designation ? data.author.designation : "unknown"}</p>
            </div>
          </div>
        </div>
  `

  return markup
}

export { discussCard, notificationCard, latestPostCard }