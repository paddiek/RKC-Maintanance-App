const form = document.getElementById('complaintForm');
const successMessage = document.getElementById('successMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    // Send data to Netlify
    try {
        await fetch("/", {
            method: "POST",
            body: formData,
        });
        
        // Show success
        form.classList.add('hidden');
        successMessage.classList.remove('hidden');
        document.getElementById('refId').innerText = Math.floor(Math.random() * 10000);
        
    } catch (error) {
        alert("Submission failed. Please check your internet connection.");
    }
});