export const WebApp = (window as any).Telegram.WebApp;

export const inTelegram = () => {
  return WebApp.platform !== "unknown";
};
