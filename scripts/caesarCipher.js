export function caesarCipher(str, s) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char >= "A" && char <= "Z") {
      // for uppercase letters
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 65) % 26) + 65);
      result += ch;
    } else if (char >= "a" && char <= "z") {
      // for lowercase letters
      let ch = String.fromCharCode(((char.charCodeAt(0) + s - 97) % 26) + 97);
      result += ch;
    } else {
      // for all other characters that are not letters
      result += char;
    }
  }
  return result;
}
