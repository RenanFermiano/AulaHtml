function tratarErroVariavelNaoDefinida() {
    try {
        console.log(variavelNaoDefinida);
    } catch (erro) {
        console.log('Erro: A Variavel não está definida.', erro);
    }
}
tratarErroVariavelNaoDefinida();