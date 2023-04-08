function toastSuccess() {
  let toastSuccess = document.querySelector(".toast-success");
  toastSuccess.style = "display: flex";
  setTimeout(function () {
    toastSuccess.style = "display: none";
  }, 5000);
}

function toastError() {
  let toastError = document.querySelector(".toast-error");
  toastError.style = "display: flex";
  setTimeout(function () {
    toastError.style = "display: none";
  }, 5000);
}
