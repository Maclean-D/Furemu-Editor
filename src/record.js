document.addEventListener('DOMContentLoaded', function() {
    const recordButton = document.getElementById('record');
    const deleteButton = document.getElementById('delete_audio');
    const audioPlayer = document.querySelector('audio');
    
    let mediaRecorder;
    let audioChunks = [];

    // Function to start recording
    function startRecording(stream) {
        mediaRecorder = new MediaRecorder(stream);
        mediaRecorder.start();

        mediaRecorder.ondataavailable = function(e) {
            audioChunks.push(e.data);
        };

        mediaRecorder.onstop = function() {
            const audioBlob = new Blob(audioChunks, { 'type' : 'audio/mp4' });
            audioChunks = [];
            const audioUrl = URL.createObjectURL(audioBlob);
            audioPlayer.src = audioUrl;
            audioPlayer.style.display = 'block';
        };
    }

    // Click event for the record button
    recordButton.addEventListener('click', function() {
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            recordButton.innerHTML = '<i class="material-icons">mic</i>'; // Change to mic icon
        } else {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(stream => {
                    startRecording(stream);
                    recordButton.innerHTML = '<i class="material-icons">stop</i>'; // Change to stop icon
                }).catch(error => {
                    console.error('Error accessing the microphone', error);
                });
        }
    });

    // Click event for the delete button
    deleteButton.addEventListener('click', function() {
        if (mediaRecorder && mediaRecorder.state !== 'recording') {
            audioPlayer.src = '';
            audioPlayer.style.display = 'none';
        }
    });
});