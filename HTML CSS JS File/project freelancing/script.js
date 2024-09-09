document.addEventListener('DOMContentLoaded', function() {
    var aiWritingButton = document.getElementById('ai-writing');
    var navTabs = document.getElementById('nav-tabs');

    aiWritingButton.addEventListener('click', function() {
        if (navTabs.style.display === 'none' || navTabs.style.display === '') {
            navTabs.style.display = 'block';
        } else {
            navTabs.style.display = 'none';
        }
    });
});


var showingSourceCode = false;
        var isInEditMode = true;

        function enableEditMode (){
            richTextField.document.designMode = 'on';
        }

        function execCmd(command){
            richTextField.document.execCommand(command, false, null);
        }

        function execCommandWithArg(command, arg){
            richTextField.document.execCommand(command, false, arg);

        }
        function toggleSource(){
            if(showingSourceCode){
                richTextField.document.getElementByTagName('body')[0].innerHTML = richTextField.document.getElementByTagName('body')[0].textContent;
                showingSourceCode = false;
            }else{
                richTextField.document.getElementByTagName('body')[0].textContent = richTextField.document.getElementByTagName('body')[0].innerHTML;

                showingSourceCode = true;
            }
            function toggleEdit(){
                if(isInEditMode){
                    richTextField.document.designMode = 'Off';
                    textContent = false;
                }else{
                    richTextField.document.designMode = 'On';
                    isInEditMode = true;
                }
            }
        }



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


const showCode = document.getElementById('show-code');
let active = false;

showCode.addEventListener('click', function () {
	showCode.dataset.active = !active;
	active = !active
	if(active) {
		content.textContent = content.innerHTML;
		content.setAttribute('contenteditable', false);
	} else {
		content.innerHTML = content.textContent;
		content.setAttribute('contenteditable', true);
	}
})



const filename = document.getElementById('filename');

function fileHandle(value) {
	if(value === 'new') {
		content.innerHTML = '';
		filename.value = 'untitled';
	} else if(value === 'txt') {
		const blob = new Blob([content.innerText])
		const url = URL.createObjectURL(blob)
		const link = document.createElement('a');
		link.href = url;
		link.download = `${filename.value}.txt`;
		link.click();
	} else if(value === 'pdf') {
		html2pdf(content).save(filename.value);
	}
}




