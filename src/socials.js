document.getElementById('copyButton').addEventListener('click', function() {
    // Fetch the content of socials.txt
    fetch('src/socials.txt')
        .then(response => response.text())
        .then(text => {
            // Use the Clipboard API to copy the text
            navigator.clipboard.writeText(text).then(function() {
                console.log('Copying to clipboard was successful!');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        });
});