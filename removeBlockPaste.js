const websites = ["huawei", "acesso"];

const disableEvents = (event) => {
  const pageTitle = document.title.toLowerCase();

  const pw = document.getElementById("userpassword_ctrl");
  if (pw) {
    pw.type = "text";
  }

  if (websites.some(site => pageTitle.includes(site))) {
    event.stopImmediatePropagation();
  }
};

document.addEventListener("paste", disableEvents, true);
