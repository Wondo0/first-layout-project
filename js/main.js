const mixer = mixitup('.directions__list', {
    animation: {
        enable: true
    }
}
);

document.addEventListener('DOMContentLoaded',
    function () {
        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', function () {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    });


new Splide('#splide1', {
    type: 'loop',
    pagination: false,
}).mount();

const splide = new Splide('#splide2', {
    type: 'loop',
    pagination: false,
}).mount();


const paginationButtons = document.querySelectorAll('.testimonials__pagination-button');

function updatePagination(activeIndex) {
    paginationButtons.forEach(function (button, index) {
        if (index === activeIndex) {
            button.classList.add('testimonials__pagination-button--active');
        } else {
            button.classList.remove('testimonials__pagination-button--active');
        }
    });
}


splide.on('move', function (newIndex) {
    updatePagination(newIndex);
});


paginationButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        splide.go(index);
    });
});


updatePagination(splide.index);


const coursemapButtons = document.querySelectorAll('.coursemap-button');

coursemapButtons.forEach(button => {
  button.addEventListener('click', () => {
    const lesson = button.closest('.lesson');
    if (!lesson) return;

    const description = lesson.querySelector('.lesson-description');
    const icon = button.querySelector('.button-icon');
    if (!description) return;

    const isVisible = description.style.contentVisibility === 'visible';
    description.style.contentVisibility = isVisible ? 'hidden' : 'visible';

    if (icon) {
      icon.src = isVisible ? 'images/icons/Plus.svg' : 'images/icons/Minus.svg';
    }
  });
});