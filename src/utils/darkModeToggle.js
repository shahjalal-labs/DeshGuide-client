// utils/darkModeToggle.js
export const toggleColorInversion = () => {
  const styleId = "__color_inversion";
  const existingStyle = document.getElementById(styleId);

  if (!existingStyle) {
    const style = document.createElement("style");
    style.id = styleId;
    style.innerHTML = `
      html {
        filter: invert(1) hue-rotate(180deg) !important;
        background: white !important;
      }
      img, video, .no-invert {
        filter: invert(1) hue-rotate(180deg) !important;
      }
    `;
    document.head.appendChild(style);
    return true; // Inverted
  } else {
    existingStyle.remove();
    return false; // Normal
  }
};
