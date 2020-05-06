const soundcloudIframe = document.getElementById('soundcloud')
const body = document.body

const reloadIframe = () => {
  setTimeout(() => {
    soundcloudIframe.src += ''
    reloadIframe()
  }, 35000);
}

body.addEventListener('click', event => {
  soundcloudIframe.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/259055823&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
  
  reloadIframe()
}, {once: true});
