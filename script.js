// Smooth Scroll to sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Modal Functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Chat Simulation
function openChat(modelName) {
    document.getElementById('chatName').innerText = "Chat with " + modelName;
    openModal('chatModal');
}

// Close modal if user clicks outside content
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}
