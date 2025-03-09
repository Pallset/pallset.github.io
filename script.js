document.addEventListener("DOMContentLoaded", function () {
    const text = [
        "Halo, Nama Saya PallxMods.",
        "Saya Suka Membuat Project Kecil.",
        "Saya Suka Membagikan Project Saya Dengan Gratis.",
        "Di Channel Telegram @SharingScript."
    ];

    let lineIndex = 0;
    let charIndex = 0;
    const typingContainer = document.getElementById("typing-text");

    function typeWriter() {
        if (charIndex < text[lineIndex].length) {
            typingContainer.innerHTML += text[lineIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, 50);
        } else {
            charIndex = 0;
            lineIndex++;

            if (lineIndex < text.length) {
                typingContainer.innerHTML += "<br>"; // Tambah baris baru buat lanjut ngetik
                setTimeout(typeWriter, 500);
            } else {
                setTimeout(() => {
                    typingContainer.innerHTML = ""; // Hapus semua teks buat looping ulang
                    lineIndex = 0;
                    setTimeout(typeWriter, 500);
                }, 2000);
            }
        }
    }

    typeWriter();
});
