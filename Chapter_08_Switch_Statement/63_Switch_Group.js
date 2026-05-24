let browser = "Firefox";

switch (browser) {
    case "Chrome":
    case "Edge":
    case "Brave":
    case "Opera":
        console.log("Chromium Project!")
        break;
    case "Firefox":
        console.log("Mozilla Project!");
        break;
    case "Safari":
        console.log("Apple Browser - Uses JavaScript Core Engine");
        break;
    default:
        console.log("Unknown Browser - Manual Testing needed");
}