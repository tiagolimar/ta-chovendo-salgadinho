function chover() {
    const body = document.querySelector('body');

    const img = document.createElement('img');
    if (Math.random() > 0.5) {
        img.src = "coxinha.png";
    }else{
        img.src = "enroladinho.png";
    }
    img.width = 64;
    img.className = "absolute top-0";

    img.style.position = "absolute";
    img.style.left = `${Math.random() * window.innerWidth * 0.9}px`;
    if (Math.random() > 0.5) {
        img.style.animation = "fallAndFade 3s linear forwards";
    }else{
        img.style.animation = "fallAndFade2 3s linear forwards";
    }

    body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 3000);
}

setInterval(chover, 100);