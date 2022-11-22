function drawNxNslugs(canvasId, n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            drawASlug(canvasId, 1/n, i/n, j/n);
        }
    }
}