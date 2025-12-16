const reels = [
  {
    userName: "rohit_dev",
    likeCount: 1240,
    isLiked: true,
    commentCount: 98,
    caption: "Late night coding hits different 💻🔥",
    video: "./reels/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 45,
    isFollowed: true
  },
  {
    userName: "travel_with_riya",
    likeCount: 8920,
    isLiked: false,
    commentCount: 410,
    caption: "Mountains are calling 🏔️✨",
    video: "./reels/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/21.jpg",
    shareCount: 320,
    isFollowed: false
  },
  {
    userName: "fitness_king",
    likeCount: 5600,
    isLiked: true,
    commentCount: 230,
    caption: "No pain, no gain 💪",
    video: "./reels/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/32.jpg",
    shareCount: 150,
    isFollowed: true
  },
  {
    userName: "foodie_mania",
    likeCount: 3421,
    isLiked: false,
    commentCount: 187,
    caption: "Street food >> everything 🍔😋",
    video: "./reels/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/45.jpg",
    shareCount: 98,
    isFollowed: false
  },
  {
    userName: "design_guru",
    likeCount: 2210,
    isLiked: true,
    commentCount: 76,
    caption: "Minimal UI is ❤️",
    video: "./reels/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/54.jpg",
    shareCount: 60,
    isFollowed: true
  },
  {
    userName: "nature_clicks",
    likeCount: 10450,
    isLiked: true,
    commentCount: 540,
    caption: "Nature never disappoints 🌿📸",
    video: "./reels/video1.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/62.jpg",
    shareCount: 410,
    isFollowed: true
  },
  {
    userName: "music_vibes",
    likeCount: 4300,
    isLiked: false,
    commentCount: 190,
    caption: "Headphones on, world off 🎧",
    video: "./reels/video2.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/71.jpg",
    shareCount: 130,
    isFollowed: false
  },
  {
    userName: "startup_life",
    likeCount: 1780,
    isLiked: false,
    commentCount: 64,
    caption: "Building dreams one step at a time 🚀",
    video: "./reels/video3.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/83.jpg",
    shareCount: 40,
    isFollowed: false
  },
  {
    userName: "artistic_soul",
    likeCount: 2999,
    isLiked: true,
    commentCount: 142,
    caption: "Art speaks where words fail 🎨",
    video: "./reels/video4.mp4",
    userProfile: "https://randomuser.me/api/portraits/women/90.jpg",
    shareCount: 85,
    isFollowed: true
  },
  {
    userName: "tech_updates",
    likeCount: 6540,
    isLiked: true,
    commentCount: 310,
    caption: "Latest tech trends you should know 🤖",
    video: "./reels/video5.mp4",
    userProfile: "https://randomuser.me/api/portraits/men/95.jpg",
    shareCount: 220,
    isFollowed: true
  }
];

var sum = ''

reels.forEach(function(elem){
  sum = sum + `<div class="reel">
                    <video autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.userName}</h4>
                            <button>${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div class="right">
                        <div class="like">
                            <h4 class="like-icon icon">${elem.isLiked?'<i class="ri-hearts-fill love"></i>':'<i class="ri-heart-3-line"></i>'}</h4>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon icon"><i class="ri-chat-3-line"></i></h4>
                            <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon icon"><i class="ri-send-plane-2-line"></i></h4>
                            <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon icon"><i class="ri-more-2-fill"></i></h4>
                        </div>
                    </div>
                </div>`
})

let allReels = document.querySelector(".all-reels")

allReels.innerHTML = sum