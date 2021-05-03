function printFirst() {
  console.log("print first");
}

function printSecond(printFirst) {
  printFirst();
  console.log("print second");
}

printSecond(printFirst);
