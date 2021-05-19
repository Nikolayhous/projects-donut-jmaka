(() => {
    const refs = {
    openModalBtn: document.querySelector('[data-menu-modal-open]'),
    closeModalBtn: document.querySelector('[data-menu-modal-close]'),
        modal: document.querySelector('[data-menu-modal]'),
    mobileMenu:document.querySelector('.menu')
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    refs.mobileMenu.addEventListener('click', closeModal);

    function toggleModal() {
        document.body.classList.toggle("menu-modal-open");
    refs.modal.classList.toggle('is-hidden');
    }
    function closeModal() {
        document.body.classList.toggle("menu-modal-open");
    refs.modal.classList.add('is-hidden');
    }
})();