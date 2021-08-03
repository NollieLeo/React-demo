export default function randomHexColor() {
  return "#" + ("0000" + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
}