export class RandomTimeout {
  val1!: string;
  val2!: string;

  randomOperations() {
    setTimeout(() => {
      this.val1 = 'ABC';
    }, Math.floor(Math.random() * 10000));

    setTimeout(() => {
      this.val2 = 'XYZ';
    }, Math.floor(Math.random() * 10000));
  }
}
