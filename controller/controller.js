const Mensagem = require("../model/Mensagem");

const Controller = {

    //Método GET
    get: async(req, res) => {
        try {
            const getMensagem = await Mensagem.findAll();
            res.json(getMensagem);
        } catch(error) {
            res.json(error);
        }
    },

    post: async(req, res) => {
        try {
            const {nome, email, mensagem} = req.body;

            await Mensagem.create({
                nome,
                email,
                mensagem
            });

            res.json("Mensagem enviada com sucesso!");
        } catch(error) {
            res.json(error);
        }
    }
};

module.exports = Controller;    