const soundcloudIframe = document.getElementById('soundcloud')

const reloadIframe = ()=> {
  setTimeout(() => {
    soundcloudIframe.src += ''
    reloadIframe()
  }, 35000);
}

reloadIframe()