const canvas1 = document.querySelector("#canvas1");
const contexto1 = canvas1.getContext("2d");

contexto1.strokeStyle = "blue";
contexto1.lineWidth = 2;

contexto1.strokeRect(
    1,
    1,
    canvas1.width - 2,
    canvas1.height - 2
);


const canvas2 = document.querySelector("#canvas2");
const contexto2 = canvas2.getContext("2d");

contexto2.strokeStyle = "blue";
contexto2.lineWidth = 2;

contexto2.strokeRect(
    1,
    1,
    canvas2.width - 2,
    canvas2.height - 2
);

const larguraInterna2 = canvas2.width - 4;
const alturaInterna2 = canvas2.height - 4;

const largura40 = larguraInterna2 * 0.40;

contexto2.fillStyle = "blue";

contexto2.fillRect(
    2,
    2,
    largura40,
    alturaInterna2
);


const canvas3 = document.querySelector("#canvas3");
const contexto3 = canvas3.getContext("2d");

const progresso = document.querySelector("#progresso");

function desenharBarra() {
    contexto3.clearRect(
        0,
        0,
        canvas3.width,
        canvas3.height
    );

    contexto3.strokeStyle = "blue";
    contexto3.lineWidth = 2;

    contexto3.strokeRect(
        1,
        1,
        canvas3.width - 2,
        canvas3.height - 2
    );

    const valor = progresso.value;

    const larguraInterna = canvas3.width - 4;
    const alturaInterna = canvas3.height - 4;

    const largura = larguraInterna * valor / 100;

    contexto3.fillStyle = "blue";

    contexto3.fillRect(
        2,
        2,
        largura,
        alturaInterna
    );
}

desenharBarra();

progresso.addEventListener(
    "input",
    desenharBarra
);


const canvasJapao = document.querySelector("#japao");
const contextoJapao = canvasJapao.getContext("2d");

contextoJapao.fillStyle = "white";

contextoJapao.fillRect(
    0,
    0,
    60,
    60
);

contextoJapao.fillStyle = "red";

contextoJapao.beginPath();

contextoJapao.arc(
    30,
    30,
    12,
    0,
    Math.PI * 2
);

contextoJapao.fill();


const canvasItalia = document.querySelector("#italia");
const contextoItalia = canvasItalia.getContext("2d");

contextoItalia.fillStyle = "green";

contextoItalia.fillRect(
    0,
    0,
    20,
    60
);

contextoItalia.fillStyle = "white";

contextoItalia.fillRect(
    20,
    0,
    20,
    60
);

contextoItalia.fillStyle = "red";

contextoItalia.fillRect(
    40,
    0,
    20,
    60
);


const canvasPolonia = document.querySelector("#polonia");
const contextoPolonia = canvasPolonia.getContext("2d");

contextoPolonia.fillStyle = "white";

contextoPolonia.fillRect(
    0,
    0,
    60,
    30
);

contextoPolonia.fillStyle = "red";

contextoPolonia.fillRect(
    0,
    30,
    60,
    30
);


const canvasUruguai = document.querySelector("#uruguai");
const contextoUruguai = canvasUruguai.getContext("2d");

contextoUruguai.fillStyle = "white";

contextoUruguai.fillRect(
    0,
    0,
    60,
    60
);

contextoUruguai.fillStyle = "blue";

contextoUruguai.fillRect(
    0,
    7,
    60,
    7
);

contextoUruguai.fillRect(
    0,
    20,
    60,
    7
);

contextoUruguai.fillRect(
    0,
    33,
    60,
    7
);

contextoUruguai.fillRect(
    0,
    47,
    60,
    7
);

contextoUruguai.fillStyle = "white";

contextoUruguai.fillRect(
    0,
    0,
    27,
    33
);

contextoUruguai.fillStyle = "gold";

contextoUruguai.beginPath();

contextoUruguai.arc(
    13,
    15,
    7,
    0,
    Math.PI * 2
);

contextoUruguai.fill();


const canvasAlemanha = document.querySelector("#alemanha");
const contextoAlemanha = canvasAlemanha.getContext("2d");

contextoAlemanha.fillStyle = "black";

contextoAlemanha.fillRect(
    0,
    0,
    60,
    20
);

contextoAlemanha.fillStyle = "red";

contextoAlemanha.fillRect(
    0,
    20,
    60,
    20
);

contextoAlemanha.fillStyle = "gold";

contextoAlemanha.fillRect(
    0,
    40,
    60,
    20
);


const canvasFranca = document.querySelector("#franca");
const contextoFranca = canvasFranca.getContext("2d");

contextoFranca.fillStyle = "blue";

contextoFranca.fillRect(
    0,
    0,
    20,
    60
);

contextoFranca.fillStyle = "white";

contextoFranca.fillRect(
    20,
    0,
    20,
    60
);

contextoFranca.fillStyle = "red";

contextoFranca.fillRect(
    40,
    0,
    20,
    60
);


const canvas5 = document.querySelector("#canvas5");
const contexto5 = canvas5.getContext("2d");

contexto5.fillStyle = "lightblue";

contexto5.fillRect(
    100,
    180,
    200,
    150
);

contexto5.fillStyle = "#800020";

contexto5.beginPath();

contexto5.moveTo(
    80,
    180
);

contexto5.lineTo(
    200,
    80
);

contexto5.lineTo(
    320,
    180
);

contexto5.closePath();

contexto5.fill();

contexto5.fillStyle = "black";

contexto5.beginPath();

contexto5.arc(
    150,
    230,
    25,
    0,
    Math.PI * 2
);

contexto5.fill();

contexto5.fillStyle = "brown";

contexto5.fillRect(
    220,
    250,
    50,
    80
);