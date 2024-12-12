document.querySelectorAll('.expand-button').forEach(button => {
    button.addEventListener('click', () => {
        const hiddenContent = button.nextElementSibling;
        hiddenContent.style.display = hiddenContent.style.display === 'block' ? 'none' : 'block';
        button.textContent = hiddenContent.style.display === 'block' ? 'Read Less' : 'Read More';
    });
});

document.querySelectorAll('.question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
