document.addEventListener('DOMContentLoaded', function(){
  const toggleBtn = document.querySelector('.mobile-menu-toggle')
  const mobileItems = document.querySelector('.mobile-menu-items')

  toggleBtn.addEventListener('click', function(){
    mobileItems.classList.toggle('active')

  })
  // Modal Video
  const modalVideo = document.querySelector('.modal')
  const playBtn = document.querySelector('.video-play-button')
  const closeBtn = document.querySelector('.modal-close-button')
  const videoPlayer= document.querySelector('#videoPlayer')
  // VideoPlayer Click
  playBtn.addEventListener('click', function(){
    // Open modal
    modalVideo.style.display = 'block'
    videoPlayer.src = 'https://www.youtube.com/embed/LXb3EKWsInQ'
    console.log(modalVideo)
    // close modal
    closeBtn.addEventListener('click', function(){
      modalVideo.style.display = 'none'
      videoPlayer.src = ''
    })
    // Close modal from outer the play button
    window.addEventListener('click', function(event){
      if(event.target == modalVideo){
        modalVideo.style.display = 'none'
        videoPlayer.src = ''
        console.log(modalVideo)
      }
    })
  })
 
})

window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar-header')
  if(window.scrollY > 0){
    navbar.classList.add('scroll-bg')
  }else {
    navbar.classList.remove('scroll-bg')
  }
})

// Scroll up
window.addEventListener('scroll', function(){
  const scrollTop = document.querySelector('.top')
  const header = document.querySelector('#header')

  if(window.scrollY == 0){
    scrollTop.style.display = 'none'
    
  } else {
    scrollTop.style.display = 'block'
  }
})
  