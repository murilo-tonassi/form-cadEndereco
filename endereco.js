'use strict'; // ativa o  odo restrito
// Código para consumo de API da ViaCEP
// https://viacep.com.br/

// Limpar consulta do form já realizada
const limparFormulario = () =>{
 
    document.getElementById('Rua').value = '';
    document.getElementById('Bairro').value = '';
    document.getElementById('Cidade').value = '';
    document.getElementById('Estado').value = '';
    document.getElementById('Complemento').value = '';
    document.getElementById('CEP').value = '';
    document.getElementById('Número').value = '';n                                                                                                    
 
 
}
 
// Verifica se o CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
// Verifica o tamanho do CEP
const cepValido = (cep) => cep.length == 8 && eNumero(cep);
