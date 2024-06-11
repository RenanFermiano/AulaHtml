function tratarErroAcessandoPropriedadeNull() {
    try {
        const objeto = null;
        console.log(objeto.propriedade);
    } catch (erro) {
        console.log('Ocorreu um erro:', erro);
    }
}
tratarErroAcessandoPropriedadeNull();