// Update title from textbox
document.getElementById('title-textbox').addEventListener('input', function() {
    var title = document.getElementById('title-textbox').value;
    document.getElementById('display-title').textContent = title;
});

// Update thumbnail from upload
document.addEventListener('DOMContentLoaded', function() {
    const uploadButton = document.getElementById('upload_thumbnail');
    const fileInput = document.getElementById('file-input');
    const imagePlaceholder = document.querySelector('img[src="placeholder_thumbnail.png"]');

    uploadButton.addEventListener('click', function() {
        fileInput.click();
    });

    fileInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imagePlaceholder.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
});

document.getElementById('copy_thumbnail').addEventListener('click', function() {
    // Find the textarea element by id instead of class
    const textarea = document.getElementById('thumbnail_textbox');
    
    // Select the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field to the clipboard
    document.execCommand('copy');

});

document.getElementById('copy_title').addEventListener('click', function() {
    // Find the textarea element by id instead of class
    const textarea = document.getElementById('title-textbox');
    
    // Select the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field to the clipboard
    document.execCommand('copy');

});

document.getElementById('copy_description').addEventListener('click', function() {
    // Find the textarea element by id instead of class
    const textarea = document.getElementById('description');
    
    // Select the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field to the clipboard
    document.execCommand('copy');

});