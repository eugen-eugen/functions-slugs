function drawASlug(canvasId) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(0, 255, 255)";
    ctx.fillRect(0, 0, 
                 canvas.width, canvas.height);
    ctx.strokeStyle = 'red';
    ctx.lineWidth = 5;
    ctx.beginPath();


    // Initialisierung
    var sx = canvas.width;
    var sy = canvas.height;
    var startX = 0;
    var startY = 0;
    ctx.moveTo(startX, startY);

    do {
        // Der Körper
        const step = 10;
        ctx.lineTo(startX + sx, startY);
        ctx.lineTo(startX + sx, startY + sy);
        ctx.lineTo(startX + step, startY + sy);
        ctx.lineTo(startX + step, startY + step);

        // Inkrement
        sx -= step*2;
        sy -= step*2;
        startX = startX + step;
        startY = startY + step;
    } while (sx > canvas.width  / 4)


    ctx.stroke();
}

