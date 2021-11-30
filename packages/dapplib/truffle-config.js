require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict person forget turn ship riot pizza smooth coin entire sure tattoo'; 
let testAccounts = [
"0xcd8252ad649f63ab71c468387ddf9e5e3430f3787dae57043e029a0aeeecf303",
"0xf9f74225171bc8e4eedc3c88cae23b81c568b60d614cb05f7cf4f43f14b0b5eb",
"0x5d1b770c6f9a2d575629411e73c7e820716887651626e9c47d5bfd56de0bb8e2",
"0xdb93b3db524673fc3301c9d426fcae7d6ec36fe447e17935447d217fb12e1976",
"0x197d35cf264de2595a13176729acc83874cdfbf1deaac17fd7139203a73739cd",
"0x41d3ee3cb7554df1ccba66c609a1de0b2fc1902fce7f308afd07ff15bd7d308d",
"0xffb367b20e9d82dcc05908c4caae7f297ad7bac32496b05b3d851add6fdc0d7a",
"0x0fb2237eac3a07a317c04c132ea523498ecb2a115998769693c0d39c18c2d212",
"0xff2e1e65b0f2b1b26d1035b26673f5fba272b671a3258ed094bb96e287ea254b",
"0xe32a0d01315b16d5d7dec185bf3ac47ce5302ed2f611569767eb853cbf98b7ea"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

