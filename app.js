const pessoa = pegaNomeDaUrl()

const nome = document.getElementById("nome");
const profissao = document.getElementById("profissao");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const imgurl = document.getElementById("imgurl");

const pessoas = {
    "Fabiola": {
        nome: "Fabiola Tiburcio",
        profissao: "Terapeuta TRG",
        telefone: "(15) 99759-2459",
        email: "fabiolavt@yahoo.com.br",
        facebook: "https://www.facebook.com/fabiola.vasconcellostiburcio",
        instagram: "https://www.instagram.com/fabitibs/",
        whatsapp: "https://wa.me/5515997592459",
        imgUrl: "./img/fabiola.jpg"
    },
    "Gabriel": {
        nome: "Gabriel Tiburcio",
        profissao: "Developer",
        telefone: "(15) 99688-3381",
        email: "gabrieltiburcio.dev@gmail.com",
        facebook: "https://www.facebook.com/profile.php?id=100004968769500",
        instagram: "https://www.instagram.com/gabtibs/",
        whatsapp: "https://wa.me/5515996883381",
        imgUrl: "./img/gabriel.jpg"
    },
    "Grazi": {
        nome: "Graziela Tiburcio",
        profissao: "Analista de venda de reservas",
        telefone: "(15) 99759-8558",
        email: "fabiolavt@yahoo.com.br",
        facebook: "https://www.facebook.com/grazi.tm",
        instagram: "https://www.instagram.com/grazitiburcio_/",
        whatsapp: "https://wa.me/5515997598558",
        imgUrl: "./img/grazi.jpg"
    }
}

const pessoaSelecionada = pessoas[pessoa]

nome.textContent = pessoaSelecionada.nome
profissao.textContent = pessoaSelecionada.profissao
telefone.textContent = pessoaSelecionada.telefone
email.textContent = pessoaSelecionada.email
imgurl.src = pessoaSelecionada.imgUrl


console.log(pessoaSelecionada)

console.log(pessoa)

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    const modal = document.createElement("div");
    modal.classList.add("qr-modal");
    modal.innerHTML = `
        <div class="bg-modal close"></div>
        <div id="qr-content"></div>
    `;
    document.body.appendChild(modal);

    const qrcode = new QRCode("qr-content", {
        text: "test.com",
        width: 150,
        height: 150,
        correctLevel : QRCode.CorrectLevel.H
    });

    const qrImage = document.getElementById("qr-image");
    const closeModal = modal.querySelector(".close");
    const qrCodes = {
        facebook: "./img/qrCodeFace.png",
        instagram: "./img/qrCodeInsta.png",
        whatsapp: "./img/qrCodeWhats.png"
    };


    buttons.forEach((button, index) => {
        button.addEventListener("click", function () {
            const platform = button.classList.contains("fa-facebook") ? "facebook" :
                             button.classList.contains("fa-instagram") ? "instagram" :
                             "whatsapp";
            qrcode.clear();
            qrcode.makeCode(pessoas[pessoa][platform]);
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });
});


function pegaNomeDaUrl ()  {
    var query = location.search.slice(1);
    var data = {};
    var chaveValor = query.split('=');
    var chave = chaveValor[0];
    var valor = chaveValor[1];
    data[chave] = valor;
    return data.pessoa
}