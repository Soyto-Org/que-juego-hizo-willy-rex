document.addEventListener('DOMContentLoaded', () => {
    let score = 0
    const scoreElement = document.querySelectorAll('.score')[0];
    const actionElement = document.querySelectorAll('.action')[0];


    actionElement.addEventListener('click', () => {
        score += 1;

        scoreElement.textContent = score;

        if (actionElement.classList.value.includes('animate__rubberBand')) {
            actionElement.classList.remove('animate__rubberBand');

            setTimeout(() => actionElement.classList.add('animate__rubberBand'));
        }
        else {
            actionElement.classList.add('animate__rubberBand');
        }

        
    });
});