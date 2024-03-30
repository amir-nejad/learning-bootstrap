/*
    Bootstrap Modal
*/

$(document).ready(function () {
    const myModal = $('#myModal');
    if (myModal.length) {
        myModal.on('show.bs.modal', function (event) {
            // Button that triggered the modal
            const button = $(event.relatedTarget);
            // Extract info from data-bs-* attributes
            const myMessage = button.data('bs-whatever');
            // If necessary, you could initiate an Ajax request here
            // and then do the updating in a callback.

            // Update the modal's content.
            const modalBodyInput = myModal.find('.modal-body input');

            modalBodyInput.val(myMessage);
        });
    }
});


/*
    Modal Events
    Event	                |    Description
    hide.bs.modal	        |    Fired immediately when the modal is being hidden.
    hidden.bs.modal	        |    Fired when the modal has finished being hidden (waits for CSS transitions).
    hidePrevented.bs.modal  |	 Fired when modal showing is prevented due to static backdrop or click outside modal when keyboard option is disabled.
    show.bs.modal	        |    Fires immediately when the modal starts to show.
    shown.bs.modal	        |    Fired when the modal has been fully shown to the user (waits for CSS transitions).
*/


/*
    Bootstrap Toasts
*/

$(document).ready(function () {
    const toastTrigger = $('#myLiveToastBtn');
    const myToastLive = $('#myLiveToast');

    if (toastTrigger.length) {
        const toastBootstrap = new bootstrap.Toast(myToastLive[0]);
        toastTrigger.on('click', function () {
            toastBootstrap.show();
        });
    }
});
