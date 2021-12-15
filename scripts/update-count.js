// Updates the download counter
function updateCount() {
	downloadRef.get().then((doc) => {
		if (doc.exists) {
			// Get count
			let currentCount = doc.data().count;

			// Format count
			let count = `${currentCount.toLocaleString()} downloads`;

			// Set counter
			document.getElementById("download-counter").innerHTML = count;
		}
	});
}
