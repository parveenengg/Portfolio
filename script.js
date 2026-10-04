document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("main-video");
    const videoWrapper = document.getElementById("video-wrapper");

    // Handle play/pause when clicking the wrapper
    videoWrapper.addEventListener("click", (e) => {
        // Prevent action if they clicked the native controls (roughly the bottom 50px of the video)
        const rect = video.getBoundingClientRect();
        const clickY = e.clientY - rect.top;
        if (clickY > rect.height - 50) {
            return; // Let the browser handle the controls click natively
        }

        // Toggle play/pause
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Prevent the video's default click behavior from causing a "double toggle" 
    // where it plays and immediately pauses again
    video.addEventListener("click", (e) => {
        e.preventDefault();
    });
});
