const textInput = document.getElementById('textInput');
const formatButton = document.getElementById('formatButton');
const formattedText = document.getElementById('formattedText');

formatButton.addEventListener('click', function() {
  const text = textInput.value;
  formattedText.textContent = text.toUpperCase(); // Format: uppercase
  formattedText.style.fontWeight = 'bold'; // Style: bold
  formattedText.style.fontSize = '18px'; // Size: 18px
  formattedText.style.color = 'blue'; // Color: blue

  formattedText.style.display = 'block'; // Make formatted text visible
  textInput.style.display = 'none'; // Hide original text input temporarily
});

textInput.addEventListener('keyup', function() {
  const text = textInput.value;
  formattedText.textContent = text; // Update formatted text as user types
});

textInput.addEventListener('blur', function() { // Optional: Revert formatting on focus out
  formattedText.style.display = 'none';
  textInput.style.display = 'block';
});
