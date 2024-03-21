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