export const checkBrowswerNotifications = () => {
	// Let's check if the browser supports notifications
	if (!("Notification" in window)) {
		console.log("This browser does not support system notifications");
		return false
	}

	// Let's check whether notification permissions have already been granted
	else if (Notification.permission === "granted") {
		return true
	}

	// Otherwise, we need to ask the user for permission
	else if (Notification.permission !== "denied") {
		Notification.requestPermission(function (permission) {
			if(permission === "granted") {
				return true
			}
		})
	}
	return false
}

// List of suggestions for after Pomodoro
const suggestions = [
	"How about a walk around?",
	"Time for more coffee!",
	"Don't forget to stretch."
]

/**
 * Select a random suggestion for after Pomodoro
 */
export const randomSuggestion = () => {
	return suggestions[Math.floor(Math.random() * 3)]
}

/**
 * Converts seconds into a string with HH:MM:SS format
 */
export const prettyDate = (seconds) => {
	let date = new Date(null)
	date.setSeconds(seconds)
	return date.toISOString().substr(11, 8)
}