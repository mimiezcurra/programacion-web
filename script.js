Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
});

const { value: text } = await Swal.fire({
  input: "textarea",
  inputLabel: "Message",
  inputPlaceholder: "Type your message here...",
  inputAttributes: {
      "aria-label": "Type your message here"
  },
  showCancelButton: true
});

if (text) {
  Swal.fire(text);
}
