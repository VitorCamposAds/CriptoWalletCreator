console.log('Início do script');

// Importando as bibliotecas
const bip39 = require('bip39');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');

// Definir a rede
const network = bitcoin.networks.testnet; // Para mainnet, use bitcoin.networks.mainnet
console.log('Rede definida:', network);

// Derivação de carteiras HD
const path = "m/49'/0'/0'/0";

// Gerar uma frase mnemônica
const mnemonic = bip39.generateMnemonic();
console.log('Mnemonic:', mnemonic);

// Converter a frase mnemônica para uma semente
const seed = bip39.mnemonicToSeedSync(mnemonic);
console.log('Seed gerada');

// Criar uma árvore de chaves a partir da semente
const root = bip32.fromSeed(seed, network);
console.log('Árvore de chaves criada');

// Criando uma conta - par de private key e public key
const account = root.derivePath(path);
console.log('Conta derivada');

// Gerar o endereço Bitcoin a partir da chave pública usando Bech32
const bech32Address = bitcoin.payments.p2wpkh({
    pubkey: account.publicKey,
    network: network,
}).address;

// Exibir os resultados
console.log("Carteira gerada!");
console.log("Endereço Bech32:", bech32Address);
console.log("Chave privada:", account.toWIF());
console.log("Seed:", mnemonic);