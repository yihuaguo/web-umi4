interface MessageOpen {
  (
    type: "success" | "error" | "info" | "warning",
    content: string,
    duration: number
  ): void;
}
