import {
  FormattedMessage,
  Link,
  Outlet,
  getLocale,
  setLocale,
  useIntl,
} from "umi";
import styles from "./index.less";
import { Button, message } from "antd";
import { useEffect } from "react";
import DefaultContractMethod from "@/web3/utils";
import useMessage from "@/hooks/message/message";
import moment from "moment";
import { renderTime } from "@/utils/utils";

export const Layout = () => {
  const base = new DefaultContractMethod();
  const intl = useIntl();
  const locale = getLocale();
  const { open } = useMessage();

  const connectWallet = async () => {
    try {
      const address = await base.getWalletAddress();
      // message.success(intl.formatMessage({ id: 'tips.linkWallet.suc' }))
      console.log("address", address);
    } catch (e) {
      message.error(intl.formatMessage({ id: "tips.linkWallet.err" }));
    }
  };

  const setWalletChainID = async (chainID: number) => {
    try {
      await base.setChainID(chainID);
      // message.success(intl.formatMessage({ id: 'tips.setWalletChainID.suc' }))
    } catch (e) {
      message.error(intl.formatMessage({ id: "tips.setWalletChainID.err" }));
    }
  };

  useEffect(() => {
    connectWallet();
    setWalletChainID(1);
  }, []);

  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">{intl.formatMessage({ id: "layout.route1" })}</Link>
        </li>
        <li>
          <Link to="/docs">
            <FormattedMessage id="layout.route2" />
          </Link>
        </li>
      </ul>
      <Button onClick={() => setLocale(locale === "zh-CN" ? "en-US" : "zh-CN")}>
        change
      </Button>
      <Button
        onClick={() => {
          // open("success", "成功", 5000);
          console.log("-", renderTime("YYYY/MM/DD", "h:mm:ss", 1690718008));
        }}
      >
        show
      </Button>
      <Outlet />
    </div>
  );
};

export default Layout;
