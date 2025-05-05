
let siswaData = [];

fetch('data_siswa_lulus.json')
  .then(res => res.json())
  .then(data => siswaData = data);

document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim().toUpperCase();
    const birthdate = new Date(document.getElementById("birthdate").value);
    const formattedDate = ('0' + birthdate.getDate()).slice(-2) + "-" + 
                          ('0' + (birthdate.getMonth() + 1)).slice(-2) + "-" + 
                          birthdate.getFullYear();
    const captcha = document.getElementById("captcha").value.trim().toUpperCase();

    const siswa = siswaData.find(s => s.name === name && s.birthdate === formattedDate);

    const resultDiv = document.getElementById("result");
    if (captcha !== "LULUS") {
        resultDiv.innerHTML = "<p class='fail'>Captcha salah. Silakan tulis 'LULUS'.</p>";
    } else if (siswa) {
        resultDiv.innerHTML = "<p class='success'>Selamat anda dinyatakan <strong>LULUS</strong> Penilaian Sumatif Akhir Jenjang di SMKS Darul Jannah Tahun Pelajaran 2024/2025</p>";
    } else {
        resultDiv.innerHTML = "<p class='fail'>Data tidak ditemukan. Periksa kembali nama dan tanggal lahir.</p>";
    }
});
