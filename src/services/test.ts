import { request } from "umi";

export const user = async () => {
  return await request("/api/users");
};

export default {
  user,
};
