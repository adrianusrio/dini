const content = (state = '', action) => {
    switch (action.type) {
        case 'GETCONTENT' :
            if(action.payload === '/'){
                return {
                    id: 1,
                    heading: {
                        h1: "DINI.ID SOLUSI DALAM MENGOPTIMALKAN TUMBUH KEMBANG ANAK",
                        h2: "KARENA PERTUMBUHAN ANAK BERBEDA-BEDA MEMBUTUHKAN PENANGANAN BERBEDA PULA",
                        bannerClass: "banner-home"
                    },
                    whoWeAre: {
                        text:[
                            {
                                0 : "Dini.id adalah startup yang khusus dirancang untuk memberikan program stimulasi dan intervensi dalam tumbuh kembang anak dengan memadukan antara teknologi, ilmu psikologi, orang tua, dan tim ahli. Dini.id menyediakan sistem assessment berkala yang disupervisi oleh psikiater dan psikolog klinis yang dapat mengidentifikasi potensi ataupun keterlambatan dalam perkembangan anak yang unik sejak dini. Kami percaya bahwa bermain adalah aktivitas terpenting bagi anak untuk belajar dan berkembang, oleh karena itu Dini.id bekerjasama dengan playground yang mudah dijangkau dan ramah anak, merancang suatu program khusus permainan anak bersama orang tua yang berfungsi untuk menstimulasi perkembangan anak dengan dibimbing oleh kid's trainer profesional. Dengan demikian orang tua dapat mempelajari pengetahuan yang tepat untuk mengoptimalkan potensi pada anaknya agar menjadi anak-anak yang mandiri dan tangguh di masa depan."
                            }
                        ]
                    },
                    description: {
                        text: `<p>
                                Jika Anda mencari cara sederhana dan menyenangkan untuk menghabiskan waktu bersama anak-anak Anda, sambil membantu mereka tumbuh dan belajar, Anda telah datang ke tempat yang tepat. Stimulasi dini ini telah dirancang untuk membantu perkembangan anak mencapai tahapan yang optimal dengan cara bermain dan belajar yang menyenangkan.
                            </p>
                            <p>
                                Tim Dini.id berfokus pada aspek-aspek dasar dari penilaian perkembangan umum anak-anak pada setiap tahapan usianya. Tim kami akan memberikan stimulasi sesuai perkembangan usia anak dan mengamati bagaimana anak Anda tumbuh dan berubah seiring waktu dan apakah anak Anda memenuhi tonggak perkembangan yang khas dalam bermain, belajar, berbicara, berperilaku, dan bergerak.
                            </p>
                            <p>
                                Penilaian perkembangan untuk anak di usia 0-6 tahun adalah upaya untuk menilai berbagai aspek fungsi anak, termasuk bidang-bidang seperti kognitif, komunikasi, perilaku, interaksi sosial, kemampuan motorik dan sensorik, dan keterampilan adaptif. Penilaian keluarga dan lingkungan anak juga memberikan informasi kontekstual yang penting. Untuk mempermudah para orangtua maka kami memberikan free assessment pada tahap awal berupa skrining perkembangan untuk melihat lebih dekat bagaimana perkembangan anak Anda.
                            </p>`
                    },
                    name: 'home'
                }
            }else if(action.payload === '/golden-age'){
                return {
                    id: 2,
                    heading: {
                        h1: "OPTIMALKAN TUMBUH KEMBANG ANAK DI MASA GOLDEN AGE",
                        h2: "PROGRAM STIMULASI DINI DENGAN AKTIVITAS PLAYTIME UNTUK MENGOPTIMALKAN TUMBUH KEMBANG",
                        bannerClass: "banner-golden-age"
                    },
                    whoWeAre:{
                        text: [
                            {
                                0 : "Menjadi keinginan setiap orang tua agar anak-anak mereka dapat tumbuh dan berkembang dengan baik. Dengan menjalani proses tumbuh kembang yang baik, anak dapat memaksimalkan potensi dalam diri anak. Oleh karena itu, perlu adanya peran orang tua memperhatikan anak agar dapat menjalani proses tumbuh kembang yang sesuai. Dalam fase awal kehidupan anak, terdapat fase yang sangat penting dan berperan dalam proses pertumbuhan dan perkembangan, yaitu golden age atau periode usia emas."
                            }
                        ],
                        video: "https://www.youtube.com/embed/JiN5asBfs-4"
                    },
                    description: {
                        text: `<p>Golden age atau periode usia emas merupakan waktu dimana otak anak mengalami perkembangan paling cepat dalam masa pertumbuhannya. Dalam masa awal pertumbuhan anak, beberapa penelitian menunjukan adanya lebih dari 100 miliar sel saraf yang berperan dalam masa pertumbuhan anak yang dapat mempengaruhi tingkat kecerdasan anak. Pada fase ini, berlangsung perkembangan kematangan fungsi fisik dan psikis pada anak untuk merespon stimulasi dari lingkungan sekitarnya untuk mengembangkan kemampuan motorik, sosial bahasa dan psikis anak.</p>

                        <p>Periode usia emas anak dimulai dari tahun pertama kehidupan hingga anak berusia 5 tahun. Pada periode tersebut, orang tua sangat berperan penting untuk memberikan manfaat pengalaman pada anak dengan memberikan aktifitas yang diminati oleh anak. Pada periode ini, anak dapat mudah menerima stimulus yang diterima dari lingkungan disekitarnya. Pematangan fungsi fisik dan psikis anak pada fase ini membuat anak siap untuk merespon dan mewujudkannya semua tugas perkembangan yang diharapkan muncul di kehidupan sehari-hari.</p>
            
                        <p>Dalam periode ini, anak mesti dijauhkan dari faktor stres yang dapat menekan proses pertumbuhan dan perkembangan anak. Paparan stres yang terlalu dini pada anak dapat mempengaruhi perkembangan kognitif, tingkah laku dan psikis anak sehingga mempengaruhi sifat anak ketika dewasa nanti.</p>
            
                        <h6><b>Jenis permainan yang dapat menstimulus golden age</b></h6>
            
                        <p>Dalam permainan yang dilakukan pada periode ini, kemampuan dasar anak yang dirangsang dengan stimulasi terarah adalah kemampuan gerak kasar (motorik kasar), kemampuan gerak halus (motorik halus), kemampuan bicara dan bahasa serta kemampuan sosialisasi dan kemandirian. Lakukan stimulasi dengan cara mengajak anak bermain, bernyanyi, bervariasi, menyenangkan, tanpa paksaan dan tidak ada hukuman. Stimulasi secara bertahap dan berkelanjutan sesuai umur anak, terhadap ke empat aspek kemampuan dasar anak. Gunakan alat bantu/permainan yang sederhana, aman dan ada di sekitar anak. Berikan kesempatan yang sama pada anak laki-laki dan perempuan. Anak selalu diberi pujian, bila perlu diberi hadiah atas keberhasilannya.</p>`
                    },
                    name: 'golden-age'
                }
            }else if(action.payload === '/speech-delay'){
                return {
                    id: 3,
                    heading: {
                        h1: "ATASI SPEECH DELAY PADA ANAK SEJAK DINI",
                        h2: "SOLUSI ASIK DAN MENYENANGKAN DENGAN AKTIVITAS PLAYTIME UNTUK MENGATASI TERLAMBAT BICARA",
                        bannerClass: "banner-speech-delay"
                    },
                    whoWeAre:{
                        text: [
                            {
                                0: "Setiap pertemuan antar orang tua di lingkungan sekitar tak terlepas dari perbincangan mengenai perkembangan dan pertumbuhan anak-anaknya. Kadang-kadang terdengar beberapa pertanyaan yang muncul diantara beberapa orang tua, seperti: “Sudah usia 2 tahun, tapi baru bisa mengucapkan ‘mama’ dan ‘papa’, Itu normalkah?”; “Si kecil belum bisa menyebutkan menyebutkan benda-benda, padahal usianya mau 2 tahun, Kenapa, ya?”."
                            },
                            {
                                1: "Hal tersebut menjadi kekhawatiran bagi orang tua mengenai perkembangan kemampuan bicara anaknya bila dibandingkan dengan anak-anak seusianya. Namun, kekhawatiran tersebut harus dipahami sebagai bentuk perkembangan kesiapan otak anak dan dapat diatasi karena kemampuan otak anak untuk berkembang masih dapat mengejar kemampuan anak-anak lainnya. Keterlambatan kemampuan bicara pada anak-anak sering disebut sebagai speech delay."
                            }
                        ],
                        video: "https://www.youtube.com/embed/JiN5asBfs-4"
                    },
                    description: {
                        text: `<p>Speech delay atau keterlambatan bicara merupakan bentuk keterlambatan dalam perkembangan atau mekanisme seseorang untuk mengeluarkan suara. Speech delay sering terjadi pada masa awal pertumbuhan dan perkembangan anak-anak yang berhubungan dengan kesiapan otak dapat diakibatkan oleh kurangnya interaksi antara anak dan orang tua. Dalam kondisi lebih serius, speech delay dapat menunjukkan adanya gangguan pendengaran hingga gangguan mental pada anak.</p>

                        <p>Speech delay dapat mengganggu pertumbuhan dan perkembangan pada masa anak-anak sehingga mengakibatkan kesulitan untuk berkomunikasi dan mengekspresikan keinginannya kepada orang lain. Hal ini akan menyulitkan orang tua untuk memahami keinginan buah hatinya. Deteksi yang lebih dini dapat membantu perkembangan anak untuk mengejar ketertinggalan dalam hal kemampuan berbicara.</p>
            
                        <p>Speech delay dapat berhubungan dengan keterlambatan kemampuan dalam berbahasa dan berbicara pada masa perkembangan dan pertumbuhan anak-anak. Terdapat perbedaan diantara keterlambatan kemampuan berbahasa dan berbicara. Keterlambatan berbahasa berhubungan dengan kemampuan untuk menyatakan isi pikiran atau menyerap informasi dari lingkungan, sedangkan keterlambatan berbicara berhubungan dengan kemampuan untuk mengucapkan, mengeluarkan suara atau melafalkan suatu kata.</p>
            
                        <p>Kemampuan setiap anak untuk berbicara berbeda-beda sehingga sulit untuk menyamakan kemampuan seorang anak dengan anak lainnya. Hal ini dikarenakan bentuk kesiapan otak setiap anak berbeda. Namun, terdapat beberapa tanda yang dapat membantu mengukur perkembangan kemampuan berbicara anak. Tanda-tanda tersebut antara lain:</p>
            
                        <ul>
                            <li>Pada usia hingga 1 tahun, anak dapat mengucapkan kata yang menunjukkan kedua orang tuanya seperti kata ‘mama’ dan ‘papa’</li>
                            <li>Pada usia 1-2 tahun, anak dapat menunjuk ke arah orang tuanya dan merespon ketika namanya dipanggil.</li>
                            <li>Pada usia 2 tahun, anak dapat menunjuk benda atau mengucapkan 2-3 kata, interaksi dengan bicara dengan bentuk komunikasi sederhana.</li>
                        </ul>`
                    },
                    name: 'speech-delay'
                }
            }
            else{
                return {
                    id: null,
                    heading: {
                        h1: "",
                        h2: "",
                        bannerClass: ""
                    },
                    name: ''
                }
            }
        default :
            return state;
    }
}

export default content;