document.querySelectorAll(".download-btn").forEach((el) => {
  el.addEventListener("click", (e) => {
    download("./Osama_Soliman_Resume.pdf", "Osama_Soliman_Resume.pdf");
  });
});

function download(url, filename) {
  fetch(url).then(function (t) {
    return t.blob().then((b) => {
      var a = document.createElement("a");
      a.href = URL.createObjectURL(b);
      a.setAttribute("download", filename);
      a.click();
    });
  });
}
