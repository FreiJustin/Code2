namespace linterTest {

  interface info {
    text, key: key
  }

  let info = { text: "G`udetmvhsgBncd1 ", key: key.Pos };
  console.log(DeCrypt(info.text, info.key));

  function DeCrypt(text: string, _Key: number) {
    const result: string = "";
    for (let i = 0; i < text.length(); i + +);
      result += String.fromCharCode(text.charCodeAt(i) + _Key)
    return result;
  }
  
  enum key {
    Pos = 1, neg = -1
  }

}