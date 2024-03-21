document.addEventListener('DOMContentLoaded', function() {
    const mdSwitch = document.getElementById('markdown-preview');
    const textarea = document.querySelector('.jumbo-script-textbox');
    const container = document.getElementById('script');

    // Create a preview div and hide it initially
    const previewDiv = document.createElement('div');
    previewDiv.className = 'markdown-preview';
    previewDiv.style = 'padding: 1rem; display: none;';
    container.appendChild(previewDiv);

    function toggleMarkdownPreview() {
        if (mdSwitch.selected) {
            // Convert textarea Markdown to HTML
            const markdownHtml = simpleMarkdownToHtml(textarea.value);
            // Update and show the preview div
            previewDiv.innerHTML = markdownHtml;
            previewDiv.style.display = '';
            textarea.style.display = 'none';
        } else {
            // Hide the preview div and show the textarea
            previewDiv.style.display = 'none';
            textarea.style.display = '';
        }
    }

    // Extend this simple Markdown parser as needed
    function simpleMarkdownToHtml(markdown) {
        let html = markdown
            .replace(/^# (.*)$/gm, '<h1>$1</h1>')
            .replace(/^## (.*)$/gm, '<h2>$1</h2>')
            .replace(/^### (.*)$/gm, '<h3>$1</h3>')
            .replace(/__([^__]+)__/g, '<strong>$1</strong>') // Bold with __text__
            .replace(/\*\*([^**]+)\*\*/g, '<strong>$1</strong>') // Bold with **text**
            .replace(/_([^_]+)_/g, '<em>$1</em>') // Italic with _text_
            .replace(/\*([^\*]+)\*/g, '<em>$1</em>') // Italic with *text*
            .replace(/\n/g, '<br>'); // Convert newlines to <br> for HTML display
        return html;
    }

    // Listen for the switch change event
    mdSwitch.addEventListener('change', function() {
        toggleMarkdownPreview();
    });
});