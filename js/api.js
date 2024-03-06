// discuss api call
export const discussApiCall = async () => {
  try {
    let response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts")
    let result = await response.json()
    return result.posts

  } catch (error) {
    console.log(error)
  }
}


// discussion by category
export const discussBySearchCategory = async (category) => {
  try {
    let response = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${category}`)
    let result = await response.json()
    return result.posts
  } catch (error) {
    console.log(error)
  }
}

// fetch all post
export const getAllPost = async () => {
  try {
    let response = await fetch("https://openapi.programming-hero.com/api/retro-forum/latest-posts")
    let result = await response.json()
    return result
  } catch (error) {
    console.log(error)
  }
}