let count = 0;
const output = document.querySelector("#count");
document.querySelector("#add").addEventListener("click", () => {
  count += 1;
  output.textContent = count;
});
//  test
