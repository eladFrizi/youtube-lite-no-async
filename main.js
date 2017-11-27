'use-strict'

function render(term) {
    searchVideos(term).then(videos => {
        renderVideos(videos);
        changePlayedVideo(videos[0].id.videoId);
    });
    renderWiki(term);
}

function initApp() {
    render('the beatles')
}


function searchPressed() {
    event.preventDefault()
    searchValue = event.target.querySelector('input').value
    render(searchValue);
}
