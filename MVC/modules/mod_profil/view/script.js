document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('myModal');
    var btn = document.getElementById('openModal');
    var closeBtn = document.getElementById('closeModal');
    var messagesModal = document.getElementById('messagesPopup'); // Le modal pour les messages
    var closeBtnMessages = messagesModal.querySelector('.close'); // Bouton de fermeture pour les messages
    var icon = document.querySelector('.icon'); // Sélectionne l'icône
  
    btn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });

    icon.addEventListener('click', function() {
      messagesModal.style.display = 'block'; // Affiche le pop-up des messages
  });

   closeBtnMessages.addEventListener('click', function() {
    messagesModal.style.display = 'none';
});
  
    window.addEventListener('click', function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      } else if (event.target == messagesModal) {
        messagesModal.style.display = 'none';
    }
    });
  });
  