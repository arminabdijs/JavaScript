const title = document.getElementById("title");
const container = document.getElementById("container");

container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";
container.style.background =
  "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
container.style.fontFamily = "Inter, Arial, sans-serif";

title.style.padding = "24px 40px";
title.style.borderRadius = "16px";
title.style.background = "rgba(255, 255, 255, 0.15)";
title.style.color = "#ffffff";
title.style.fontSize = "2rem";
title.style.fontWeight = "600";
title.style.letterSpacing = "1px";
title.style.display = "flex";
title.style.justifyContent = "center";
title.style.alignItems = "center";
title.style.boxShadow = `
  0 8px 16px rgba(0, 0, 0, 0.25),
  0 16px 32px rgba(0, 0, 0, 0.25),
  inset 0 1px 1px rgba(255, 255, 255, 0.2)
`;
title.style.transition = "all 0.3s ease";



title.addEventListener("mouseenter", () => {
  title.style.transform = "scale(1.05)";
});

title.addEventListener("mouseleave", () => {
  title.style.transform = "scale(1)";
});
