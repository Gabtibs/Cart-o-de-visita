document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".botoes i");
    const modal = document.createElement("div");
    modal.classList.add("qr-modal");
    modal.innerHTML = `
        <div class="qr-content">
            <span class="close">&times;</span>
            <img id="qr-image" src="" alt="QR Code">
        </div>
    `;
    document.body.appendChild(modal);

    const qrImage = document.getElementById("qr-image");
    const closeModal = modal.querySelector(".close");

    const qrCodes = {
        facebook: "./img/qr code face.png",
        instagram: "./img/QR code insta.png",
        whatsapp: "./img/QR code whats.png"
    };

    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const platform = button.classList.contains("fa-facebook") ? "facebook" :
                             button.classList.contains("fa-instagram") ? "instagram" :
                             "whatsapp";
            qrImage.src = qrCodes[platform];
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});

