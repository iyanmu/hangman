const wordList = [
    {
        word: "gitar",
        hint: "Sebuah alat musik yang memiliki senar."
    },
    {
        word: "oksigen",
        hint: "Gas tidak berwarna dan tidak berbau yang penting untuk kehidupan."
    },
    {
        word: "gunung",
        hint: "Sebuah elevasi alami besar dari permukaan Bumi."
    },
    {
        word: "lukisan",
        hint: "Seni menggunakan warna pada permukaan untuk menciptakan gambar atau ekspresi."
    },
    {
        word: "indro",
        hint: "kepala sekolah smk"
    },
    {
        word: "sepak bola",
        hint: "Olahraga populer yang dimainkan dengan bola bulat."
    },
    {
        word: "coklat",
        hint: "Makanan manis yang terbuat dari biji kakao."
    },
    {
        word: "kupu-kupu",
        hint: "Serangga dengan sayap berwarna-warni dan tubuh ramping."
    },
    {
        word: "sejarah",
        hint: "Studi tentang peristiwa masa lalu dan peradaban manusia."
    },
    {
        word: "pizza",
        hint: "Hidangan gurih yang terdiri dari dasar bulat yang datar dengan topping."
    },
    {
        word: "jazz",
        hint: "Genre musik yang ditandai dengan improvisasi dan sinkopasi."
    },
    {
        word: "kamera",
        hint: "Alat yang digunakan untuk menangkap dan merekam gambar atau video."
    },
    {
        word: "intan",
        hint: "Batu permata berharga yang dikenal karena kilau dan kekerasannya."
    },
    {
        word: "petualangan",
        hint: "Pengalaman yang menarik atau berani."
    },
    {
        word: "sains",
        hint: "Studi sistematis tentang struktur dan perilaku dunia fisik dan alami."
    },
    {
        word: "sepeda",
        hint: "Kendaraan yang digerakkan oleh manusia dengan dua roda."
    },
    {
        word: "matahari terbenam",
        hint: "Kehilangan harian matahari di bawah cakrawala."
    },
    {
        word: "kopi",
        hint: "Minuman berkafein populer yang terbuat dari biji kopi yang dipanggang."
    },
    {
        word: "tari",
        hint: "Gerakan ritmis tubuh yang sering dilakukan dengan musik."
    },
    {
        word: "galaksi",
        hint: "Sistem luas bintang, gas, dan debu yang diikat oleh gravitasi."
    },
    {
        word: "orkestra",
        hint: "Ensemble besar musisi yang memainkan berbagai alat musik."
    },
    {
        word: "gunung berapi",
        hint: "Gunung atau bukit dengan saluran tempat lava, fragmen batu, uap panas, dan gas dikeluarkan."
    },
    {
        word: "novel",
        hint: "Karya fiksi panjang, biasanya dengan plot dan karakter yang kompleks."
    },
    {
        word: "patung",
        hint: "Bentuk seni tiga dimensi yang dibuat dengan membentuk atau menggabungkan bahan."
    },
    {
        word: "symphony",
        hint: "Komposisi musik panjang untuk orkestra penuh, biasanya dalam beberapa gerakan."
    },
    {
        word: "arsitektur",
        hint: "Seni dan ilmu merancang dan membangun bangunan."
    },
    {
        word: "ballet",
        hint: "Bentuk tari klasik yang ditandai dengan gerakan yang tepat dan anggun."
    },
    {
        word: "astronot",
        hint: "Orang yang dilatih untuk bepergian dan bekerja di luar angkasa."
    },
    {
        word: "air terjun",
        hint: "Aliran air yang jatuh dari ketinggian."
    },
    {
        word: "teknologi",
        hint: "Penerapan pengetahuan ilmiah untuk tujuan praktis."
    },
    {
        word: "pelangi",
        hint: "Fenomena meteorologi yang disebabkan oleh refleksi, refraksi, dan dispersi cahaya."
    },
    {
        word: "alam semesta",
        hint: "Semua materi, ruang, dan waktu yang ada secara keseluruhan."
    },
    {
        word: "piano",
        hint: "Alat musik yang dimainkan dengan menekan tombol yang menyebabkan palu memukul senar."
    },
    {
        word: "liburan",
        hint: "Periode waktu yang didedikasikan untuk kesenangan, istirahat, atau relaksasi."
    },
    {
        word: "hutan hujan",
        hint: "Hutan lebat yang ditandai dengan curah hujan tinggi dan keanekaragaman hayati."
    },
    {
        word: "teater",
        hint: "Bangunan atau area luar ruangan di mana drama, film, atau pertunjukan lainnya dipentaskan."
    },
    {
        word: "telepon",
        hint: "Alat yang digunakan untuk mentransmisikan suara jarak jauh."
    },
    {
        word: "bahasa",
        hint: "Sistem komunikasi yang terdiri dari kata-kata, isyarat, dan sintaksis."
    },
    {
        word: "gurun",
        hint: "Tanah tandus atau kering dengan sedikit atau tanpa curah hujan."
    },
    {
        word: "bunga matahari",
        hint: "Tanaman tinggi dengan kepala bunga kuning besar."
    },
    {
        word: "fantasi",
        hint: "Genre fiksi imajinatif yang melibatkan sihir dan elemen supernatural."
    },
    {
        word: "teleskop",
        hint: "Alat optik yang digunakan untuk melihat objek jauh di luar angkasa."
    },
    {
        word: "angin sepoi-sepoi",
        hint: "Angin lembut."
    },
    {
        word: "oasis",
        hint: "Tempat subur di gurun di mana air ditemukan."
    },
    {
        word: "fotografi",
        hint: "Seni, proses, atau praktik menciptakan gambar dengan merekam cahaya atau radiasi elektromagnetik lainnya."
    },
    {
        word: "safari",
        hint: "Ekspedisi atau perjalanan, biasanya untuk mengamati satwa liar di habitat alami mereka."
    },
    {
        word: "planet",
        hint: "Benda langit yang mengorbit bintang dan tidak memproduksi cahaya sendiri."
    },
    {
        word: "sungai",
        hint: "Aliran air alami besar yang mengalir dalam saluran menuju laut, danau, atau aliran lainnya."
    },
    {
        word: "tropis",
        hint: "Berkaitan dengan atau terletak di wilayah antara Garis Balik Utara dan Garis Balik Selatan."
    },
    {
        word: "misterius",
        hint: "Sulit atau tidak mungkin untuk dipahami, dijelaskan, atau diidentifikasi."
    },
    {
        word: "enigma",
        hint: "Sesuatu yang misterius, membingungkan, atau sulit dipahami."
    },
    {
        word: "paradoks",
        hint: "Pernyataan atau situasi yang saling bertentangan atau melawan intuisi."
    },
    {
        word: "teka-teki",
        hint: "Permainan, mainan, atau masalah yang dirancang untuk menguji kecerdikan atau pengetahuan."
    },
    {
        word: "bisikan",
        hint: "Berbicara dengan sangat lembut atau pelan, sering kali dengan cara yang rahasia."
    },
    {
        word: "bayangan",
        hint: "Area atau bentuk gelap yang dihasilkan oleh objek yang menghalangi cahaya."
    },
    {
        word: "rahasia",
        hint: "Sesuatu yang disimpan tersembunyi atau tidak diketahui orang lain."
    },
    {
        word: "rasa ingin tahu",
        hint: "Keinginan yang kuat untuk mengetahui atau mempelajari sesuatu."
    },
    {
        word: "tidak terduga",
        hint: "Tidak dapat diprediksi atau diketahui sebelumnya; tidak pasti."
    },
    {
        word: "mengaburkan",
        hint: "Membingungkan atau membingungkan seseorang; membuat sesuatu tidak jelas atau sulit dipahami."
    },
    {
        word: "mengungkapkan",
        hint: "Membuat sesuatu yang sebelumnya rahasia atau tidak diketahui menjadi diketahui."
    },
    {
        word: "ilusi",
        hint: "Persepsi atau keyakinan yang salah; penampilan atau kesan yang menipu."
    },
    {
        word: "cahaya bulan",
        hint: "Cahaya dari bulan."
    },
    {
        word: "vibran",
        hint: "Penuh energi, kecerahan, dan kehidupan."
    },
    {
        word: "nostalgia",
        hint: "Kerinduan sentimental atau kasih sayang yang penuh harapan untuk masa lalu."
    },
    {
        word: "brilian",
        hint: "Sangat cerdas, berbakat, atau mengesankan."
    },
];