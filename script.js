let inputs = document.querySelectorAll('input');
inputs.forEach((input, index) => {
    input.addEventListener('keyup', (e) => {
        if (e.key !== "Backspace" && e.target.value.length > 0) {
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });
});