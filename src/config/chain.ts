import Web3 from 'web3';

// 网络配置
const ChainConfig: ChainConfig = {
    '56': {
        chainId: Web3.utils.numberToHex(56), // 目标链ID
        chainName: 'BNB Smart Chain Mainnet', // 网络名称
        nativeCurrency: {
            name: 'bnb',
            symbol: 'bnb',
            decimals: 18, // 小数点
        },
        rpcUrls: ['https://bsc-dataseed.binance.org'], // 节点RPC
        blockExplorerUrls: ['https://bscscan.com/'], // 官方浏览器
    },
};

export default ChainConfig;