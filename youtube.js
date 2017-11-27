'use-strict'
const YT_KEY = 'AIzaSyDffDzg6TlfpOXNhc3lmjXHtLiNsoA7PRM'

 function searchVideos(value) {
    var url = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YT_KEY}&q=${value}`;
    return fetchVideos(url)
}

function fetchVideos(url) {
    return fetch(url)
        .then(results => results.json())
        .then(data =>  data.items)
}

function renderVideos(videos) {
    document.querySelector('#videos-list').innerHTML = videos.map(video => {
        let snippet = video.snippet
        let title = snippet.title;
        let thumbnail = snippet.thumbnails.default.url;
        let videoId = video.id.videoId
        return `
            <div class="video-preview" onclick="changePlayedVideo('${videoId}')">
            <img class="img-fluid" src="${thumbnail}">
                <h6>${title}</h6>
            </div>
        `
    })
}


function changePlayedVideo(videoId) {
    var elVideoContianer = document.querySelector('.video-container')
    var elVideoPlayer = elVideoContianer.querySelector('iframe')
    elVideoPlayer.src = `https://www.youtube.com/embed/${videoId}`
}