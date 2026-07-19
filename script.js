document.addEventListener('DOMContentLoaded', function() {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const submitPassword = document.getElementById('submitPassword');
    
    // Inisialisasi element audio latar belakang
    const backsound = document.getElementById('backsound');

    // Lagu default saat pertama kali klik Open Letter (Only - Leehi)
    const defaultSongSrc = "https://files.catbox.moe/exzzyd.mp3";

    // Fungsi klik tombol Open Letter
    submitPassword.addEventListener('click', function() {
        // Mainkan musik otomatis di latar belakang
        backsound.src = defaultSongSrc;
        backsound.play().catch(error => console.log("Playback diblokir browser:", error));

        passwordModal.style.opacity = '0';
        setTimeout(() => {
            passwordModal.style.display = 'none';
            welcomeScreen.style.display = 'flex';
            
            setTimeout(() => {
                welcomeScreen.style.opacity = '0';
                setTimeout(() => {
                    welcomeScreen.style.display = 'none';
                    mainContent.style.display = 'block';
                }, 800);
            }, 2500);
        }, 500);
    });

    // Kontrol Ganti Musik Saat Item Lagu Diklik
    const songItems = document.querySelectorAll('.song');
    songItems.forEach(item => {
        item.addEventListener('click', function() {
            const newSrc = this.getAttribute('data-src');
            if (newSrc) {
                backsound.src = newSrc;
                backsound.play().catch(error => console.log("Playback error:", error));
                
                // Efek visual penanda lagu aktif
                songItems.forEach(s => s.style.background = 'rgba(255, 255, 255, 0.6)');
                this.style.background = '#ffe6ea';
            }
        });
    });

    // Logika untuk navigasi Tab (Surat, Musik, Notes, Galeri)
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetTab) content.classList.add('active');
            });
        });
    });

    // Logika untuk membuka/menutup surat cinta
    const loveLetter = document.getElementById('loveLetter');
    loveLetter.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });

    // Fungsi untuk membuat elemen hati dan beruang melayang
    function addFloatingElements() {
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerHTML = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(heart);
        }
        
        for (let i = 0; i < 5; i++) {
            const teddy = document.createElement('div');
            teddy.classList.add('teddy-bear');
            teddy.innerHTML = '🧸';
            teddy.style.left = Math.random() * 100 + '%';
            teddy.style.top = Math.random() * 100 + '%';
            teddy.style.animationDelay = Math.random() * 5 + 's';
            document.body.appendChild(teddy);
        }
    }

    addFloatingElements();
});
