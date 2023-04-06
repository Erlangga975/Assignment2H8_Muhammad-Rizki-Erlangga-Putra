const btnData = document.querySelector('#btn-edit');
const btnResume = document.querySelector('#btn-resume');
const formData = document.querySelector('.form');
const displayHeading = document.getElementById('display');



formData.style.display = "none";
displayHeading.style.display = "block";

//memunculkan form
btnData.addEventListener('click', function () {
    formData.style.display = "block";
    displayHeading.style.display = "none";
    
    
});

// memunculkan form
btnData.addEventListener('click', () => {
    form.style.display = "block";
    dataHeading.style.display = "none";
});



// ambil input
const form = document.querySelector('form');
const namaInput = document.querySelector('#nama-input');
const roleInput = document.querySelector('#role-input');
const availabilityInput = document.querySelector('#availability-input');
const usiaInput = document.querySelector('#usia-input');
const lokasiInput = document.querySelector('#lokasi-input');
const pengalamanInput = document.querySelector('#pengalaman-input');
const emailInput = document.querySelector('#email-input');

// ambil buat input
const namaTeks = document.querySelector('#nama');
const roleTeks = document.querySelector('#role');
const availabilityTeks = document.querySelector('#availability');
const usiaTeks = document.querySelector('#usia');
const lokasiTeks = document.querySelector('#lokasi');
const pengalamanTeks = document.querySelector('#pengalaman');
const emailTeks = document.querySelector('#email');


// tombol submit 
form.addEventListener('submit', (event) => {
    event.preventDefault(); 
    displayHeading.style.display = "block";
    
    namaTeks.textContent = namaInput.value;
    roleTeks.textContent = roleInput.value;
    availabilityTeks.textContent = availabilityInput.value;
    usiaTeks.textContent = usiaInput.value;
    lokasiTeks.textContent = lokasiInput.value;
    pengalamanTeks.textContent = pengalamanInput.value;
   
    emailTeks.textContent = emailInput.value;
    
    
    form.style.display = "none";
    dataHeading.style.display = "block";
    
    
});
