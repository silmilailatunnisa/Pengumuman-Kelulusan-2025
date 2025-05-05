const dataSiswa = [
    { nama: "ABDUL AZIZ", tanggal: "2006-08-20" },
    { nama: "AHMADI", tanggal: "2005-10-09" },
    { nama: "MUNAWAROTUL ISTIANAH", tanggal: "2007-07-30" },
    { nama: "MUTAWAKKIL ALALLAH", tanggal: "2007-10-24" },
    { nama: "NUR AZIZAH KAMILA", tanggal: "2005-12-24" },
    { nama: "RAHEMAH", tanggal: "2008-03-04" },
    { nama: "REFA AYU RENATA", tanggal: "2007-02-05" },
    { nama: "RITA AGUSTINA WAHYU NINGTIYAS", tanggal: "2006-08-13" }
];

let currentCaptcha = "";

function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    currentCaptcha = '';
    for (let i = 0; i < 5; i++) {
        currentCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha-code').innerText = currentCaptcha;
}

document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nama = document.getElementById('nama').value.trim().toUpperCase();
    const tanggal = document.getElementById('tanggal').value;
    const captchaInput = document.getElementById('captcha-input').value.trim().toUpperCase();

    const hasilDiv = document.getElementById('hasil');
    hasilDiv.classList.remove('lulus');
    hasilDiv.innerHTML = "";

    if (captchaInput !== currentCaptcha) {
        hasilDiv.innerHTML = "CAPTCHA salah. Silakan coba lagi.";
        generateCaptcha();
        return;
    }

    const cocok = dataSiswa.find(s => s.nama === nama && s.tanggal === tanggal);
    if (cocok) {
        hasilDiv.classList.add('lulus');
        hasilDiv.innerHTML = "🎉 Selamat anda dinyatakan <strong>LULUS</strong> Penilaian Sumatif Akhir Jenjang di SMKS Darul Jannah Tahun Pelajaran 2024/2025 🎉";
    } else {
        hasilDiv.innerHTML = "Data tidak ditemukan. Pastikan nama dan tanggal lahir sesuai.";
    }
});

window.onload = generateCaptcha;
