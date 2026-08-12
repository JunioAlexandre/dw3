//--arquivo: controller / calculadora.js

const hello = async (req, res) => {
    res.json({ status: "ok", mensagem: "Olá!" });
};

const helloUserGet = async (request, res) => {
    const username = request.params.nome;
    res.json({ status: "ok", nomeusuario: username });
};

const helloUserPost = async (request, res) => {
    const username = request.body.username || request.params.nome;
    res.json({ status: "ok", nomeusuario: username });
};

const somar = async (request, res) => {
    const { num1, num2 } = request.body;
    const valor1 = Number(num1);
    const valor2 = Number(num2);
    const resultado = valor1 + valor2;
    res.json({ status: "ok", resultado });
};

const subtrair = async (request, res) => {
    const { num1, num2 } = request.body;
    const valor1 = Number(num1);
    const valor2 = Number(num2);
    const resultado = valor1 - valor2;
    res.json({ status: "ok", resultado });
};

const multiplicar = async (request, res) => {
    const { num1, num2 } = request.body;
    const valor1 = Number(num1);
    const valor2 = Number(num2);
    const resultado = valor1 * valor2;
    res.json({ status: "ok", resultado });
};

const dividir = async (request, res) => {
    const { num1, num2 } = request.body;
    const valor1 = Number(num1);
    const valor2 = Number(num2);
    const resultado = valor1 / valor2;
    res.json({ status: "ok", resultado });
};

module.exports = {
    hello,
    helloUserGet,
    helloUserPost,
    somar,
    subtrair,
    multiplicar,
    dividir,
};