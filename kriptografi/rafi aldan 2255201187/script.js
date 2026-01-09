function charToNum(c){
  return c.toUpperCase().charCodeAt(0) - 64;
}
function numToChar(n){
  return String.fromCharCode(((n-1)%26)+65);
}

function caesar(text, key, enc=true){
  key = parseInt(key);
  let res = "";
  for(let c of text){
    if(/[a-z]/i.test(c)){
      let n = charToNum(c);
      n = enc ? n + key : n - key;
      let ch = numToChar(n);
      res += c === c.toLowerCase() ? ch.toLowerCase() : ch;
    } else res += c;
  }
  return res;
}

function vigenere(text, key, enc=true){
  key = key.toUpperCase();
  let res="", j=0;
  for(let c of text){
    if(/[a-z]/i.test(c)){
      let t = charToNum(c);
      let k = charToNum(key[j%key.length]);
      let n = enc ? t+k : t-k;
      let ch = numToChar(n);
      res += c===c.toLowerCase()?ch.toLowerCase():ch;
      j++;
    } else res+=c;
  }
  return res;
}

function encrypt(){
  process(true);
}
function decrypt(){
  process(false);
}

function process(enc){
  let m = method.value;
  let text = input.value;
  let k = key.value;
  if(m==="caesar") output.value = caesar(text,k,enc);
  if(m==="vigenere") output.value = vigenere(text,k,enc);
}
