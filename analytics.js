document.addEventListener('DOMContentLoaded', () => {
    const calcBtn = document.getElementById('calc-btn');
    const resultBox = document.getElementById('calc-result');

    calcBtn.addEventListener('click', () => {
        const frames = parseInt(document.getElementById('calc-frames').value);
        const spf = parseInt(document.getElementById('calc-spf').value);

        if (isNaN(frames) || isNaN(spf)) {
            resultBox.innerHTML = `<span style="color: #ef4444;">Please enter valid numbers.</span>`;
            resultBox.style.display = 'block';
            return;
        }

        const totalSeconds = frames * spf;
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);

        resultBox.innerHTML = `Estimated Render Time: <br><strong>${hours} hours and ${minutes} minutes</strong>`;
        resultBox.style.display = 'block';
    });
});
