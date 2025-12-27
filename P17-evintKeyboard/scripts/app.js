document.addEventListener('keydown', event => {
    if(event.ctrlKey && event.code == 'KeyP'){
        event.preventDefault()
    }
})