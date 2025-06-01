export function caesarCipher(str, s) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.toUpperCase(str[i])) {
      // for uppercase letters
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65);
      result += ch;
    } else {
      // for lowercase letters
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26) + 97);
      result += ch;
    }
  }
  return result;
}
