function TampilkanData(event) {
    event.preventDefault();
    var namaInput = document.getElementById("namaInput");
    var roleInput = document.getElementById("roleInput");
    var availabilityInput = document.getElementById("availabilityInput");
    var usiaInput = document.getElementById("usiaInput");
    var lokasiInput = document.getElementById("lokasiInput");
    var yearsInput = document.getElementById("yearsInput");
    var emailInput = document.getElementById("emailInput");

    var namaOutput = document.getElementById("namaOutput");
    var roleOutput = document.getElementById("roleOutput");
    var availabilityOutput = document.getElementById("availabilityOutput");
    var usiaOutput = document.getElementById("usiaOutput");
    var lokasiOutput = document.getElementById("lokasiOutput");
    var yearsOutput = document.getElementById("yearsOutput");
    var emailOutput = document.getElementById("emailOutput");

    namaOutput.textContent = namaInput.value;
    roleOutput.textContent = roleInput.value;
    availabilityOutput.textContent = availabilityInput.value;
    usiaOutput.textContent = usiaInput.value;
    lokasiOutput.textContent = lokasiInput.value;
    yearsOutput.textContent = yearsInput.value;
    emailOutput.textContent = emailInput.value;

    namaInput.value = "";
    roleInput.value = "";
    availabilityInput.value = "";
    usiaInput.value = "";
    lokasiInput.value = "";
    yearsInput.value = "";
    emailInput.value = "";
}
document.getElementById("form-profile").addEventListener("submit", TampilkanData);