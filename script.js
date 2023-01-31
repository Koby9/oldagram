const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]
const mainContainer = document.querySelector(".main-container")
const postContainer = document.querySelector(".post")
const profilePicture = document.querySelector(".profile-picture")
const userName = document.querySelector(".name")
const userLocation = document.querySelector(".location")
const imagePost = document.querySelector(".image-post")
const postLikes = document.querySelector(".likes")
const postComments = document.querySelector(".comment")
const userComment = document.querySelector(".user-comment")
const likeButton = document.querySelector("button");

renderPosts()

function renderPosts() {
        for (i = 1; i < posts.length; i++) {
            const clonePost = postContainer.cloneNode(true)
            createPost(i)
            mainContainer.appendChild(clonePost)
            // console.log(posts[i].username)
            // userComment.textContent = posts[i].username
        }
}

function createPost(i) {
    userName.textContent = posts[i].name
    userLocation.textContent = posts[i].location
    profilePicture.src = posts[i].avatar
    imagePost.src = posts[i].post
    postLikes.textContent = posts[i].likes + " Likes"
    postComments.textContent = posts[i].comment
    userComment.textContent = posts[i].username
}

likeButton.addEventListener("click", function() {
    console.log("LIKE")
})