interface Item {
  text: string;
  imagePath: string;
}

interface Base {
  nextIndex: () => void;
}

interface Login extends Base {}
interface Options extends Base {}
