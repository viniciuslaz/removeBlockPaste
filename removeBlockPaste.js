window.onload = function () {
    let namePage = document.title;

    disableEvents = (event => {
        if (namePage.includes('HUAWEI')) {
            event.stopImmediatePropagation();
        }
    });
    document.addEventListener('paste', disableEvents, true);

    if (namePage.includes("Iniciar sessão")) {
        let credenciais = document.getElementById("errmsg").innerText;
        document.getElementById("username").value = "admin"

        if(credenciais != "Credenciais inválidas"){
            document.getElementById("password").value = "210802ac"
            document.querySelector("[type=submit]").click();
        }
    }
}