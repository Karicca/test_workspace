const playerElement = document.getElementById('player')
const playerMedia = document.getElementById('player-media')

const buttons = playerElement.querySelectorAll('button')

function getMediaUrl(id) {
	return `https://www.youtube-nocookie.com/embed/${id}`
}

buttons.forEach(button => {
	button.addEventListener('click', () => {
		const videoId = button.dataset.videoId
		const newUrl = getMediaUrl(videoId)
		playerMedia.src = newUrl
	})
})