export default function initReverseChat(enable: boolean) {
  const container = document.querySelector(
    `section[class*=live_container]`
  ) as HTMLDivElement;
  if (!container) return;
  if (enable) {
    container.style.flexDirection = "row-reverse";
  } else {
    container.style.flexDirection = "row";
  }
}
