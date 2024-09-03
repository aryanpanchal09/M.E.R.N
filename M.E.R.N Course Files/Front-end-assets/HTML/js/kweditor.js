function formatDoc(cmd, value=null) {
	if(value) {
		document.execCommand(cmd, false, value);
	} else {
		document.execCommand(cmd);
	}
}

function addLink() {
	const url = prompt('Insert url');
	formatDoc('createLink', url);
}




const content = document.getElementById('content');

content.addEventListener('mouseenter', function () {
	const a = content.querySelectorAll('a');
	a.forEach(item=> {
		item.addEventListener('mouseenter', function () {
			content.setAttribute('contenteditable', false);
			item.target = '_blank';
		})
		item.addEventListener('mouseleave', function () {
			content.setAttribute('contenteditable', true);
		})
	})
})


document.getElementById("headings").addEventListener("click", function() {
    document.getElementById("heading-terms").style.display = "block";
    document.getElementById("content-terms").style.display = "none";

	document.getElementById("headings").classList.add("active");
    document.getElementById("contents").classList.remove("active");
  });

  document.getElementById("contents").addEventListener("click", function() {
    document.getElementById("heading-terms").style.display = "none";
    document.getElementById("content-terms").style.display = "block";

	document.getElementById("contents").classList.add("active");
    document.getElementById("headings").classList.remove("active");
  });
