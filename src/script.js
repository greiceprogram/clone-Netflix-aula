function toggleVideo() { // função // 
    const trailer = document.querySelector('.trailer');// Variavel que busca a classe trailer //
    const video = document.querySelector('video'); // Variavel que busca a classe video //
    trailer.classList.toggle('active'); 

    video.currentTime = 0;
    video.pause();
}
