window.addEventListener("mousemove", function (dets) {
    document.documentElement.style.setProperty("--x", dets.clientX + "px");
    document.documentElement.style.setProperty("--y", dets.clientY + "px");
});
