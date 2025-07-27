export const swalSuccessToast = ({
  title = "Success!",
  text = "Successfully done!",
  toast = true,
  timer= 2000,
  background = "#0f172a",
  color = "#fff",
  showConfirmButton = false,
})
  => {
  Swal.fire({
    icon: "success",
    title: "Accepted!",
    text: "User is now a tour guide.",
    toast: true,
    timer: 2000,
    background: "#0f172a",
    color: "#fff",
    showConfirmButton: false,
  });
};
