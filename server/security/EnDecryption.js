// Includes crypto module 
var crypto = require('crypto');

// 난수를 위장한 0~f str 생성
exports.randStr = () =>{
    var buffer = crypto.randomBytes(4);
    //console.log("buffer : ",buffer);

    var bufferhex=buffer.toString('hex')
    //console.log("buffer string : ",bufferhex);

    //var buffersubstr = bufferhex.substr(2,4);
    //console.log("buffer hex substr : ",buffersubstr);
    return bufferhex.substr(2,4);
}

//md5
exports.md5 = string => {
    return crypto.createHash('md5').update(string).digest('hex');
}

//sha256_hex
exports.sha256_hex = string => {
    return crypto.createHash('sha256').update(string).digest('hex');
}

//sha256_base64
exports.sha256_base64 = string => {
    return crypto.createHash('sha256').update(string).digest('base64');
}

//sign up, create salt
exports.first_pbkdf2 = string => {
    var buffer =crypto.randomBytes(4);
    return { salt : buffer.toString('base64') ,data : crypto.pbkdf2Sync(string, buffer.toString('base64'), 1000, 16, 'sha256') };
}

//sign in
exports.pdkdf2 = (salt,string) => {
    return crypto.pbkdf2Sync(string, salt, 1000, 16 , 'sha256').toString('base64');
}


// Node.js program to demonstrate the      
// crypto.createDecipheriv() method 
  
// Difining algorithm 
const algorithm = 'seed-cbc'; 
  
// Defining key 
const key = "1234567891234567"
  
// Defining iv 
const iv = "1234567891234567" 
  
// An encrypt function 
exports.encrypt = (text) => { 
  
 // Creating Cipheriv with its parameter 
 let cipher =  crypto.createCipheriv('seed-cbc', Buffer.from(key), iv); 
  
 // Updating text 
 let encrypted = cipher.update(text); 
  
 // Using concatenation 
 encrypted = Buffer.concat([encrypted, cipher.final()]); 
  
 // Returning iv and encrypted data 
 return { iv: iv.toString('hex'), 
     encryptedData: encrypted.toString('base64') }; 
} 
  
// A decrypt function 
exports.decrypt = (text) => { 
  
 //let iv = Buffer.from(text.iv, 'hex'); 
 let encryptedText = 
    Buffer.from(text, 'base64'); 
  
 // Creating Decipher 
 let decipher = crypto.createDecipheriv( 
    'seed-cbc', Buffer.from(key), iv); 
  
 // Updating encrypted text 
 let decrypted = decipher.update(encryptedText); 
 decrypted = Buffer.concat([decrypted, decipher.final()]); 
  
 // returns data after decryption 
 return decrypted.toString(); 
} 
exports.SMS_HMAC = (_method, _url, _timestamp, _accessKey, _secretKey) => {
    var space = " ";				                        // one space
	var newLine = "\n";				                        // new line
	var method = _method;				                    // method
	var url = _url;                                        	// url (include query string)
	var timestamp = _timestamp;			                    // current timestamp (epoch)
	var accessKey = _accessKey;			                    // access key id (from portal or Sub Account)
	var secretKey = _secretKey;                 			// secret key (from portal or Sub Account)

    // 암호화 객체 생성, sha256 알고리즘 선택
    var hmac = crypto.createHmac('sha256', secretKey);
 
    hmac.update(method);
	hmac.update(space);
	hmac.update(url);
	hmac.update(newLine);
	hmac.update(timestamp);
	hmac.update(newLine);
	hmac.update(accessKey);

    // 암호화할 본문 생성
    //timestamp = new Date().getTime();
    //var message = new Buffer.from(payload + timestamp).toString('base64');
 
    //hmac.write(message);
    hmac.end();
 
    return hmac.read();
}
{/* 
// Encrypts output 
var output = encrypt("GeeksforGeeks"); 
console.log(output); 
  
// Decrypts output 
console.log(decrypt(output)); 
*/}