const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
  if (value < 0 || value > 1) {
    return;
  }

  gauge.querySelector(".gauge__fill").style.transform = `rotate(${
    value / 2
  }turn)`;
  gauge.querySelector(".gauge__cover").textContent = `${Math.round(
    value * 100
  )}%`;
}

setGaugeValue(gaugeElement, 0.3);




// terms js


// terms

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-button');
    const divs = document.querySelectorAll('.nav-tabs');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            
            // Hide all divs
            divs.forEach(div => div.style.display = 'none');
            
            // Add active class to the clicked button
            button.classList.add('active');
            
            // Get the id of the button that was clicked and show the corresponding div
            const divId = button.id + '-tab';
            const targetDiv = document.getElementById(divId);
            if (targetDiv) {
                targetDiv.style.display = 'block';
            }
        });
    });
});


// sub terms

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
});

// sub content of heading, article, entities etc...



// Get all p tags with the class "button"
const buttons = document.querySelectorAll('.button');

// Add click event listeners to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the button's id
    const buttonId = button.id;

    // Create the id of the corresponding content div
    const contentId = `${buttonId}-content`;

    // Get the content div
    const contentDiv = document.getElementById(contentId);

    // Hide all content divs
    const allContentDivs = document.querySelectorAll('.content-div');
    allContentDivs.forEach(div => {
      div.style.display = 'none';
    });

    // Show the clicked content div
    contentDiv.style.display = 'block';
  });
});


   // Get the specific p tag with id "Article"
const articleButton = document.getElementById("Article");

   // Add a click event listener to the button
   articleButton.addEventListener('click', () => {
     // Get all content divs
     const allContentDivs = document.querySelectorAll('.content-div');

     // Hide all content divs
     allContentDivs.forEach(div => {
       div.style.display = 'none';
     });

     // Show the "article-content" div
     const articleContent = document.getElementById('article-content');
     articleContent.style.display = 'block';
});


   // Get the specific p tag with id "entities"
   const entitiesButton = document.getElementById("entities");

   // Add a click event listener to the button
   entitiesButton.addEventListener('click', () => {
     // Get all content divs
     const allContentDivs = document.querySelectorAll('.content-div');

     // Hide all content divs
     allContentDivs.forEach(div => {
       div.style.display = 'none';
     });

     // Show the "article-content" div
     const articleContent = document.getElementById('entities-content');
     articleContent.style.display = 'block';
});


// Get the specific p tag with id "entities"
const competitorsButton = document.getElementById("competitors");

// Add a click event listener to the button
competitorsButton.addEventListener('click', () => {
  // Get all content divs
  const allContentDivs = document.querySelectorAll('.content-div');

  // Hide all content divs
  allContentDivs.forEach(div => {
    div.style.display = 'none';
  });

  // Show the "article-content" div
  const articleContent = document.getElementById('competitors-content');
  articleContent.style.display = 'block';
});


// smartHeading


const smartHeadingButton = document.getElementById("smartHeading");

// Add a click event listener to the button
smartHeadingButton.addEventListener('click', () => {
  // Get all content divs
  const allContentDivs = document.querySelectorAll('.content-div');

  // Hide all content divs
  allContentDivs.forEach(div => {
    div.style.display = 'none';
  });

  // Show the "article-content" div
  const articleContent = document.getElementById('smartHeading-content');
  articleContent.style.display = 'block';
});



// input popup

const titleElement = document.querySelector('.input-popup ');
    const popupElement = document.querySelector('.inpopup');
    const closeButton = document.getElementById('closeinPopup');

    titleElement.addEventListener('click', () => {
      popupElement.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
      popupElement.style.display = 'none';
    });


const slider = document.getElementById('sliders');
const navTabs = document.querySelector('.hide-for-slider');
    
  slider.addEventListener('click', () => {
    navTabs.style.display = 'none';
});


    function showPopup() {
      document.getElementById('myPopup').style.display = 'block';
    }

    function hidePopup() {
      document.getElementById('myPopup').style.display = 'none';
    }

// content designer popup



    function contentPopup() {
      document.getElementById('mcontentyPopup').style.display = 'block';
    }

    function hidecontentPopup() {
      document.getElementById('mcontentyPopup').style.display = 'none';
    }

// nav popup

const popup = document.querySelector('.popup');

    function shownavPopup() {
      popup.classList.add('show');
    }

    function closePopup() {
      popup.classList.remove('show');
    }
