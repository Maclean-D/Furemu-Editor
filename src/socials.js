document.getElementById('copyButton').addEventListener('click', function() {
    // Define the text to be copied, including new lines at the beginning and end
    const socialsText = `

Socials:
Follow me on X formerly Twitter ► https://twitter.com/
Follow me on Instagram ► https://www.instagram.com/
Follow me on TikTok ► https://www.tiktok.com/@

`;

    // Use the Clipboard API to copy the text
    navigator.clipboard.writeText(socialsText).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});
