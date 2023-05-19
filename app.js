//Your Google Drive Link for Resume
const docLink = 'https://docs.google.com/document/d/1d0zBLP8jK8cZZ7JJSNQUPyZcDRf2LUpbE1o9bLHm1sw'
const iframe = document.querySelector("iframe");
iframe.src = `https://docs.google.com/gview?url=${docLink}/export?format=pdf&embedded=true`;
document.querySelectorAll(".download-btn").forEach((el) => {
  el.addEventListener("click", (e) => {
    download(`${docLink}/export?format=pdf`);
  });
});

function download(url) {
  const a = document.createElement("a");
  a.href = url;
  a.download = "resume.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
