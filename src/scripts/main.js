window.addEventListener('DOMContentLoaded', ()=> {
    let isTextSelected = false;
    function handleCardClick(e) {
        if (isTextSelected) {
            isTextSelected = false;
            return;
        }

        const isClickedOnName = e.target.closest('.card-header__name');
        const isClickedOnPrice = e.target.closest('.card-info__price');

        if (isClickedOnName || isClickedOnPrice) {
            return;
        }

        modalOpen('cardModal')
    }

    document.querySelectorAll('.card-header__name, .card-info__price').forEach(el => {
        el.addEventListener('mousedown', () => {
            isTextSelected = true;
        });
    });

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', handleCardClick);
    });

    function modalOpen(id) {
        document.querySelector('.modal-bg').classList.add('open');
        document.getElementById(id).classList.add('open');
        document.body.style.overflow = 'hidden';
    }

    function modalClose() {
        document.querySelector('.modal-bg').classList.remove('open');
        document.querySelector('.modal').classList.remove('open');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.js-close').forEach(btn => {
        btn.addEventListener('click', () => {
            modalClose()
        });
    });
})