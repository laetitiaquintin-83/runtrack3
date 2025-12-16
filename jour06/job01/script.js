document.addEventListener('DOMContentLoaded', () => {

    // Interaction Bouton Papillon
    const papillonBtn = document.getElementById('btn-papillon');
    if (papillonBtn) {
        papillonBtn.addEventListener('click', () => {
            alert('Papillon commandé avec succès !');
        });
    }

    // Interaction Bouton Reboot
    const rebootBtn = document.querySelector('.btn-danger');
    if (rebootBtn) {
        rebootBtn.addEventListener('click', () => {
            let confirmReboot = confirm("Voulez-vous vraiment rebooter le Monde ?");
            if (confirmReboot) {
                alert("Le monde redémarre... Veuillez patienter.");
            }
        });
    }
});