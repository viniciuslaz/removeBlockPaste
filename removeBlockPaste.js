disableEvents = (event) => {
  let name = document.title;

  const pw = document.getElementById("userpassword_ctrl");
  if (pw) {
    pw.type = "text";
  }

  if (name.toLowerCase().includes("huawei")) {
    event.stopImmediatePropagation();
  }
};
document.addEventListener("paste", disableEvents, true);

document.onkeydown = (key) => {
  let name = document.title;
  if (name.toLowerCase().includes("huawei")) {
    const page = window.location.href;
    console.log(page.includes("internet"))
    if (page.includes("internet")) {
      const pw_internet = document.getElementById(
        "wan_internet_password_ctrl"
      )?.value;
      console.log(pw_internet);
    }

    const pw = document.getElementById("userpassword_ctrl");
    if (pw) {
      pw.type = "text";
    }
  }
};
