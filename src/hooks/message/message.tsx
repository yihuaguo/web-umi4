import { message } from "antd";
import styles from "./message.less";

const useMessage = () => {
  const open: MessageOpen = (
    type = "success",
    content = "",
    duration = 3000
  ) => {
    message.open({
      type,
      content,
      duration,
      className: styles.messageContainer,
    });
  };

  return { open };
};

export default useMessage;
