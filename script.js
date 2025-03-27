document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let usernameError = "";
    let passwordError = "";
    
    // Validasi Username (maksimal 7 karakter)
    if (username.length > 7) {
        usernameError = "Username tidak boleh lebih dari 7 karakter.";
    }

    // Validasi Password (Minimal 10 karakter, huruf besar, kecil, angka, dan karakter khusus)
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-={}\[\]:";'<>?,./])[A-Za-z\d!@#$%^&*()_+\-={}\[\]:";'<>?,./]{10,}$/;
    if (!passwordRegex.test(password)) {
        passwordError = "Password harus minimal 10 karakter, mengandung huruf kapital, huruf kecil, angka, dan karakter khusus.";
    }

    // Menampilkan pesan error
    document.getElementById("usernameError").innerText = usernameError;
    document.getElementById("passwordError").innerText = passwordError;

    // Jika valid, tampilkan alert
    if (!usernameError && !passwordError) {
        alert("Form berhasil dikirim!");
    }
});
