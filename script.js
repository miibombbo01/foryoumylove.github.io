document.addEventListener('DOMContentLoaded', function() {
    const passwordModal = document.getElementById('passwordModal');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const mainContent = document.getElementById('mainContent');
    const submitPassword = document.getElementById('submitPassword');
    
    // Inisialisasi element audio latar belakang
    const backsound = document.getElementById('backsound');
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const galleryCaptions = document.querySelectorAll(".gallery-item p");
    const galleryTitle = document.querySelector("#gallery h2");
    document.body.classList.add("pink-theme");

    // Lagu default saat pertama kali klik Open Letter (Only - Leehi)
    const defaultSongSrc = "https://files.catbox.moe/exzzyd.mp3";
    const herPhotos = [
"https://i.postimg.cc/MZ52CB4t/IMG-20260621-WA0027.jpg",
"https://i.postimg.cc/fyL2nVtr/IMG-20260629-WA0035.jpg",
"https://i.postimg.cc/prTGbmhc/IMG-20260703-WA0004.jpg",
"https://i.postimg.cc/qqRbVNhZ/IMG-20260709-WA0018.jpg",
"https://i.postimg.cc/0jQWRzMc/IMG-20260709-WA0025.jpg",
"https://i.postimg.cc/qqRbVNhb/IMG-20260711-WA0001.jpg"
];

const myPhotos = [
"https://i.postimg.cc/44jySvbD/IMG-20260719-WA0016.jpg",
"https://i.postimg.cc/FFwzBbgq/IMG-20260719-WA0017.jpg",
"https://i.postimg.cc/VsJ5gZMb/IMG-20260719-WA0018.jpg",
"https://i.postimg.cc/nVXM2S7K/IMG-20260719-WA0019.jpg",
"https://i.postimg.cc/CMRd7rDq/IMG-20260719-WA0020.jpg",
"https://i.postimg.cc/fWVkCqXd/IMG-20260719-WA0021.jpg"
];

    const herCaptions = [
"The smile that always brightens my day. ☀️",
"I still smile every time I look at this picture. 🤍",
"I don't know how, but you always look adorable. 🤏❤️",
"This might be one of my favorite photos of you. 🌸",
"You're prettier than you think you are. ✨",
"I hope this gallery keeps growing with us. ❤️"
];

const myCaptions = [
"Trying my best to become someone worthy of you. 💙",
"This is the guy who misses you every day. 🌌",
"I smiled because I was thinking about you. 🤍",
"I hope you always see me with love. ☁️",
"I'll keep working hard for our future. 💪",
"Still with you. Always. 💙"
];

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

    backsound.pause();
    backsound.src = newSrc;
    backsound.load();
    backsound.play().catch(error => console.log("Playback error:", error));

    if (newSrc.includes("fv1ic4.mp3")) {

    document.body.classList.remove("pink-theme");
    document.body.classList.add("blue-theme");
        galleryTitle.textContent = "Piece of Mine 💙";

    galleryImages.forEach((img, index) => {
    img.style.opacity = "0";

setTimeout(() => {
    img.src = myPhotos[index];
    img.style.opacity = "1";
},250);
    galleryCaptions[index].textContent = myCaptions[index];
});

} else {

    document.body.classList.remove("blue-theme");
    document.body.classList.add("pink-theme");
        galleryTitle.textContent = "Pictures of You 🌷";

    galleryImages.forEach((img, index) => {
    img.style.opacity = "0";

setTimeout(() => {
    img.src = herPhotos[index];
    img.style.opacity = "1";
},250);
    galleryCaptions[index].textContent = herCaptions[index];
});

}

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
            heart.innerHTML = '<span class="floating-heart">❤️</span>';
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
