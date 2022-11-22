function drawASlug(canvasId, s, x, y) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    const step = 10*s;
    ctx.fillStyle = "rgb(0, 255, 255)";
    ctx.fillRect(x * canvas.width, y * canvas.height, 
                 x * canvas.width + canvas.width * s, y * canvas.height + canvas.height * s);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5 * s;
    ctx.beginPath();


    // Initialisierung
    var sx = canvas.width * s;
    var sy = canvas.height * s;
    var startX = x * canvas.width;
    var startY = y * canvas.height;
    ctx.moveTo(startX, startY);

    do {
        // Der Körper
        ctx.lineTo(startX + sx, startY);
        ctx.lineTo(startX + sx, startY + sy);
        ctx.lineTo(startX + step, startY + sy);
        ctx.lineTo(startX + step, startY + step);

        // Inkrement
        sx -= step*2;
        sy -= step*2;
        startX = startX + step;
        startY = startY + step;
    } while (sx > canvas.width * s / 4)


    ctx.stroke();
}

