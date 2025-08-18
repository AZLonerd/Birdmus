const bar = document.querySelector(".progress-bar");

bar.style.setProperty("--progress", "30%")

const upload = document.querySelector(".upload.select")

upload.ondragenter = (e) => {
    e.preventDefault();
}

upload.ondragover = (e) => {
    e.preventDefault();
}

upload.ondrop = (e) => {
    e.preventDefault();
}


document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.querySelector('.inputbox');

    fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        const resultBox = document.querySelector('.upload-result');

        if (!file) {
            resultBox.textContent = '❌ No file selected.';
            return;
        }

        const fileName = file.name.toLowerCase();
        const isMp3 = fileName.endsWith('.mp3');
        const isAudio = file.type.startsWith('audio/');
        const maxSize = 10 * 1024 * 1024; // 10 MB

        if (!isMp3) {
            resultBox.textContent = '❌ File must have a .mp3 extension.';
            return;
        }

        if (!isAudio) {
            resultBox.textContent = '❌ File must be a valid audio file.';
            return;
        }

        if (file.size > maxSize) {
            resultBox.textContent = `❌ File too large. Max size is 10MB. Selected: ${(file.size / 1024 / 1024).toFixed(2)}MB`;
            return;
        }

        resultBox.textContent = `✅ Upload accepted: ${file.name}`;
    });

    document.getElementById('uploadBox').addEventListener('click', () => {
        fileInput.click();
    });
});
