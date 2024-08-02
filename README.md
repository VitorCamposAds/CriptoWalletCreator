# Gerador de Carteira Bitcoin para Testnet

Este projeto contém um script Node.js que gera uma nova carteira Bitcoin para a testnet. O script utiliza as bibliotecas `bip39`, `bip32` e `bitcoinjs-lib` para criar e derivar uma carteira HD (Hierarchical Deterministic) para fins de teste.

## Funcionalidades

- **Geração de Frase Mnemônica**: Cria uma frase mnemônica de 12 palavras, que serve como base para gerar uma semente.
- **Conversão de Frase para Semente**: A frase mnemônica é convertida em uma semente criptográfica.
- **Criação da Árvore de Chaves HD**: A semente é usada para gerar uma árvore de chaves HD, seguindo o caminho padrão BIP44 para a testnet.
- **Derivação da Conta**: Deriva a conta a partir da árvore de chaves utilizando o caminho `m/49'/0'/0'/0`.
- **Geração de Endereço Bech32**: Gera um endereço Bitcoin no formato Bech32 (começa com 'tb' para a testnet) a partir da chave pública derivada.
- **Exibição dos Resultados**: Mostra a frase mnemônica, a semente gerada, o endereço Bech32 e a chave privada em formato WIF.

## Bibliotecas Utilizadas

- **`bip39`**: Para gerar e converter frases mnemônicas.
- **`bip32`**: Para criar e derivar chaves HD.
- **`bitcoinjs-lib`**: Para criar e manipular endereços Bitcoin.

## Como Usar

1. Clone o repositório:
    ```bash
    git clone <URL do repositório>
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd <diretório do projeto>
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute o script:
    ```bash
    node createWallet.js
    ```

## Notas

- O script está configurado para a rede de teste (testnet). Para gerar carteiras para a mainnet, altere a configuração da rede em `bitcoin.networks.testnet` para `bitcoin.networks.mainnet`.
- Utilize o endereço Bech32 gerado para interagir com faucets e exploradores de testnet compatíveis.

## Contribuições

Se você encontrar erros ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.
