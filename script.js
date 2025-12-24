const welcomeVideo = document.getElementById('welcomeVideo')
const feed = document.getElementById('feed')
const adminPanel = document.getElementById('adminPanel')

let isAdmin = false
let isPremium = false

welcomeVideo.src = 'https://www.w3schools.com/html/mov_bbb.mp4'

// AUTH (Supabase-ready)
function openAuth(type) {
  document.getElementById('authTitle').innerText =
    type === 'login' ? 'Login to Lemonade' : 'Join Lemonade'
  document.getElementById('authModal').classList.remove('hidden')
}

function closeAuth() {
  document.getElementById('authModal').classList.add('hidden')
}

document.getElementById('authForm').addEventListener('submit', e => {
  e.preventDefault()
  closeAuth()
  if (isAdmin) adminPanel.classList.remove('hidden')
})

// POSTS
function createPost() {
  const text = document.getElementById('postText').value
  const link = document.getElementById('mediaLink').value
  const type = document.getElementById('mediaType').value

  const post = document.createElement('div')
  post.className = 'post'

  if (text) {
    const p = document.createElement('p')
    p.innerText = text
    post.appendChild(p)
  }

  if (type === 'image' && link) {
    const img = document.createElement('img')
    img.src = link
    post.appendChild(img)
  }

  if (type === 'video' && link) {
    if (!isPremium) return
    const video = document.createElement('video')
    video.src = link
    video.controls = true
    post.appendChild(video)
  }

  feed.prepend(post)

  document.getElementById('postText').value = ''
  document.getElementById('mediaLink').value = ''
}

// ADMIN / PREMIUM
function togglePremium() {
  isPremium = !isPremium
}

// SUPABASE PLACEHOLDERS
const SUPABASE_URL = ''
const SUPABASE_ANON_KEY = ''

// AI PLACEHOLDER
function aiProcess(content) {
  return content
      }
      
