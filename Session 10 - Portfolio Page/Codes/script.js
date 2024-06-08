const myModal = document.getElementById('myModal');

if (myModal) {
    myModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract target id from data-bs-* attributes
        const projectId = button.getAttribute('data-bs-id')

        const projectCard = document.querySelector(projectId)

        if (projectCard) {
            const cardImage = projectCard.querySelector(".card-img-top");
            const cardTitle = projectCard.querySelector(".card-body .card-title");
            const cardText = projectCard.querySelector(".card-body .card-text");

            console.log(cardImage);
            console.log(cardText);

            // Update the modal's content.
            const modalTitle = myModal.querySelector('.modal-title');
            const modalBody = myModal.querySelector('.modal-body');

            modalTitle.textContent = `${cardTitle.innerText} Quick View`;
            modalBody.innerHTML = `${cardImage.outerHTML} <br/><br/> ${cardText.outerHTML}`;
        }
    })
}