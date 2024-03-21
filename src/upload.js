document.getElementById('upload_zip').addEventListener('click', function() {
    document.getElementById('zip-file-input').click();
});


document.getElementById('zip-file-input').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        JSZip.loadAsync(file).then(function(zip) {
            // Title.txt
            zip.file("Title.txt").async("text").then(function(content) {
                const titleTextbox = document.getElementById('title-textbox');
                titleTextbox.value = content;

                // Programmatically trigger the input event to reflect changes as if typed
                const event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });
                titleTextbox.dispatchEvent(event);
            });

            // Description.txt
            zip.file("Description.txt").async("text").then(function(content) {
                document.querySelector('textarea[placeholder="Description"]').value = content;
            });

            // Thumbnail.png
            zip.file("Thumbnail.png").async("blob").then(function(blob) {
                // Create a URL for the blob
                const thumbnailUrl = URL.createObjectURL(blob);
                
                // Find the img tag and set its src attribute to the blob URL
                const imgTag = document.querySelector('img[src="placeholder_thumbnail.png"]');
                imgTag.src = thumbnailUrl;
            });

            // Thumbnail.txt (Assuming you want to display the thumbnail text somewhere)
            zip.file("Thumbnail.txt").async("text").then(function(content) {
                document.querySelector('textarea[placeholder="Thumbnail Description"]').value = content;
            });

            // Script.txt
            zip.file("Script.txt").async("text").then(function(content) {
                document.querySelector('textarea[placeholder="Script"]').value = content;
            });
        }).catch(function(err) {
            console.error("Error reading zip file:", err);
        });
    }
});