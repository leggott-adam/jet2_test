var modalTargets = document.getElementsByClassName('target'),
modalBtns = document.querySelectorAll('button.modal-activate');

function openModal(btnRef) {
    var modContent = document.querySelector('#' + btnRef).innerHTML;
    document.querySelector('.content-inner').innerHTML = modContent;
    for (var i = 0; i < modalTargets.length; i++) {
        modalTargets[i].classList.add('modal--status-is-visible');
    };
}

function closeModal() {
    for (var i = 0; i < modalTargets.length; i++) {
        modalTargets[i].classList.remove('modal--status-is-visible');
    };
}

for (var i = 0; i < modalBtns.length; i++) {
    modalBtns[i].addEventListener('click', function(event) {
        var btnType = event.target.dataset.btnType;
        openModal(btnType);
    });
}

document.addEventListener('click', function(event) {
    if (event.target.matches('.close-modal')) {
        closeModal();
    };
});