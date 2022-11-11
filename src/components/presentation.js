export const onRefresh = function () {
  let personName = prompt("Please, enter your name...");

  if (personName) {
    document.getElementById(
      "ciao"
    ).innerHTML = `Hi ${personName}, welcome on my CV!`;
  }
};
