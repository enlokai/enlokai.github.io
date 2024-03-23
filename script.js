document.addEventListener("DOMContentLoaded", function() {
    const outputs = document.querySelectorAll('.output');
    const prompts = document.querySelectorAll('.prompt');
    const texts = [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    ];

    let currentLine = 0; // Variable to keep track of the current line being typed

    typeLinesSequentially(0);

    function typeLinesSequentially(index) {
        if (index < outputs.length) {
            typeWriter(outputs[index], texts[index], 0, () => {
                // Show the next prompt if available
                if (index + 1 < prompts.length) {
                    prompts[index + 1].style.display = 'inline';
                }
                typeLinesSequentially(index + 1);
            });
        }
    }

    function typeWriter(element, text, index, callback) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(() => typeWriter(element, text, index, callback), 10); // Random typing speed
        } else {
            // Typing finished, execute callback
            if (callback) {
                callback();
            }
        }
    }

    // Hide all prompts initially except the first one
    for (let i = 1; i < prompts.length; i++) {
        prompts[i].style.display = 'none';
    }
});
