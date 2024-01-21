let no = 3;
const arr = [1, 2, 3, 4];

const reperatEle = (no, arr) => {
  let num = no;
  const list = arr.map((item) => {
    while (num > 0) {
      console.log(item);
      num--;
    }
    num = no;
  });
};

reperatEle(no, arr);
