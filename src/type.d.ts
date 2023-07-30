declare interface Window {
  ethereum: any;
  web3: any;
}

interface RenderTime {
  (
    year: "YYYY/MM/DD" | "MM/DD",
    time: "h:mm:ss" | "h:mm",
    stamp?: number | string | undefined
  ): string;
}

interface StorageUtil {
  /**
   * @function 设置(修改)localStorage
   * @param {string} key 键
   * @param {string} value 值
   * @return {void}
   */
  save: (key: string, value: any) => void;
  /**
   * @function 获取localStorage
   * @param {string} key 键
   * @return {any}
   */
  get: (key: string) => any;
  /**
   * @function 删除localStorage
   * @param {string} key 键
   * @return {any}
   */
  remove: (key: string) => void;
}

interface ContractError {
  code: number;
  message: string;
  stack: string;
}

interface AbiParams {
  name: string;
  type: string;
  indexed?: boolean;
}

interface Abi {
  constant?: boolean;
  inputs?: AbiParams[];
  name?: string;
  outputs?: AbiParams[];
  payable?: boolean;
  stateMutability?: string;
  type?: string;
  anonymous?: boolean;
}

interface ChainConfig {
  [propName: string]: {
    chainId: string;
    chainName: string;
    nativeCurrency: {
      name: string;
      symbol: string;
      decimals: number;
    };
    rpcUrls: [string];
    blockExplorerUrls: [string];
  };
}
