const participants = [
    "Abdulkadir Yanelli", "Abdulkadir şen", "Abdullah ÇAYLIOĞLU", "Abdullah sıddık ongun",
    "ABİDİN HOŞAFÇI", "Adalet üstükuş", "Ahmet KARAPÜR", "AKIN ÜNLÜ",
    "Ali Atakan", "Ali Cenap Bulca", "Ali Cerrahoğlu", "Ali Ekber Türkoğlu",
    "Ali ESEN", "ALİ İNAN", "Ali Uğurlu", "Alper CAN",
    "Arda Uluçam", "Arif yeşillik", "Arzu İncirbölen", "Aydın KILIÇ",
    "Ayhan tütüncü", "Aykut Ateş", "Aynur Kaynak", "Aysel Taşkan",
    "Aysun Bozkurt", "AYŞE AKÇİN", "Ayşe dorum", "Ayşe Hülya Derici",
    "Ayşe Jülide Barım", "Ayşe öz", "Ayşe Yıldırım Kettaş", "AYTEN ATEŞ",
    "Azize Köprücü", "BAHADIR Baldırcı", "Bahri Bilici", "bahtiyar Şensoy",
    "Baran Aslan", "Batuhan Bozca", "Bayram Ünal Sözer", "Bekir türkmen",
    "Belma Yavuz Zenler", "Berke Gözübüyük", "Berna kalkan", "Betül Kalebaşı",
    "birol arslan", "Bulut Bulut", "Burcu Karaman", "Cahit Elçi",
    "Canan Uluçam", "Cemalettin şahin", "Cemile YAKICI", "Cengiz Özberk",
    "Çetin Gedik", "Çiçek Erdoğan", "Deniz Başköy", "Deniz Sezen",
    "Deniz Yüksel", "Derya Işık", "Derya Özberk", "Didar Buçak",
    "Dilek Yüce", "Duygu Tarlacı", "ECRIN TÜRKMEN", "Efe Özberk",
    "EFKAN BARUTCU", "EFLİN Türkmen", "Ege Özberk", "Ela berber",
    "Emel Tatlıcı", "Emine Bilgin", "Emre şahutoğlu", "Enbiya İnce",
    "Eray Karavaş", "ERHAN ATEŞ", "Erhan Başar", "Esra Güleken",
    "Fatma altınsoy", "Fatma boran İlankut", "Fatma borekci", "Fatma çakır",
    "ferhat şaş", "Ferkan Atila", "Fethiye ışıkaltın", "Funda ayhan",
    "FUNDA IŞIK TÜTÜNCÜ", "Furkan kalebaşı", "Garip çil", "Gizem yılmaz",
    "Gökhan ATASOY", "Gökhan Özberk", "Gurbet Yıldız", "Gülbahar Aslan",
    "Gülhan üstünel", "Gülsevin Öztürkel", "gülten kaya", "Güzin Türkmen",
    "Hacer Bolatbaş", "Hakan Bağcı", "Haluk Ay", "Harun SARICA",
    "HASAN HÜSEYİN AKSOY", "Hasan ÖNBAŞ", "Hasan Ucel", "Hasan YAPAR",
    "hatice çelen", "Hatice Gülbaba", "Hatice Özyaşar", "Hatice Türkmen",
    "Hatun Genç", "Hazım Derya Tellioğlu", "Huzeyfe Karabay",
    "Hüseyin Ömeroğlu", "Hüseyin Şahin", "Hüseyin Zenler", "Hüsniye Tekin",
    "Ilknur unlu", "İBRAHİM AKGÖBEK", "İbrahim Alper İLBİZ",
    "İbrahim Balcı", "İbrahim Efilti", "İbrahim Kiraz", "İBRAHİM ÖZTÜRK",
    "İclal Kaş", "İlkay Demir", "İsmail Durmuş", "İzber şen",
    "İzzet Altınsoy", "Kadir Ateş", "Kadir Can Yılmaz", "Kadir Oz",
    "Kamil Özdemir", "Kemal Çuhacı", "Kenan Sar", "Kerem Divarcı",
    "Leyla ilik", "Leyla Nurduhan", "Mahmut Ünver", "Mehlika sakınmaz",
    "Mehmet Sağlıcan", "Mehmet Aslan", "Mehmet zeki dikmen", "Meltem keskin",
    "Meral Taş", "Metin Ataman", "Murat akar", "Murat Başer",
    "MURAT GÜÇLÜ YÖNTEM", "Murat Türkoğlu", "Mustafa aktaş",
    "Mustafa Başak", "Mustafa budak", "mustafa samga", "Mustafa Temizel",
    "Mustafa ÜNAL", "Münevver Ediz", "Mürşide İyiduvar", "Mürşit Uzunoğlu",
    "Nahsen Şahin", "Nehir Yüksel", "Neziha tatlı", "Nihat Uzan",
    "Nur Gannemoğlu", "Nuriye atlı topcu", "Nurten Şimşek", "Oktay Başköy",
    "Oktay Özyaşar", "Orhan Küçükkıratlı", "Osman Yıldız", "Ozan günler",
    "Özcan AYDIN", "Özkan KIVRAK", "Özlem ÖNBAŞ", "Pelin ALTIN",
    "Pınar KAYACAN", "Rahmi SÖYLEYİCİ", "Ramazan Barım", "Ramazan Ercan",
    "Recep Kürşat Köse", "Rifat Yüksel", "Ruhi Kurt", "Sabahat özbastacı",
    "Safiye Aygün", "Said Çağlar Öz", "Saile kılınç", "Sare torun",
    "Sefer Savur", "Sehem Camuz Atakan", "Selman Köker", "SERPİL KIZILKAYA",
    "Sevilay kaygısız", "Sevim Aden Yılmaz", "Sibel akyol", "Sinan Atagül",
    "Songül Başköy", "Songül Çiçek", "Songül Karaca", "Soysal tan",
    "Sultan Köker", "Süheyla Yüksel", "Süleyman ŞAHAN", "Süleyman Uygun",
    "Şahin Karabulut", "Şevki Balkan", "Şükrü ekmekçi", "TARIK OKTAY KIZILKAYA",
    "Tekin Güleken", "Tülay Ünver", "Uğur ÖZÇELİK", "Umur Duyul",
    "Umut Ender", "Ural Kayaalp", "Ümit Yavuz Kettaş", "Volkan İlankut",
    "YAHYA KÜÇÜKTÜTÜNCÜ", "Yasemin öztürk", "Yasin Hüyüklü", "Yasin Tarlacı",
    "Yusuf Bera Dikmen", "Yusuf dokuzoğlu", "Zafer Koral Köprücü",
    "ZEKİ ÇAĞLAR", "Zekiye Okçu", "Zerin Arslantaş", "Zeynep Onar",
    "Zübeyir Alptekin çatal"
];

const participantList = document.getElementById('participantList');
const searchInput = document.getElementById('searchInput');

function renderList(filter = '') {
    participantList.innerHTML = '';
    const filteredParticipants = participants.filter(participant =>
        participant.toLowerCase().includes(filter.toLowerCase())
    );
    filteredParticipants.forEach(participant => {
        const li = document.createElement('li');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        checkbox.type = 'checkbox';
        checkbox.checked = getCheckedStatus(participant);
        checkbox.addEventListener('change', () => {
            li.classList.toggle('checked', checkbox.checked);
            saveCheckedStatus(participant, checkbox.checked);
        });

        label.textContent = participant;
        li.appendChild(label);
        li.appendChild(checkbox);
        participantList.appendChild(li);
    });
}

function getCheckedStatus(participant) {
    const checkedStatus = JSON.parse(localStorage.getItem('checkedStatus')) || {};
    return checkedStatus[participant] || false;
}

function saveCheckedStatus(participant, status) {
    const checkedStatus = JSON.parse(localStorage.getItem('checkedStatus')) || {};
    checkedStatus[participant] = status;
    localStorage.setItem('checkedStatus', JSON.stringify(checkedStatus));
}

searchInput.addEventListener('input', () => {
    renderList(searchInput.value);
});

// Sayfa yüklendiğinde listeyi renderla
document.addEventListener('DOMContentLoaded', () => {
    renderList();
});
