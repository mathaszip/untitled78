function chess() {
    let x = document.querySelector("#x").value;
    let y = document.querySelector("#y").value;

    let message = document.querySelector("#message");

    let output = "";

    for (let i = 1; i <= y; i++) {

        if (i % 2 !== 0) {
            for (let k = 1; k <= x; k++) {
                if (k % 2 === 0) {
                    output += "#";
                }
                else {
                    output += "&nbsp; &nbsp;";
                }
            }
        }
        else {
            for (let j = 1; j <= x; j++) {
                if (j % 2 === 0) {
                    output += "&nbsp; &nbsp;";
                }
                else {
                    output += "#";
                }
            }
        }
        output += "<br/>";
    }

    message.innerHTML = output;
}