function getSizeValue(valueWithUnit, unit) {
	return parseInt(valueWithUnit.split(unit)[0]);
}
function balloon(event) {
	switch (event.keyCode) {
		case 68:
			changeSize('.balloon', 1.1, 'down');
			break;
		case 73:
			changeSize('.balloon', 1.1);
			break;
		default:
			return;
	}
}
function changeSize(element, amount, direction) {
	element = document.querySelector(element);
	let elementSize = window.getComputedStyle(element).fontSize;
	let elementSizeValue = getSizeValue(elementSize, 'px');

	if (direction === undefined) {
		elementSizeValue *= amount;
	} else elementSizeValue /= amount;

	if (elementSizeValue <= 60) {
		console.log(elementSize);
		elementSize = Math.ceil(elementSizeValue) + 'px';
		element.style.fontSize = elementSize;
    } else boom(element);

    if (elementSizeValue <= 0) {
    } else {
        text = "done";
    };
       
}

function boom(element) {
	element.firstChild.nodeValue = '💥';
	document.removeEventListener('keydown', balloon, true);
}
document.addEventListener('keydown', balloon, true);