// Script para marcar se assistiu ou não a série
document.querySelectorAll('.watched-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            alert('Você marcou que assistiu!');
        } else {
            alert('Você desmarcou como assistido!');
        }
    });
});
