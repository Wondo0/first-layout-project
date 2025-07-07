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

// Обновляем пагинацию при смене слайда
splide.on('move', function (newIndex) {
    updatePagination(newIndex);
});

// Кликабельность кнопок пагинации
paginationButtons.forEach(function (button, index) {
    button.addEventListener('click', function () {
        splide.go(index);
    });
});

// Устанавливаем активную кнопку при первоначальной загрузке
updatePagination(splide.index);