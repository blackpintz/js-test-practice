const ceaserCipher = (str, shift) => {
  if (shift < 0) str;

  let output = '';

  for (let i = 0; i < str.length; i++) {
    let strChar = str[i];

    if (strChar.match(/[a-z]/i)) {
      const code = str.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        strChar = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        strChar = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    output += strChar;
  }

  return output;
};

module.exports = ceaserCipher;