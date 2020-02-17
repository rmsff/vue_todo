var idCounter = 0;
export default (prefix = 'id_', currentId = 0) => {
	var id;
	if (idCounter <= currentId) idCounter = currentId;
	id = ++idCounter;
	return String(prefix) + id;
};
