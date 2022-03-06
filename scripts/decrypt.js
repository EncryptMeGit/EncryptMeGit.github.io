export function decryptFunc(numString) {
    var numbers = [
        "1", "2", "3", "4", "5",
        "6", "7", "8", "9", "0"
    ];
    var decrypted = "";
    for (var i = 0; i < parseInt(numString.length); i++) {
        for (var v = 0; v < parseInt(numbers.length); v++) {
            if (numString.charAt(i) == numbers[v]) {
                decrypted += numbers[v];
            }
        }
    }
    return [numString, decrypted];
}