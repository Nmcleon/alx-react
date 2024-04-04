function getFullYear() {
	return new Date().getFullYear();
}

function getFooterCopy(isIndex) {
	if (!isIndex) return "Holberton School main dashboard";
	return "Holberton School";
}

function getLastNotification() {
	return {
		__html: '<strong>Urgent requirement</strong> - complete by EOD'
	}
}


export { getFullYear, getFooterCopy, getLastNotification };