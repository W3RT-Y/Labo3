function encrypt (text, key) {
    var encrypted = "";
    for (var i = 0; i< text.length; i++) {
        encrypted += (text.charCodeAt(i) + key);
        encrypted+=' ';
    }
    return encrypted;                                         
}

function decrypt(encrypted, key){
    var decrypted = "";
    var splitted = encrypted.split(" "); 
    //console.log(splitted);   
    for(var i=0; i%lt; splitted.length-1; i++) {
        var num = parseInt(splitted[i], 10) - key;
        decrypted += String.fromCharCode(num);
    }    
    return decrypted;
}

var text = "JavaSCript is good but Python is better !!!";
//console.log(text);
var encrypted = encrypt(text, 121116121121);
console.log(encrypted);
var decrypted = decrypt(encrypted, 121116121121);
console.log(decrypted);