import Web3 from "web3";
import ChainConfig from "@/config/chain";

// 通用钱包方法
class BaseContractMethod {
  web3 = window.ethereum && new Web3(window.ethereum);
  static instance: any = null;

  static getInstance() {
    if (!BaseContractMethod.instance) {
      BaseContractMethod.instance = new BaseContractMethod();
    }
    return BaseContractMethod.instance;
  }

  // 是否安装钱包
  hasWallet = (): boolean => Boolean(this.web3);

  // 错误抛出
  throwErrMessage = (e: ContractError | any) => {
    console.log("error", e?.message || "");
    throw new Error(e);
  };

  // 获取钱包地址
  getWalletAddress = async (): Promise<string> => {
    if (!this.hasWallet()) this.throwErrMessage("error");
    try {
      const address =
        (
          await window.ethereum.request({ method: "eth_requestAccounts" })
        )?.[0] || "";
      if (!address) throw new Error("error");
      return address;
    } catch (e: ContractError | any) {
      return this.throwErrMessage(e);
    }
  };

  // 获取当前网络ChainID
  getChainID = async (): Promise<number> => {
    if (!this.hasWallet()) this.throwErrMessage("error");
    try {
      return await this.web3?.utils?.hexToNumber(window.ethereum?.chainId);
    } catch (e: ContractError | any) {
      return this.throwErrMessage(e);
    }
  };

  // 切换网络ChainID
  setChainID = async (chainId: number): Promise<void> => {
    if (!this.hasWallet() || !chainId) this.throwErrMessage("error");
    try {
      const currentChainId: number = await this.getChainID();
      if (chainId === currentChainId) return;
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: this.web3.utils.numberToHex(chainId) }],
        });
      } catch (e: ContractError | any) {
        if (e.code === 4902) {
          try {
            // 当前钱包没有该网络，需要新增该网络
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [ChainConfig[chainId]],
            });
          } catch (e: ContractError | any) {
            this.throwErrMessage(e);
          }
        } else {
          this.throwErrMessage(e);
        }
      }
    } catch (e: ContractError | any) {
      this.throwErrMessage(e);
    }
  };
}

export default BaseContractMethod;
