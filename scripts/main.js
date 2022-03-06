import * as encrypt from './encrypt.js';
import * as decrypt from './decrypt.js';

document.getElementById('ENCRYPT').addEventListener("click", () => {
    var i = 0;
    var interval = setInterval(() => {
        if (i >= 20) {
            console.log("ALMOST DONE");
            var add = document.createElement('p');
            add.innerHTML = "ALMOST DONE";
            document.getElementById("console").appendChild(add);
            var elem = document.getElementById('console');
            elem.scrollTop = elem.scrollHeight;
            setTimeout(() => {
                var test = encrypt.encryptFunc(document.getElementById('Entext').value);
                console.warn("ENCRYPTED: " + test[1]);
                var add = document.createElement('p');
                add.innerHTML = ("DECRYPTED: " + test[1]);
                document.getElementById("console").appendChild(add);
                var elem = document.getElementById('console');
                elem.scrollTop = elem.scrollHeight;
            }, 1000)
            clearInterval(interval);
        } else {
            i++;
            console.log(".");
            var add = document.createElement('p');
            add.innerHTML = ".";
            document.getElementById("console").appendChild(add);
            var elem = document.getElementById('console');
            elem.scrollTop = elem.scrollHeight;
        }
    }, 125)
})
document.getElementById('DECRYPT').addEventListener("click", () => {
    var i = 0;
    var interval = setInterval(() => {
        if (i >= 20) {
            console.log("ALMOST DONE");
            var add = document.createElement('p');
            add.innerHTML = "ALMOST DONE";
            document.getElementById("console").appendChild(add);
            var elem = document.getElementById('console');
            elem.scrollTop = elem.scrollHeight;
            setTimeout(() => {
                var test = decrypt.decryptFunc(document.getElementById('Entext').value);
                console.warn("DECRYPTED: " + test[1]);
                var add = document.createElement('p');
                add.innerHTML = ("DECRYPTED: " + test[1]);
                document.getElementById("console").appendChild(add);
                var elem = document.getElementById('console');
                elem.scrollTop = elem.scrollHeight;
            }, 1000)
            clearInterval(interval);
        } else {
            i++;
            console.log(".");
            var add = document.createElement('p');
            add.innerHTML = ".";
            document.getElementById("console").appendChild(add);
            var elem = document.getElementById('console');
            elem.scrollTop = elem.scrollHeight;
        }
    }, 125)
})