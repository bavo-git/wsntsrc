function toggleFullscreen(img) {
    if (img.classList.contains('fullscreen')) {
        img.classList.remove('fullscreen');
        document.exitFullscreen();
    } else {
        img.classList.add('fullscreen');
        img.requestFullscreen();
    }
}
