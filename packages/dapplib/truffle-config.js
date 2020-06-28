require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth stereo smile just credit frame genius'; 
let testAccounts = [
"0xd97a3b943efea06a3ca70a32b76d88011665552480562667c783449cb529ea6d",
"0xdbef3b95968e3af66befa8fdf2cdf67e8c15237a1f341f8448fcbc2c7d4b7bc3",
"0x1a36f5fdcffa219e098e7bef8688041adeab532b29e63f47507e5a48144a9370",
"0x7570ce4ce4caec57d735143dea0a772ed3bc00c2a614ad207db33ad987608d56",
"0x87f23b7ad00935864412ed2d7cd70dae225f01bdc063f558a0863285827729ed",
"0x3c83fb3ac5ef1621ecf51d6c5dd5fe8d325a9d82fdd8e95679cb9c00c90d0dd7",
"0x37555d673f8a346d149ad6206814b89b437a8db533320ee0461733831ff4029e",
"0xc97e7391167849439508c9eb05814db30ce3da7fa914839c7e56956ba1c7b003",
"0x03488024f11758653b1b4c614967c6a27c9158fd6fb77d3d2e19702c755c46f7",
"0x88f37bf9d94dad9dd36c12b8e56effcc12c8e82f45f17dd93614d8147507e48d"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
