// Data pertemuan (hardcoded untuk website statis)
const meetings = [
  {
    id: 1,
    title: "Pengenalan Kecerdasan Buatan",
    content: `<h3>1. Definisi Kecerdasan Buatan (Artificial Intelligence - AI)</h3>
<p>Kecerdasan Buatan adalah proses menanamkan program pada sebuah mesin agar mesin tersebut dapat beroperasi layaknya manusia. AI banyak digunakan di berbagai aspek kehidupan (contohnya: alat pendeteksi penyakit, sistem lalu lintas) dan seringkali menggunakan algoritma komputer. AI dapat dihubungkan dengan bidang matematika dan bidang lain seperti biologi (menghasilkan bioinformatika). Komputer kini telah berkembang dari sekadar alat hitung menjadi alat yang mengkombinasikan berbagai bidang untuk membantu manusia.</p>

<h3>2. Sejarah Kecerdasan Buatan</h3>
<ul>
<li>Kebutuhan akan kecerdasan buatan mulai meningkat pesat dalam 20 tahun terakhir. AI mulai muncul sekitar tahun 1940-an, seiring dengan munculnya komputer.</li>
<li>René Descartes (abad ke-17) mengibaratkan hewan sebagai mesin rumit.</li>
<li>Principia Mathematica (oleh Bertrand Russell dan Alfred North Whitehead) menciptakan logika formal.</li>
<li>Warren Mc Culloch dan Walter Pitts (1943) mengemukakan kalkulus logis sebagai pokok utama AI.</li>
<li>Tahun 1951 adalah tahun pertama AI muncul untuk program permainan naskah (Christopher Strachey) dan catur (Dietrich Prinz).</li>
<li>Tahun 1956, John McCarthy menyebutkan istilah "kecerdasan buatan" pada sebuah konferensi dan mengungkapkan program bernama Lips.</li>
<li>Alan Turing mengemukakan tes perilaku cerdas yang disebut "Turing Test".</li>
<li>Penemuan penting lainnya termasuk: Perceptrons (Marvin Minsky dan Seymour Papert), Bahasa Komputer Prolog (Alain Colmerauer), Sistem pakar medis pertama (Ted Shortliffe), dan sistem kendaraan pengontrol lalu lintas (Hans Moravec).</li>
<li>Tahun 1997, Deep Blue berhasil mengalahkan Garry dalam 6 kompetisi Catur Games.</li>
<li>Tahun 2004, DARPA merancang mobil yang melaju ratusan mil tanpa melibatkan manusia menggunakan GPS.</li>
</ul>

<h3>3. Perbandingan Kecerdasan Buatan dengan Program Konvensional</h3>
<p>Program konvensional (biasa) berbasis pada algoritma (rumus matematika) yang mengarahkan komputer melalui instruksi. Sementara itu, Kecerdasan Buatan berbasis pada manipulasi simbolik (representasi) untuk menciptakan basic knowledge yang menghasilkan problem solving.</p>
<table border="1" style="border-collapse: collapse; width: 100%;">
<tr><th>Sudut Pandang</th><th>Kecerdasan Buatan</th><th>Program Biasa</th></tr>
<tr><td>Pemrosesan</td><td>Simbolik</td><td>Algoritma</td></tr>
<tr><td>Masukan</td><td>Not Complete</td><td>Complete</td></tr>
<tr><td>Pendekatan</td><td>Mostly heuristic</td><td>Algoritma</td></tr>
<tr><td>Penjelasan</td><td>Available</td><td>Not available</td></tr>
<tr><td>Fokus</td><td>Knowledge</td><td>Data</td></tr>
<tr><td>Maintenence</td><td>Cheap</td><td>Difficult</td></tr>
<tr><td>Berpikir Logik</td><td>Available</td><td>Not available</td></tr>
</table>

<h3>4. Bagian dan Cabang Kecerdasan Buatan</h3>
<p>Bagian dasar AI meliputi:</p>
<ul>
<li>Pola: Cara merepresentasikan fakta ke dalam simbol atau logika matematik.</li>
<li>Inferensia: Pengetahuan dan penalaran yang masuk akal (learn form experience).</li>
</ul>
<p>Strategi untuk mencapai tujuan melibatkan:</p>
<ul>
<li>Epistemologis: Pembelajaran tentang asal-usul, karakter, dan keterikatan knowledge for problem solving.</li>
<li>Ontologis: Pengetahuan tentang keberadaan dan keabsahan.</li>
<li>Heuristiks: Metode yang digunakan untuk menemukan suatu pemikiran dan usulan.</li>
</ul>
<p>Cabang-cabang utama AI:</p>
<ul>
<li>Sistem Pakar (Expert System): Menirukan cara berpikir pakar untuk konsultasi dan menyelesaikan problem tertentu.</li>
<li>NLP (Natural Language Processing): Memberikan kemampuan komputer dalam memproses bahasa alami, terdiri dari:
<ul>
<li>Natural language understanding (pemahaman bahasa alami)</li>
<li>Natural language generation (pembangkitan bahasa alami).</li>
</ul>
</li>
<li>Voice Understanding: Teknik agar komputer mengerti ucapan manusia (misalnya pencarian di Google menggunakan suara).</li>
<li>Sistem Sensor dan Robotik: Contoh: face recognition untuk absensi, robot penyiram tanaman, atau robot pendeteksi Covid-19.</li>
<li>Computer Vision: Gabungan dari pengenalan pola dan pengolahan citra, digunakan untuk mengontrol proses industri.</li>
<li>Machine Learning: Pemrosesan berdasarkan data, terdiri dari: supervised learning, unsupervised learning, semi-supervised learning, reinforcement learning, dan learning to learn.</li>
</ul>

<h3>5. Kelebihan Kecerdasan Buatan</h3>
<p>AI memiliki kelebihan dibandingkan kecerdasan alami:</p>
<ol>
<li>Sifat Kekal: AI tidak akan pernah berubah kecuali programmer mengubah coding-nya, berbeda dengan kecerdasan alami yang bersifat sementara karena manusia bisa lupa.</li>
<li>Mudah Disalin/Dipindahkan: AI mudah dipindahkan ke komputer lain, berbeda dengan kecerdasan alami yang cara penyampaiannya antar individu bisa berbeda.</li>
<li>Lebih Murah: Hanya menggunakan komputer. Berbeda dengan kecerdasan alami yang memerlukan biaya (waktu, jarak, uang) untuk bertemu pakar.</li>
<li>Terdokumentasi: AI bisa didokumentasikan ke dalam komputer atau alat lain, sedangkan kecerdasan alami hanya ada dalam pemikiran manusia.</li>
</ol>

<h3>6. Peranan Kecerdasan Buatan Saat Ini</h3>
<ul>
<li>Teknik Searching: Digunakan untuk pencarian rute suatu daerah menggunakan GPS (Global Positioning Systems).</li>
<li>Teknik Planning: Digunakan di bidang manufaktur dan robotik sebagai software untuk memonitor dan mengeksekusi perencanaan.</li>
</ul>`,
  },

  {
    id: 2,
    title: "Masalah, Ruang Dan Keadaan",
    content: `<h3>A. Konsep Dasar Masalah dalam Kecerdasan Buatan</h3>
<p>1. Definisi Masalah: Secara umum, masalah didefinisikan sebagai kesenjangan antara yang diharapkan dengan kenyataan yang ada. Dalam konteks Kecerdasan Buatan (KB), masalah didefinisikan sebagai suatu problem yang memiliki state awal dan state akhir (goal), serta kemampuan untuk mengubah keadaan menggunakan aturan yang berlaku (Rule).</p>

<p>2. Komponen Masalah dalam KB: Dalam menggambarkan sebuah masalah, beberapa hal utama harus diperhatikan:</p>
<ul>
<li>Mendefinisikan Ruang Keadaan (State Space).</li>
<li>Menetapkan satu atau lebih Keadaan Awal (Initial State).</li>
<li>Menetapkan satu atau lebih Tujuan (Goal State).</li>
<li>Menetapkan Kumpulan Aturan (Rules).</li>
</ul>

<h3>B. Ruang Keadaan dan Aturan (State Space and Rules)</h3>
<ul>
<li>Ruang Keadaan adalah koleksi dari berbagai state yang memungkinkan, termasuk state awal untuk memulai dan state akhir untuk mengakhiri pencarian.</li>
<li>Contoh Masalah Gelas Air (Water Glass):
<ul>
<li>Terdapat 2 bak (teko A: 4 galon; teko B: 3 galon).</li>
<li>Tujuan: Mengisi tepat 2 galon air ke dalam tong berkapasitas 4 galon.</li>
<li>Ruang Keadaan: Ditentukan sebagai $(x, y)$, di mana x∈{0,1,2,3,4} dan y∈{0,1,2,3}.</li>
<li>State Awal: (0, 0).</li>
<li>State Tujuan: $(2, n)$ untuk sembarang n.</li>
<li>Penyelesaian masalah ini dilakukan melalui representasi Tree dan penggunaan Rules (yang dideskripsikan dalam Tabel 2.1).</li>
</ul>
</li>
<li>Contoh Masalah Petani, Kambing, Serigala, dan Sayur-sayuran:
<ul>
<li>Simbol: Petani (p), Kambing (k), Serigala (sr), Sayuran (sy).</li>
<li>Representasi State: Misalnya (1, 1, 1, 1) berarti semua objek (k, sr, sy, p) berada di sisi awal, dan (0, 0, 0, 0) berarti semua di sisi akhir.</li>
<li>Rule: Terdapat aturan yang mengatur pergerakan penyeberangan (Tabel 2.3), dengan batasan bahwa sayur tidak boleh dimakan kambing, dan kambing tidak boleh dimakan serigala.</li>
</ul>
</li>
</ul>

<h3>C. Representasi Ruang Keadaan dengan Graph dan Tree</h3>
<p>1. Graph Keadaan (State Graph):</p>
<ul>
<li>Ruang keadaan dapat direpresentasikan menggunakan Graph Keadaan, yang melibatkan Node (simpul) dan arah (cabang).</li>
<li>Node mewakili sebuah keadaan. Lintasan pada graph menunjukkan langkah-langkah dari state awal menuju state tujuan (misalnya, Z-K-L-M-O-U adalah salah satu solusi).</li>
<li>Graph bisa bersifat tak berarah, yang berpotensi menyebabkan pengulangan node (misalnya, N-M-O-S-N).</li>
</ul>

<p>2. Pohon Pelacakan (Tree Search):</p>
<ul>
<li>Struktur pohon (Tree) digunakan untuk menyelidiki node dan menghindari perulangan.</li>
<li>Istilah dalam Pohon:
<ul>
<li>Akar (Root): Node awal pada Tahap-0.</li>
<li>Anak (Successor): Percabangan dari sebuah node.</li>
<li>Predecessor: Node awal (induk).</li>
<li>Daun (Leaf): Node yang tidak memiliki anak dan menandai akhir dari sebuah tree.</li>
</ul>
</li>
</ul>

<p>3. Tree AND/OR:</p>
<ul>
<li>Representasi untuk memecahkan masalah yang kompleks:
<ul>
<li>Jika masalah Z diselesaikan melalui K, L, atau M, maka hanya salah satu yang perlu dipecahkan (OR node).</li>
<li>Jika masalah Z hanya bisa dipecahkan melalui K, dan L, dan M, maka semua alternatif K, L, dan M harus diselesaikan terlebih dahulu (AND node).</li>
</ul>
</li>
</ul>

<h3>D. Searching sebagai Teknik Pemecahan Masalah</h3>
<ul>
<li>Searching (Pencarian) adalah salah satu teknik utama untuk menemukan solusi dalam ruang keadaan yang telah direpresentasikan.</li>
<li>Hal-hal yang dipertimbangkan dalam membangun sistem penyelesaian masalah:
<ul>
<li>Menganalisis persoalan dan teknik penyelesaian yang cocok.</li>
<li>Merepresentasikan knowledge terhadap masalah yang ada.</li>
<li>Mengambil metode terbaik untuk menyelesaikan persoalan.</li>
<li>Selain searching, teknik pemecahan masalah lainnya termasuk reasoning (penalaran) dan planning (memecah problem ke dalam bagian terkecil).</li>
</ul>
</li>
</ul>`,
  },

  {
    id: 3,
    title: "Metode Searching",
    content: `<h3>Pengertian Metode Searching</h3>
<p>Metode searching merupakan teknik dalam kecerdasan buatan yang digunakan untuk mencari solusi dari suatu permasalahan dengan menelusuri ruang keadaan (state space). Proses pencarian dilakukan dari kondisi awal hingga ditemukan kondisi tujuan (goal) dengan mengikuti aturan tertentu.</p>

<h3>Blind Search (Pencarian Buta)</h3>
<p>Blind search adalah metode pencarian yang dilakukan tanpa menggunakan informasi tambahan atau petunjuk arah menuju solusi. Algoritma hanya menelusuri kemungkinan yang ada secara bertahap sampai tujuan ditemukan. Beberapa metode yang termasuk dalam blind search antara lain Breadth First Search (BFS), Depth First Search (DFS), Depth Limited Search (DLS), Uniform Cost Search (UCS), Iterative Deepening Search (IDS), dan Bi-Directional Search (BDS).</p>

<h3>Breadth First Search (BFS)</h3>
<p>Breadth First Search merupakan salah satu metode blind search yang bekerja dengan cara mengunjungi simpul berdasarkan tingkat atau level. Semua node pada level yang sama akan diperiksa terlebih dahulu sebelum melanjutkan ke level berikutnya. Proses pencarian dilakukan dari kiri ke kanan pada setiap level.</p>

<h3>Cara Kerja BFS</h3>
<p>Algoritma BFS menggunakan struktur data antrian (queue). Langkah-langkahnya dimulai dengan memasukkan node awal ke dalam antrian. Selanjutnya, node dikeluarkan satu per satu untuk diperiksa apakah merupakan tujuan. Jika belum mencapai tujuan, maka seluruh anak dari node tersebut dimasukkan ke antrian. Proses ini terus berulang sampai node tujuan ditemukan atau antrian kosong.</p>

<h3>Proses BFS dengan Iterasi</h3>
<p>Dalam penerapannya, BFS dilakukan melalui beberapa iterasi. Pada setiap iterasi, satu node diambil dari antrian dan diperiksa. Jika node tersebut bukan tujuan, maka node-node anaknya akan dimasukkan ke antrian. Proses ini dilakukan secara berurutan hingga akhirnya ditemukan node tujuan dan jalur solusi dapat ditentukan dari node awal ke node tujuan.</p>

<h3>Kelebihan dan Kekurangan BFS</h3>
<p>Kelebihan BFS adalah mampu menjamin ditemukannya solusi jika solusi tersebut ada, serta memberikan jalur solusi yang paling pendek atau optimal. Namun, BFS memiliki kekurangan karena membutuhkan memori yang besar dan waktu yang lebih lama, terutama jika jumlah node dalam ruang pencarian sangat banyak.</p>

<h3>Heuristic Search (Pengantar)</h3>
<p>Heuristic search merupakan metode pencarian yang menggunakan perkiraan atau nilai heuristik untuk membantu menentukan node yang lebih dekat ke tujuan. Dengan adanya heuristik, proses pencarian dapat berjalan lebih cepat dibandingkan blind search. Beberapa contoh metode heuristic search antara lain hill climbing, best first search, greedy search, dan algoritma A*.</p>

<h3>Kesimpulan</h3>
<p>Metode searching adalah bagian penting dalam kecerdasan buatan untuk menyelesaikan berbagai permasalahan. Breadth First Search (BFS) sebagai salah satu metode blind search mudah dipahami dan mampu memberikan solusi yang lengkap dan optimal, meskipun memiliki keterbatasan dalam penggunaan memori dan waktu. Oleh karena itu, pemahaman BFS menjadi dasar sebelum mempelajari metode pencarian yang lebih lanjut.</p>`,
  },

  {
    id: 4,
    title: "Depth First Search",
    content: `<h3>Pengertian Depth First Search (DFS)</h3>
<p>Depth First Search (DFS) merupakan salah satu metode pencarian dalam kecerdasan buatan yang termasuk ke dalam blind search. Metode ini melakukan pencarian dengan cara menelusuri setiap cabang secara mendalam terlebih dahulu, sebelum berpindah ke cabang lain yang selevel. Proses pencarian dilakukan terus hingga ditemukan node tujuan (goal).</p>

<h3>Konsep Dasar DFS</h3>
<p>Pada DFS, pencarian dimulai dari node awal atau akar, kemudian langsung menuju ke salah satu anaknya hingga mencapai node paling dalam. Jika pada jalur tersebut tidak ditemukan tujuan, maka sistem akan kembali (backtracking) ke node sebelumnya untuk mencoba jalur lain. Karena itu, DFS sering disebut sebagai pencarian berbasis jalur (path-based search).</p>

<h3>Struktur Data yang Digunakan</h3>
<p>DFS menggunakan stack (tumpukan) sebagai struktur data utama. Prinsip kerja stack adalah Last In First Out (LIFO), artinya node yang terakhir dimasukkan akan menjadi node pertama yang dikeluarkan. Stack digunakan untuk menyimpan node-node yang telah dikunjungi selama proses pencarian berlangsung.</p>

<h3>Langkah Kerja Algoritma DFS</h3>
<p>Tahapan umum algoritma Depth First Search adalah sebagai berikut:</p>
<ol>
<li>Node awal dimasukkan ke dalam stack.</li>
<li>Node teratas pada stack dikeluarkan dan diperiksa apakah merupakan tujuan.</li>
<li>Jika node tersebut adalah tujuan, pencarian dihentikan.</li>
<li>Jika bukan tujuan, maka semua node anaknya dimasukkan ke dalam stack.</li>
<li>Proses diulang sampai tujuan ditemukan atau stack kosong.</li>
</ol>

<h3>Proses DFS dengan Iterasi</h3>
<p>Dalam contoh pada modul, pencarian dimulai dari node T sebagai titik awal dan bertujuan mencapai node Q sebagai goal. Pencarian dilakukan melalui beberapa iterasi dengan menelusuri satu jalur secara penuh terlebih dahulu. Setiap node yang memiliki anak akan disimpan sebagai penyelesaian sementara, sedangkan node yang tidak memiliki anak akan dilewati. Proses ini berlanjut hingga akhirnya node Q ditemukan dan pencarian dihentikan.</p>

<h3>Hasil Jalur Penyelesaian</h3>
<p>Setelah node tujuan ditemukan, jalur solusi dapat ditelusuri kembali dari node tujuan ke node awal. Berdasarkan contoh pada modul, jalur penyelesaian yang diperoleh adalah:</p>
<p>T → L → O → Q</p>

<h3>Kelebihan Depth First Search</h3>
<p>DFS memiliki beberapa kelebihan, antara lain:</p>
<ul>
<li>Penggunaan memori relatif kecil karena hanya menyimpan node yang sedang aktif.</li>
<li>Proses pencarian lebih cepat pada masalah tertentu, terutama jika solusi berada pada kedalaman awal.</li>
</ul>

<h3>Kekurangan Depth First Search</h3>
<p>Selain kelebihan, DFS juga memiliki kekurangan, yaitu:</p>
<ul>
<li>Tidak selalu menemukan solusi yang paling optimal atau terpendek.</li>
<li>Berisiko terjebak pada jalur yang sangat dalam jika tidak ada pembatasan kedalaman.</li>
<li>Dalam satu proses pencarian, DFS biasanya hanya menghasilkan satu solusi.</li>
</ul>

<h3>Kesimpulan</h3>
<p>Depth First Search merupakan metode pencarian yang sederhana dan efisien dari sisi penggunaan memori. DFS cocok digunakan pada permasalahan dengan ruang keadaan yang tidak terlalu besar dan kedalaman solusi yang jelas. Namun, karena tidak menjamin solusi terbaik, DFS sering digunakan sebagai dasar sebelum menerapkan metode pencarian yang lebih kompleks.</p>`,
  },

  {
    id: 5,
    title: "Representasi Logika Dan Jaringan Semantik",
    content: `<h3>Pengertian Representasi Pengetahuan</h3>
<p>Representasi pengetahuan merupakan cara untuk menggambarkan atau menyimpan pengetahuan agar dapat dipahami dan diproses oleh sistem kecerdasan buatan. Dengan adanya representasi pengetahuan, proses pengambilan keputusan menjadi lebih mudah dan terstruktur. Bentuk representasi pengetahuan meliputi logika, jaringan semantik, frame, script, dan sistem berbasis aturan.</p>

<h3>Representasi Logika</h3>
<p>Representasi logika adalah bentuk representasi pengetahuan yang paling tua dan paling dasar. Logika digunakan untuk menarik kesimpulan berdasarkan fakta-fakta yang sudah ada. Dalam logika, premis digunakan sebagai masukan (input), sedangkan kesimpulan merupakan keluaran (output). Logika berhubungan dengan aturan, simbol, serta penalaran yang bersifat sistematis.</p>

<h3>Proposisi dalam Logika</h3>
<p>Proposisi merupakan kalimat deklaratif yang hanya memiliki dua nilai kebenaran, yaitu benar (true) atau salah (false). Proposisi biasanya dilambangkan dengan huruf seperti p, q, r, dan sebagainya. Proposisi dibedakan menjadi proposisi atomik (tunggal) dan proposisi majemuk (gabungan dari beberapa proposisi).</p>

<h3>Operator Logika</h3>
<p>Operator logika digunakan untuk menghubungkan satu atau lebih proposisi. Operator yang umum digunakan antara lain:</p>
<ul>
<li>Negasi (¬), yaitu ingkaran dari suatu proposisi.</li>
<li>Konjungsi (AND / ∧), bernilai benar jika kedua proposisi benar.</li>
<li>Disjungsi (OR / ∨), bernilai benar jika salah satu atau kedua proposisi benar.</li>
<li>Implikasi (→), berbentuk pernyataan "jika… maka…".</li>
<li>Biimplikasi (↔), menyatakan hubungan "jika dan hanya jika".</li>
</ul>

<h3>Tabel Kebenaran</h3>
<p>Tabel kebenaran digunakan untuk menunjukkan nilai kebenaran suatu proposisi majemuk berdasarkan semua kemungkinan nilai proposisi penyusunnya. Tabel ini membantu dalam menganalisis apakah suatu pernyataan atau argumen bernilai benar atau salah secara logis.</p>

<h3>Tautologi dan Validitas Argumen</h3>
<p>Tautologi adalah pernyataan logika yang selalu bernilai benar, apa pun nilai kebenaran proposisi penyusunnya. Jika suatu argumen merupakan tautologi, maka argumen tersebut dianggap valid. Sebaliknya, jika terdapat kondisi di mana pernyataan bernilai salah, maka argumen tersebut tidak valid.</p>

<h3>Inferensi Logika</h3>
<p>Inferensi merupakan proses penarikan kesimpulan berdasarkan premis yang ada. Dalam logika proposisi, inferensi dilakukan dengan mengikuti aturan-aturan tertentu yang disebut hukum inferensi. Inferensi sangat penting dalam kecerdasan buatan karena memungkinkan sistem untuk "berpikir" dan mengambil keputusan secara logis.</p>

<h3>Jaringan Semantik</h3>
<p>Jaringan semantik adalah metode representasi pengetahuan yang menggunakan node (simpul) dan arc (hubungan) untuk menggambarkan hubungan antar objek atau konsep. Node mewakili objek atau konsep, sedangkan arc menunjukkan hubungan seperti "adalah", "bekerja untuk", atau "mempunyai".</p>

<h3>Penyusunan Jaringan Semantik</h3>
<p>Penyusunan jaringan semantik dilakukan secara bertahap dengan menambahkan objek dan hubungan sesuai informasi yang diketahui. Contohnya, hubungan antara manusia, pekerjaan, organisasi, dan atribut fisik dapat digambarkan dalam bentuk jaringan yang saling terhubung sehingga mudah dipahami.</p>

<h3>Perluasan dan Pewarisan Jaringan Semantik</h3>
<p>Jaringan semantik dapat dikembangkan dengan menambahkan node baru yang lebih umum atau lebih khusus. Proses ini disebut pewarisan (inheritance), di mana suatu objek dapat mewarisi sifat dari objek yang lebih umum. Dengan pewarisan, informasi tidak perlu dituliskan berulang kali.</p>

<h3>Operasi pada Jaringan Semantik</h3>
<p>Jaringan semantik memungkinkan pengguna untuk mengajukan pertanyaan berdasarkan hubungan yang ada. Dengan menelusuri node dan hubungan, sistem dapat memberikan jawaban atas pertanyaan tertentu, misalnya mengenai sifat, atribut, atau hubungan suatu objek.</p>

<h3>Kesimpulan</h3>
<p>Representasi logika dan jaringan semantik merupakan dua cara penting dalam merepresentasikan pengetahuan pada kecerdasan buatan. Representasi logika menekankan pada penalaran dan aturan formal, sedangkan jaringan semantik menekankan pada hubungan antar konsep. Keduanya saling melengkapi dalam membantu sistem kecerdasan buatan memahami dan mengolah informasi.</p>`,
  },

  {
    id: 6,
    title: "Representasi Frame, Script Dan Aturan Produksi",
    content: `<h3>Pengertian Representasi Pengetahuan</h3>
<p>Representasi pengetahuan adalah cara menyimpan dan menggambarkan pengetahuan agar dapat dipahami serta diproses oleh sistem kecerdasan buatan. Pada pertemuan ini, bentuk representasi pengetahuan yang dibahas meliputi frame (bingkai), script (naskah), dan aturan produksi (production rule).</p>

<h3>Frame (Bingkai)</h3>
<p>Frame merupakan bentuk representasi pengetahuan yang diperkenalkan oleh Marvin Minsky pada tahun 1970. Frame digunakan untuk merepresentasikan suatu objek dalam bentuk struktur data yang berisi atribut (slot) dan nilai (value). Frame membantu menggambarkan hubungan antar objek secara terstruktur dan hierarkis.</p>

<h3>Komponen dalam Frame</h3>
<p>Frame memiliki beberapa informasi penting, antara lain identitas objek, hubungan dengan frame lain, deskripsi atribut, nilai default, serta pembaruan informasi. Slot dalam frame dapat berupa values, defaults, ranges, if-added, if-needed, dan others, yang masing-masing memiliki fungsi tertentu dalam pengolahan pengetahuan.</p>

<h3>Hierarki dan Pewarisan Frame</h3>
<p>Frame dapat disusun dalam bentuk hierarki dari yang paling umum hingga yang paling spesifik. Dalam hierarki ini, sebuah frame dapat mewarisi sifat atau atribut dari frame induknya. Contohnya pada hierarki UNPAM, Teknik Informatika mewarisi sifat dari UNPAM, lalu memiliki anak seperti Jaringan dan Programming dengan atribut tambahan masing-masing.</p>

<h3>Contoh Penerapan Frame</h3>
<p>Modul memberikan contoh penerapan frame pada struktur UNPAM dan Yayasan Sasmita Jaya. Setiap objek seperti Teknik Informatika, Jaringan, Programming, SMK, Mekanik, dan Komputer direpresentasikan dalam bentuk tabel frame yang berisi nama, orang tua, anak, tools, dan atribut tambahan lainnya. Contoh ini menunjukkan bagaimana frame memudahkan pengelolaan pengetahuan yang kompleks.</p>

<h3>Script (Naskah)</h3>
<p>Script adalah representasi pengetahuan yang menggambarkan urutan peristiwa atau aktivitas berdasarkan pengalaman. Script mirip dengan frame, tetapi lebih fokus pada alur kejadian. Script biasanya digunakan untuk menggambarkan aktivitas sehari-hari yang memiliki tahapan tertentu.</p>

<h3>Bagian-bagian Script</h3>
<p>Script terdiri dari beberapa bagian, yaitu track (jalur), kondisi input, prop (pendukung), role (peran), scene (langkah atau adegan), dan hasil. Setiap bagian menjelaskan peran, objek, serta urutan kegiatan dari awal hingga akhir suatu peristiwa.</p>

<h3>Contoh Script dalam Modul</h3>
<p>Modul memberikan contoh script pendaftaran mahasiswa baru UNPAM dan kelulusan mahasiswa. Script tersebut menjelaskan tahapan secara runtut, mulai dari pendaftaran, pengisian data, pembayaran, ujian, hingga hasil akhir berupa kelulusan. Contoh ini menunjukkan bagaimana script membantu sistem memahami proses yang berurutan.</p>

<h3>Aturan Produksi (Production Rule)</h3>
<p>Aturan produksi merupakan bentuk representasi pengetahuan yang menggunakan pola IF–THEN (jika–maka). Jika suatu kondisi terpenuhi, maka sistem akan menghasilkan kesimpulan atau tindakan tertentu. Aturan produksi sering digunakan dalam sistem pakar.</p>

<h3>Contoh Aturan Produksi</h3>
<p>Contoh aturan produksi dalam modul antara lain:</p>
<ul>
<li>Jika ingin kuliah murah, maka mendaftarlah di Universitas Pamulang.</li>
<li>Jika ingin sukses, maka berjuanglah.</li>
</ul>
<p>Aturan seperti ini menunjukkan hubungan sebab-akibat yang sederhana namun jelas.</p>

<h3>Kelebihan dan Kekurangan Aturan Produksi</h3>
<p>Kelebihan aturan produksi adalah sederhana, mudah diimplementasikan, dan dapat digunakan untuk berbagai kasus. Namun, kekurangannya yaitu dapat menjadi tidak efisien jika jumlah aturan terlalu banyak dan sulit digunakan untuk pengetahuan yang sangat kompleks.</p>

<h3>Kesimpulan</h3>
<p>Frame, script, dan aturan produksi merupakan metode penting dalam representasi pengetahuan pada kecerdasan buatan. Frame cocok untuk menggambarkan objek dan hubungan secara hierarkis, script digunakan untuk menjelaskan urutan peristiwa, sedangkan aturan produksi efektif untuk pengambilan keputusan berbasis kondisi. Ketiga metode ini saling melengkapi dalam membangun sistem kecerdasan buatan yang lebih cerdas dan terstruktur.</p>`,
  },

  {
    id: 7,
    title: "Pengantar Expert System (Sistem Pakar)",
    content: `<h3>1. Pengertian Expert System</h3>
<p>Sistem pakar atau expert system merupakan sistem komputer yang dirancang untuk meniru kemampuan seorang pakar dalam menyelesaikan permasalahan tertentu. Sistem ini didasarkan pada pemodelan ilmu dan pengalaman pakar yang disimpan dalam basis pengetahuan dan dapat digunakan baik oleh pakar maupun orang awam sebagai asisten dalam pengambilan keputusan. Komponen penting dalam pembuatan sistem pakar meliputi aturan, pakar, inferensia, ilmu yang diterapkan, programmer, sistem analis, dan pengguna.</p>

<h3>2. Representasi Sistem Pakar</h3>
<p>Representasi ini menggambarkan bagaimana ilmu dan pengalaman dari pakar disimpan dan diterapkan dalam sistem. Sistem ini memiliki komponen seperti basis pengetahuan yang tersusun dari fakta dan aturan. Ilmu dari pakar biasanya berbentuk explicit knowledge (pengetahuan tertulis dan terdokumentasi) dan tacit knowledge (pengetahuan pengalaman). Pengetahuan disimpan dalam basis pengetahuan dan diakses melalui mesin pengolah fakta yang mengontrol proses konsultasi dan pengambilan keputusan.</p>

<h3>3. Komponen dan Bagian Utama Sistem Pakar</h3>
<p>Komponen utama dari sistem ini meliputi:</p>
<ul>
<li><strong>Antarmuka (Interface):</strong> Untuk komunikasi antara pengguna dan sistem, terbagi menjadi input (expert system sebagai input) dan output (hasil solusi dalam bentuk GUI atau teks).</li>
<li><strong>Basis Pengetahuan (Knowledge Base):</strong> Tempat menyimpan fakta dan aturan yang berfungsi sebagai jantung dari sistem.</li>
<li><strong>Mesin Inferensi (Inference Engine):</strong> Mesin yang melakukan proses logika dan penalaran berdasarkan aturan dan fakta untuk mencapai kesimpulan.</li>
<li><strong>Mesin Pengembang (Development Engine):</strong> Untuk memprogram aturan menggunakan bahasa pemrograman (seperti Lisp, Prolog) atau melalui sistem shell.</li>
<li><strong>Pengguna dan Perancang Pengetahuan:</strong> Pengguna utama dan perancang yang mengelola dan mengembangkan sistem.</li>
</ul>

<h3>4. Konsep Dasar Expert System</h3>
<p>Menurut buku karya Sutojo T. dan rekan, expert system merupakan kumpulan pengetahuan dari proses belajar, membaca, dan berlatih yang diperoleh dari pakar. Pengetahuan ini terdiri dari:</p>
<ul>
<li>Permasalahan sebagai fakta.</li>
<li>Teori dan aturan terkait.</li>
<li>Strategi menyelesaikan masalah, termasuk heuristic dan meta-knowledge.</li>
<li>Sistem ini mampu melakukan reasoning khusus dan gabungan (forward chaining, backward chaining, dan campuran).</li>
</ul>

<h3>5. Proses Transfer Pengetahuan</h3>
<p>Proses ini meliputi:</p>
<ul>
<li>Pengambilan pengetahuan dari pakar (otodidak melalui buku, pengalaman, dan wawancara).</li>
<li>Penerapan oleh programmer dan analis.</li>
<li>Inferensia untuk menyelesaikan masalah.</li>
<li>Transfer kepada pengguna agar dapat memanfaatkannya.</li>
</ul>

<h3>6. Bentuk Eksistensi Sistem Pakar</h3>
<p>Terdapat empat bentuk sistem pakar:</p>
<ul>
<li><strong>Mandiri:</strong> Sistem dapat beroperasi sendiri tanpa tergantung sistem lain.</li>
<li><strong>Bergabung:</strong> Menggunakan algoritma tertentu untuk diagnosis.</li>
<li><strong>Tergantung Software Lain:</strong> Menggunakan database untuk penyimpanan pengetahuan.</li>
<li><strong>Pengabdian:</strong> Bagian dari sistem komputer tertentu untuk tugas khusus.</li>
</ul>

<h3>7. Komponen Utama dalam Mengembangkan Sistem Pakar:</h3>
<ul>
<li><strong>Antarmuka:</strong> Sebagai media komunikasi input dan output.</li>
<li><strong>Basis Pengetahuan:</strong> Fakta dan aturan.</li>
<li><strong>Mesin Inferensi:</strong> Melakukan reasoning dan penarikan kesimpulan.</li>
<li><strong>Development Engine:</strong> Pemrograman aturan menggunakan bahasa tertentu atau shell khusus.</li>
</ul>

<h3>8. Konsep Dasar dan Strategi Penyelesaian Masalah</h3>
<p>Sistem pakar menggunakan strategi reasoning:</p>
<ul>
<li><strong>Forward chaining:</strong> Memulai dari fakta dan mengaplikasikan aturan untuk mencapai kesimpulan.</li>
<li><strong>Backward chaining:</strong> Mulai dari kesimpulan yang diinginkan dan menelusurikan kembali dari aturan.</li>
<li><strong>Campuran:</strong> Gabungan keduanya sesuai kebutuhan.</li>
</ul>

<h3>9. Karakteristik Sistem Pakar</h3>
<ul>
<li>Dapat menyelesaikan permasalahan kompleks secara cepat dan akurat.</li>
<li>Memiliki kemampuan menjelaskan solusi dan mengembangkan pengetahuan.</li>
<li>Menyimpan aturan dan fakta serta dapat memperbaharui knowledge base secara dinamis.</li>
</ul>

<h3>10. Aplikasi Sistem Pakar</h3>
<p>Sistem ini cocok digunakan di berbagai bidang seperti diagnosis penyakit (kardiovaskular, mata), prediksi kualitas produk tekstil, diagnosis hewan, perancangan bangunan, dan lain-lain.</p>

<h3>11. Kesimpulan</h3>
<p>Expert system adalah sistem yang mendigitalkan kecerdasan dan pengalaman pakar. Dengan mengintegrasikan komponen-komponen seperti basis pengetahuan, mesin inferensi, antarmuka, dan pengembang, sistem ini mampu membantu manusia dalam pengambilan keputusan yang kompleks, mempercepat proses diagnosis, prediksi, dan solusi masalah lain.</p>`,
  },

  {
    id: 8,
    title: "Struktur Expert System (Sistem Pakar) Dan Tim Pengembang",
    content: `<h3>1. Pengertian dan Struktur Sistem Pakar</h3>
<p>Sistem pakar (expert system) adalah suatu program komputer yang meniru kemampuan seorang pakar dalam memecahkan masalah tertentu.</p>

<p>Struktur utama dari sistem pakar terdiri dari dua lingkungan utama:</p>

<p>Lingkungan pengembangan: digunakan oleh para pakar dan knowledge engineer untuk mengumpulkan, memperbaiki, dan merepresentasikan pengetahuan ke dalam basis data pengetahuan.</p>

<p>Lingkungan konsultasi: digunakan oleh pengguna (user) untuk berkonsultasi dengan sistem melalui antarmuka pengguna dan mendapatkan solusi atau rekomendasi berdasarkan pengetahuan yang tersimpan.</p>

<h3>2. Komponen Struktur Sistem Pakar</h3>

<p>Akuisisi Pengetahuan: proses pengumpulan pengetahuan dari berbagai sumber seperti pakar, buku, internet, dan lainnya, yang kemudian dibentuk menjadi basis pengetahuan.</p>

<p>Basic Knowledge (Pengetahuan Dasar): berisi fakta dan aturan (rules). Fakta adalah kondisi nyata dari permasalahan, sedangkan aturan merupakan metode pemecahan masalah yang dibuat dari fakta tersebut.</p>

<p>Mesin Inferensi (Inference Machine): komponen utama yang melakukan penalaran menggunakan aturan dan fakta yang tersedia. Teknik yang digunakan meliputi:</p>

<p>Forward chaining: mulai dari fakta, mencari aturan yang relevan untuk mencapai solusi.</p>

<p>Backward chaining: dimulai dari goal yang ingin dicapai, kemudian mencari fakta yang mendukungnya.</p>

<p>Blackboard (Daerah Memori): tempat penyimpanan informasi sementara yang berisi rencana, agenda, dan solusi.</p>

<p>Antarmuka Pengguna (User Interface): menyediakan komunikasi antara sistem dan pengguna dalam bentuk tampilan grafis, menu, dan gambar agar pengguna mudah memahami.</p>

<h3>3. Tim Pengembang Sistem Pakar</h3>

<p>Pengembangan sebuah sistem pakar melibatkan tim yang terdiri dari:</p>

<p>Project Manager: pemimpin proyek yang mengelola seluruh proses pengembangan.</p>

<p>Knowledge Engineer: bertugas mengumpulkan, memodelkan pengetahuan, dan menguji sistem.</p>

<p>Programmer: yang menulis kode atau perangkat lunak sesuai kebutuhan sistem.</p>

<p>Domain Expert (Pakar Domain): pakar bidang tertentu yang memberikan pengetahuan dan keahlian yang akan dimasukkan ke dalam sistem, misalnya dokter hewan untuk sistem pendeteksi penyakit hewan.</p>

<p>End User (Pengguna Akhir): orang yang memakai sistem untuk mendapatkan solusi atau keputusan.</p>

<h3>4. Representasi Pengetahuan dengan Rule</h3>

<p>Pengetahuan direpresentasikan dalam bentuk rules yang terdiri dari kondisi (if) dan kesimpulan (then).</p>

<p>Penggunaan operator logika seperti AND, OR untuk menghubungkan beberapa fakta dalam aturan.</p>

<p>Contoh rule:</p>

<p>IF R1 AND R2 THEN O</p>

<p>IF R1 OR R2 THEN O</p>

<p>Fakta dapat menghasilkan satu atau lebih kesimpulan yang berbeda tergantung aturan yang berlaku.</p>

<h3>5. Teknik Inferensia</h3>

<p>Forward Chaining:</p>

<p>Dimulai dari fakta yang diketahui, kemudian mencari aturan yang sesuai untuk mengeksekusi dan menambahkan fakta baru ke memori.</p>

<p>Contoh proses: fakta awal memicu aturan tertentu, yang kemudian menghasilkan fakta baru yang memicu aturan lain sampai goal tercapai.</p>

<p>Backward Chaining:</p>

<p>Dimulai dari goal yang ingin dicapai, kemudian mencari fakta pendukungnya secara mundur.</p>

<p>Cocok untuk kasus dimana kita ingin membuktikan apakah suatu kondisi benar atau tidak.</p>

<h3>6. Contoh Implementasi dan Studi Kasus</h3>

<p>Disertakan contoh sistem pakar untuk diagnosis penyakit dengan rule tertentu dan proses inference yang dilakukan secara berurutan.</p>

<p>Penjelasan proses iteratif forward chaining dari fakta-fakta awal menuju kesimpulan akhir.</p>

<h3>7. Penelitian dan Aplikasi Sistem Pakar</h3>

<p>Berbagai penelitian yang menggunakan sistem pakar di bidang auditing, kontrol kualitas, dan kedokteran.</p>

<p>Studi kasus meliputi diagnosa penyakit, analisis kerusakan perangkat, dan penanganan medis menggunakan fuzzy rules.</p>`,
  },

  {
    id: 9,
    title: "Ketidakpastian Expert System (Sistem Pakar) Berbasis Rule",
    content: `<h3>Pengertian logika fuzzy</h3>
<p>Logika fuzzy adalah cabang AI yang berkembang pesat untuk menangkap ketidakpastian dan kelenturan dalam representasi pengetahuan.</p>
<p>Aplikasi luas: transportasi (kendaraan tanpa pengemudi), peralatan rumah tangga (sensor kualitas kotoran pada mesin cuci, AC yang menyesuaikan suhu), industri otomotif, pengatur lalu lintas, pendidikan, dsb.</p>
<p>Konsep inti: representasi nilai antara 0 dan 1 (derajat kebenaran) sebagai perluasan dari himpunan klasik.</p>
<p>Struktur sistem fuzzy: masukan, proses, keluaran.</p>

<h3>Perbedaan Logika Fuzzy dan Logika Tegas</h3>
<p>Logika tegas (biasa) menggunakan nilai kebenaran 0 atau 1.</p>
<p>Logika fuzzy menggunakan rentang nilai antara 0 dan 1, mewakili derajat kebenaran.</p>
<p>Contoh ilustrasi perbedaan: evaluasi umur (dewasa) atau kelaikan suatu nilai yang tidak mutlak (mis. umur > 17 bisa dianggap dewasa dalam fuzzy, sedangkan tegas bisa memotong pada ambang tertentu).</p>

<h3>Himpunan fuzzy</h3>
<p>Himpunan fuzzy (fuzzy set) merepresentasikan variabel bahasa (linguistic variable) dengan fungsi keanggotaan.</p>
<p>Nilai keanggotaan berkisar antara 0 dan 1.</p>
<p>Contoh: rentang temperatur (dingin, sejuk, normal, hangat, panas) atau kategori umur (muda, parobaya, tua) dengan derajat keanggotaan berbeda.</p>
<p>Representasi keanggotaan bisa divisualisasikan sebagai kurva keanggotaan (mis. kurva segitiga, kurva trapezium, kurva bahu, dll).</p>

<h3>Dasar logika fuzzy</h3>
<p>Fungsi Keanggotaan (Membership Function)</p>
<p>Menentukan derajat keanggotaan suatu input x ke sebuah himpunan fuzzy.</p>
<p>Nilai keanggotaan berada dalam interval 0 hingga 1.</p>
<p>Empat bentuk umum fungsi keanggotaan yang sering dipakai: representasi linear naik, representasi linear turun, kurva segitiga, kurva trapezium, dan kurva bahu.</p>
<p>Contoh rumus umum:</p>
<p>Representasi linear naik: µ(x) = 0 jika x ≤ a; (x−a)/(b−a) jika a ≤ x ≤ b; 1 jika x ≥ b.</p>
<p>Representasi linear turun: µ(x) = 1 jika 0 ≤ x ≤ a; (b−x)/(b−a) jika a ≤ x ≤ b; 0 jika x ≥ b.</p>
<p>Representasi segitiga: kurva segitiga dengan titik ekstrem a, b, c.</p>
<p>Representasi trapezium: kurva trapezium dengan domain a, b, c, d.</p>
<p>Representasi bahu kiri/bahu kanan: kurva yang memiliki “bahu” di kiri atau kanan untuk menangkap region with plateau.</p>

<h3>Tahap umum dalam kontrol fuzzy: fuzzifikasi -> aturan fuzzy (fuzzy rule base) -> inference engine -> defuzzifikasi.</h3>

<h3>Cara kerja kontrol logika fuzzy</h3>
<p>Empat tahap utama:</p>
<p>Fuzzifikasi: mengubah input tegas menjadi derajat keanggotaan dalam himpunan fuzzy.</p>
<p>Fuzzy rule base: aturan-aturan IF-THEN yang mengaitkan input dengan output.</p>
<p>Inference Engine: melakukan penalaran untuk menghasilkan keluaran fuzzy.</p>
<p>Defuzzifikasi: mengubah keluaran fuzzy menjadi nilai tegas (numerik) untuk tindakan atau keputusan.</p>
<p>Diagram blok kontrol logika fuzzy menggambarkan alur dari input ke output melalui fuzzifikasi, inferensi, dan defuzzifikasi.</p>

<h3>Aturan Dasar Fuzzy</h3>
<p>Aturan dasar menggunakan struktur IF ... THEN, misalnya:</p>
<p>JIKA ruangan suhu panas, MAKA kecepatan kipas tinggi, dengan penggunaan variabel dan nilai fuzzy.</p>
<p>Jika melibatkan pakar, perhitungan nilai fuzzy dilakukan melalui evaluasi aturan fuzzy dalam matriks atau bentuk alur kompatibel dengan sistem fuzzy.</p>`,
  },

  {
    id: 10,
    title: "Logika Fuzzy",
    content: `<h3>Pengertian logika fuzzy</h3>
<p>Logika fuzzy adalah cabang AI yang berkembang pesat untuk menangkap ketidakpastian dan kelenturan dalam representasi pengetahuan.</p>
<p>Aplikasi luas: transportasi (kendaraan tanpa pengemudi), peralatan rumah tangga (sensor kualitas kotoran pada mesin cuci, AC yang menyesuaikan suhu), industri otomotif, pengatur lalu lintas, pendidikan, dsb.</p>
<p>Konsep inti: representasi nilai antara 0 dan 1 (derajat kebenaran) sebagai perluasan dari himpunan klasik.</p>
<p>Struktur sistem fuzzy: masukan, proses, keluaran.</p>

<h3>Perbedaan Logika Fuzzy dan Logika Tegas</h3>
<p>Logika tegas (biasa) menggunakan nilai kebenaran 0 atau 1.</p>
<p>Logika fuzzy menggunakan rentang nilai antara 0 dan 1, mewakili derajat kebenaran.</p>
<p>Contoh ilustrasi perbedaan: evaluasi umur (dewasa) atau kelaikan suatu nilai yang tidak mutlak (mis. umur > 17 bisa dianggap dewasa dalam fuzzy, sedangkan tegas bisa memotong pada ambang tertentu).</p>

<h3>Himpunan fuzzy</h3>
<p>Himpunan fuzzy (fuzzy set) merepresentasikan variabel bahasa (linguistic variable) dengan fungsi keanggotaan.</p>
<p>Nilai keanggotaan berkisar antara 0 dan 1.</p>
<p>Contoh: rentang temperatur (dingin, sejuk, normal, hangat, panas) atau kategori umur (muda, parobaya, tua) dengan derajat keanggotaan berbeda.</p>
<p>Representasi keanggotaan bisa divisualisasikan sebagai kurva keanggotaan (mis. kurva segitiga, kurva trapezium, kurva bahu, dll).</p>

<h3>Dasar logika fuzzy</h3>
<h4>Fungsi Keanggotaan (Membership Function)</h4>
<p>Menentukan derajat keanggotaan suatu input x ke sebuah himpunan fuzzy.</p>
<p>Nilai keanggotaan berada dalam interval 0 hingga 1.</p>
<p>Empat bentuk umum fungsi keanggotaan yang sering dipakai: representasi linear naik, representasi linear turun, kurva segitiga, kurva trapezium, dan kurva bahu.</p>
<p>Contoh rumus umum:</p>
<ul>
<li>Representasi linear naik: µ(x) = 0 jika x ≤ a; (x−a)/(b−a) jika a ≤ x ≤ b; 1 jika x ≥ b.</li>
<li>Representasi linear turun: µ(x) = 1 jika 0 ≤ x ≤ a; (b−x)/(b−a) jika a ≤ x ≤ b; 0 jika x ≥ b.</li>
<li>Representasi segitiga: kurva segitiga dengan titik ekstrem a, b, c.</li>
<li>Representasi trapezium: kurva trapezium dengan domain a, b, c, d.</li>
<li>Representasi bahu kiri/bahu kanan: kurva yang memiliki “bahu” di kiri atau kanan untuk menangkap region with plateau.</li>
</ul>
<p>Tahap umum dalam kontrol fuzzy: fuzzifikasi -> aturan fuzzy (fuzzy rule base) -> inference engine -> defuzzifikasi.</p>

<h3>Cara kerja kontrol logika fuzzy</h3>
<p>Empat tahap utama:</p>
<ol>
<li>Fuzzifikasi: mengubah input tegas menjadi derajat keanggotaan dalam himpunan fuzzy.</li>
<li>Fuzzy rule base: aturan-aturan IF-THEN yang mengaitkan input dengan output.</li>
<li>Inference Engine: melakukan penalaran untuk menghasilkan keluaran fuzzy.</li>
<li>Defuzzifikasi: mengubah keluaran fuzzy menjadi nilai tegas (numerik) untuk tindakan atau keputusan.</li>
</ol>
<p>Diagram blok kontrol logika fuzzy menggambarkan alur dari input ke output melalui fuzzifikasi, inferensi, dan defuzzifikasi.</p>

<h3>Aturan Dasar Fuzzy</h3>
<p>Aturan dasar menggunakan struktur IF ... THEN, misalnya:</p>
<p>JIKA ruangan suhu panas, MAKA kecepatan kipas tinggi, dengan penggunaan variabel dan nilai fuzzy.</p>
<p>Jika melibatkan pakar, perhitungan nilai fuzzy dilakukan melalui evaluasi aturan fuzzy dalam matriks atau bentuk alur kompatibel dengan sistem fuzzy.</p>`,
  },

  {
    id: 11,
    title: "Metode Penyelesaian Logika Fuzzy",
    content: `<h3>Tujuan</h3>
    <p>Mahasiswa mampu menganalisis menggunakan Linear Programming, metode Tsukamoto, dan metode Sugeno dalam konteks logika fuzzy.</p>

    <h3>1. Linear Programming</h3>
    <ul>
      <li><strong>Definisi:</strong> Linear programming sering digunakan untuk memecahkan berbagai permasalahan optimasi.</li>
      <li><strong>Keterbatasan:</strong> Pendekatan linier konvensional sering tidak cukup akurat untuk masalah yang bersifat samar, sehingga teori fuzzy diperkenalkan.</li>
      <li><strong>Peran dalam Fuzzy:</strong> Linear programming dipakai untuk mencari nilai optimal dengan memasukkan perbandingan fuzzy melalui ranking function dan parameter bilangan fuzzy.</li>
      <li><strong>Tujuan Awal:</strong> Mencari nilai optimal (mis. keuntungan maksimal dengan biaya minimal) sebelum diaplikasikan konsep fuzzy.</li>
      <li><strong>Aplikasi:</strong> Pemodelan matematika, industri (analisis kesalahan lalu lintas, pengaturan lampu), dan kontrol (AC, rice cooker, dsb.).</li>
    </ul>

    <h3>2. Logika Fuzzy</h3>
    <ul>
      <li><strong>Definisi:</strong> Menangani nilai yang samar; berbeda dengan logika biner (0/1), fuzzy memungkinkan derajat keanggotaan.</li>
      <li><strong>Sejarah:</strong> Diperkenalkan oleh Dr. Lotfi Zadeh (1965).</li>
      <li><strong>Kelebihan:</strong> Kemampuan bernalar secara linguistik tanpa perlu model matematis kompleks.</li>
      <li><strong>Contoh Awal:</strong> Mesin cuci adaptif Matsushita (1990) menggunakan logika fuzzy untuk mengenali kondisi cucian.</li>
    </ul>

    <h3>3. Metode Tsukamoto</h3>
    <p>Metode penalaran monoton yang menghasilkan himpunan fuzzy sebagai output dan melakukan defuzzifikasi menggunakan rata-rata terbobot.</p>
    <ol>
      <li>Fuzzifikasi input.</li>
      <li>Bangun basis pengetahuan dengan aturan IF-THEN.</li>
      <li>Hitung α-predikat untuk setiap rule (menggunakan fungsi min atau fungsi implikasi).</li>
      <li>Defuzzifikasi: hitung rata-rata terbobot hasil inferensi.</li>
    </ol>

    <h3>4. Metode Mamdani</h3>
    <p>Dikenal juga sebagai metode max-min (Mamdani, 1975). Tahapan umum:</p>
    <ol>
      <li>Membentuk himpunan fuzzy untuk variabel input/ output.</li>
      <li>Menyusun aturan (rule) dengan fungsi implikasi berbasis min.</li>
      <li>Komposisi aturan: menggunakan metode seperti Maximum, Additive (sum), atau Probabilistic OR (product).</li>
      <li>Defuzzifikasi untuk memperoleh nilai crisp, metode populer:
        <ul>
          <li>Centroid</li>
          <li>Bisector</li>
          <li>Mean of Maximum</li>
          <li>Largest of Maximum</li>
          <li>Smallest of Maximum</li>
        </ul>
      </li>
    </ol>

    <h3>5. Metode Sugeno (Takagi–Sugeno–Kang)</h3>
    <p>Mirip dengan Mamdani tetapi keluaran berupa fungsi matematika (singleton atau persamaan linear) bukan himpunan fuzzy.</p>
    <ul>
      <li><strong>Orde 0:</strong> consequent berupa konstanta (z = k).</li>
      <li><strong>Orde 1:</strong> consequent berupa fungsi linear (z = p1*Y1 + ... + pN*YN + q).</li>
      <li><strong>Tahapan:</strong> fuzzifikasi, implikasi (min atau product), dan defuzzifikasi dengan Weighted Average (WA):
        <p>WA = (a1*z1 + a2*z2 + ... + an*zn) / (a1 + a2 + ... + an)</p>
      </li>
      <li><strong>Aplikasi:</strong> Contoh: perhitungan kebutuhan kalori harian dengan variabel fuzzy (umur, berat, tinggi, suhu, aktivitas, latar penyakit) dan variabel crisp (gender).</li>
    </ul>

    <h3>Ringkasan</h3>
    <p>Metode penyelesaian logika fuzzy mencakup pendekatan optimasi (linear programming), metode inferensi seperti Tsukamoto dan Mamdani, serta metode Sugeno yang cocok untuk sistem berbasis fungsi matematis. Pemilihan metode bergantung pada kebutuhan interpretabilitas, kompleksitas, dan tujuan pengendalian atau pemodelan.</p>`,
  },

  {
    id: 12,
    title: "Aplikasi Logika Fuzzy",
    content: `<h3>Variabel Sistem Kontrol AC</h3>
<ul>
<li><strong>Kecepatan putar AC</strong>: 1000 – 5000 rpm</li>
<li><strong>Suhu ruangan</strong>: 100 – 600 K</li>
<li><strong>Frekuensi putar AC</strong>: 2000 – 7000 rpm</li>
</ul>
<h3>Aturan Fuzzy (Rule Base)</h3>
<ol>
<li>Jika <strong>suhu tinggi</strong> dan <strong>kecepatan lambat</strong> → frekuensi <strong>kecil</strong></li>
<li>Jika <strong>suhu rendah</strong> dan <strong>kecepatan lambat</strong> → frekuensi <strong>kecil</strong></li>
<li>Jika <strong>suhu tinggi</strong> dan <strong>kecepatan cepat</strong> → frekuensi <strong>kecil</strong></li>
<li>Jika <strong>suhu rendah</strong> dan <strong>kecepatan cepat</strong> → frekuensi <strong>besar</strong></li>
</ol>
<h3> Metode Penyelesaian</h3>
<h4>1. <strong>Metode Tsukamoto</strong></h4>
<ul>
<li><strong>Langkah</strong>: fuzzifikasi → pembentukan aturan → inferensi → defuzzifikasi (rata-rata terbobot).</li>
<li><strong>Contoh kasus</strong>: suhu 300 K, kecepatan 4000 rpm.</li>
<li><strong>Hasil</strong>: frekuensi putar AC ≈ <strong>4983 rpm</strong>.</li>
<li><strong>Karakteristik</strong>: setiap aturan menghasilkan output crisp, lalu digabungkan.</li>
</ul>
<h4>2. <strong>Metode Mamdani</strong></h4>
<ul>
<li><strong>Langkah</strong>: fuzzifikasi → aturan → inferensi (fungsi MIN) → defuzzifikasi (centroid).</li>
<li><strong>Contoh kasus</strong>: suhu 300 K, kecepatan 4000 rpm.</li>
<li><strong>Hasil</strong>: frekuensi putar AC ≈ <strong>4247,74 rpm</strong>.</li>
<li><strong>Karakteristik</strong>: hasil defuzzifikasi berupa nilai rata-rata pusat massa dari grafik.</li>
</ul>
<h4>3. <strong>Metode Sugeno</strong></h4>
<ul>
<li><strong>Langkah</strong>: fuzzifikasi → aturan → inferensi → defuzzifikasi (rata-rata terbobot persamaan linear).</li>
<li><strong>Contoh kasus</strong>: suhu 300 K, kecepatan 4000 rpm.</li>
<li><strong>Hasil</strong>: frekuensi putar AC ≈ <strong>4230 rpm</strong>.</li>
<li><strong>Karakteristik</strong>: output tiap aturan berupa fungsi linear, lebih sederhana untuk komputasi.</li>
</ul>
<h3> Perbandingan Hasil</h3>
<table border="1">
<tr><th>Metode</th><th>Proses Defuzzifikasi</th><th>Hasil Frekuensi (rpm)</th><th>Karakteristik Utama</th></tr>
<tr><td>Tsukamoto</td><td>Rata-rata terbobot</td><td>4983</td><td>Output crisp tiap aturan</td></tr>
<tr><td>Mamdani</td><td>Centroid</td><td>4247,74</td><td>Visualisasi grafik lebih jelas</td></tr>
<tr><td>Sugeno</td><td>Linear weighted avg</td><td>4230</td><td>Lebih efisien komputasi</td></tr>
</table>
`,
  },

  {
    id: 13,
    title: "Jaringan Syaraf Tiruan",
    content: `<h3>A. Penjelasan Materi</h3>

<h4>1) Jaringan Syaraf Tiruan (JST)</h4>
<ul>
<li>Asal-usul: Ditemukan oleh neurophysiologist Warren McCulloch dan logician Walter Pitts pada tahun 1943.</li>
<li>Inspirasi: Sistem syaraf biologi di otak, terutama sel syaraf dengan dendrit, axon, dan synapse.</li>
<li>Fungsi utama JST: Menyelesaikan masalah pengenalan pola dan klasifikasi.</li>
<li>Struktur umum:
<ul>
<li>Input disebut dendrits.</li>
<li>Output disebut axon.</li>
<li>Neuron-neuron terhubung melalui synapse.</li>
<li>Sinyal ditransmisikan secara electro-chemichal melalui batasan bernama threshold (nilai ambang).</li>
</ul>
</li>
<li>Catatan: JST sering disebut neural network.</li>
</ul>

<h4>2) Jenis-jenis Algoritma Pembelajaran dengan Supervisi</h4>
<ul>
<li>Menurut sumber yang dirujuk (Sutojo dkk., 2011), terdapat 7 algoritma pembelajaran dengan supervisi (tabel 13.1 pada modul).</li>
<li>Fokus modul ini adalah satu pendekatan pada algoritma supervisi, yaitu:
<ul>
<li>Hebb Rule Method (metode Hebb) sebagai salah satu algoritma pembelajaran dengan supervisi.</li>
</ul>
</li>
<li>Ringkasan pendek mengenai Hebb Rule:
<ul>
<li>Menggunakan bobot w dan bias secara iteratif.</li>
<li>Merupakan salah satu metode pertama dalam pembelajaran supervisi.</li>
<li>Jaringan dengan input dan output yang dipadukan dengan bias.</li>
<li>Arsitektur dasar yang digambarkan dalam gambar arsitektur Hebb Rule (X sebagai input, W sebagai bobot, net sebagai gabungan bobot-input, f net sebagai fungsi aktivasi, y sebagai output).</li>
</ul>
</li>
</ul>

<h3>B. Detil Implementasi Hebb Rule (Inti Konsep)</h3>
<ul>
<li>Rumus umum: Net = ∑(x_i w_i) + b</li>
<li>Pembaruan bobot/bias secara iteratif berdasarkan data latihan (contoh-contoh yang disajikan dalam tabel-tabel 13.2 hingga 13.8).</li>
<li>Contoh kasus yang dibahas meliputi:
<ul>
<li>Fungsi logika OR dengan input biner (dan juga versi bipolar).</li>
<li>Proses inisialisasi bobot dan bias, pembaruan pada tiap kasus data ke-1 hingga ke-4.</li>
<li>Hasil akhir bobot dan bias yang diperoleh (mis. w1, w2, b) serta nilai net dan keluaran f(net).</li>
</ul>
</li>
<li>Observasi penting:
<ul>
<li>Pada beberapa kasus, fungsi OR yang menggunakan input biner atau bipolar mungkin tidak dikenali dengan benar oleh jaringan pada konfigurasi tertentu, menunjukkan keterbatasan pendekatan Hebb untuk fungsi logika tertentu.</li>
</ul>
</li>
</ul>`,
  },

  {
    id: 14,
    title: "Delta Rule dan Perceptron",
    content: `<h3>1. <strong>Delta Rule</strong></h3>
<ul>
<li><strong>Tujuan:</strong> Memperbaiki bobot jaringan dengan cara meminimalkan error antara output jaringan (y) dan target (t).</li>
<li><strong>Rumus pembaruan bobot:</strong></li>
<p>\[ 𝑤baru = 𝑤 lama + 𝛼 (𝑡 − 𝑦) ⋅ 𝑋𝑖]</p>
<ul>
<li>\(X_i\): input</li>
<li>\(y\): output jaringan</li>
<li>\(t\): target</li>
<li>\(\𝛼\): learning rate</li>
</ul>
<li><strong>Proses berhenti:</strong> Jika error = 0 untuk semua data (epoch selesai).</li>
<li><strong>Contoh:</strong> Logika OR dengan input biner, learning rate 0,2, bobot awal \(w_1=0,1\), \(w_2=0,3\).  <br>Setelah beberapa epoch, bobot konvergen menjadi \(w_1=0,5\), \(w_2=0,5\).</li>
</ul>
<h3>2. <strong>Perceptron</strong></h3>
<ul>
<li><strong>Pencetus:</strong> Rosenblatt (1962), Minsky-Papert (1969).</li>
<li><strong>Tahapan:</strong></li>
<ol>
<li>Menentukan bobot dan bias awal.</li>
<li>Menghitung keluaran:</li>
<p>\[ 𝑦𝑖𝑛 = 𝑏 + ∑ 𝑥𝑖 𝑤𝑖]</p>
<li>Fungsi aktivasi bipolar:</li>
<ul>
<li>\(y = 1\), jika \(𝑦𝑖𝑛 > 0,5\)</li>
<li>\(y = 0\), jika \(-0,5 \leq 𝑦𝑖𝑛 \leq 0,5\)</li>
<li>\(y = -1\), jika \(𝑦𝑖𝑛 < -0,5\)</li>
</ul>
<li>Pembaruan bobot dan bias:</li>
<p>\[ w_i^{baru} = w_i^{lama} + \alpha \cdot t \cdot x_i \]</p>
<p>\[ b^{baru} = b^{lama} + \alpha \cdot t \]</p>
<p>Jika \(y = t\), bobot tidak berubah.</li>
</ol>
<li><strong>Contoh:</strong> Logika OR dengan target bipolar.  <br>Learning rate 0,8, bobot awal \(w_1=0, w_2=0, b=0\).  <br>Setelah 2 epoch, bobot berubah sesuai hasil perhitungan (misalnya \(w_1=1,6\), \(w_2=0,8\), \(b=-0,8\)).</li>
</ul>
<h2> Inti Materi</h2>
<ul>
<li><strong>Delta Rule</strong> → fokus pada <em>error correction</em> dengan supervisi, bobot diperbarui berdasarkan selisih target dan output.</li>
<li><strong>Perceptron</strong> → model dasar JST dengan bobot, bias, dan fungsi aktivasi bipolar.</li>
<li>Kedua metode digunakan untuk melatih jaringan sederhana agar mampu mengenali fungsi logika dasar (contoh: OR).</li>
</ul>`,
  },

  {
    id: 15,
    title: "Algoritma Backpropagation",
    content: `<h3>Alasan Utama Penggunaan Gradient Descent dalam Backpropagation</h3>
    <p>Alasan utama penggunaan metode penurunan gradien (gradient descent) dalam algoritma Backpropagation adalah untuk meminimalkan kuadrat error antara output jaringan dan target yang diinginkan. Gradient descent mencari gradien dari fungsi error terhadap bobot/bias, lalu memperbarui parameter jaringan ke arah yang mengurangi error tersebut.</p>

    <h3>Rangkuman Singkat Algoritma Backpropagation</h3>
    <p>Algoritma Backpropagation adalah metode untuk melatih jaringan saraf tiruan menggunakan gradient descent untuk meminimalkan kuadrat error.</p>

    <h4>Tahapan Utama</h4>
    <ol>
      <li><strong>Inisialisasi:</strong> bobot dan bias diinisialisasi secara acak. Tentukan learning rate (α), jumlah epoch, dan target error.</li>
      <li><strong>Umpan Maju (Forward Propagation):</strong> input dirambatkan melalui lapisan-lapisan, menghitung aktivasi tiap unit (mis. menggunakan fungsi sigmoid) hingga menghasilkan output jaringan.</li>
      <li><strong>Perhitungan Error:</strong> hitung galat output (mis. kuadrat error antara output dan target).</li>
      <li><strong>Perambatan Balik (Backpropagation):</strong> error dirambatkan mundur untuk menghitung nilai δ pada unit output dan unit tersembunyi, yang menunjukkan kontribusi tiap unit terhadap error.</li>
      <li><strong>Revisi Bobot dan Bias:</strong> gunakan nilai δ dan learning rate untuk menghitung koreksi (ΔW, ΔV) dan perbarui bobot/bias sehingga error berkurang.</li>
      <li><strong>Kondisi Berhenti:</strong> ulangi proses hingga error total mencapai ambang yang diinginkan atau epoch maksimum tercapai.</li>
    </ol>

    <h4>Contoh Singkat</h4>
    <p>Contoh umum adalah pelatihan jaringan untuk mengenali fungsi XOR menggunakan satu atau lebih epoch pelatihan, kemudian menguji seluruh dataset untuk memverifikasi bahwa jaringan belajar pola yang benar.</p>`,
  },

  {
    id: 16,
    title: "Algoritma Genetika",
    content: `<h3>A. Definisi Algoritma Genetika (AG)</h3>
    <p>Algoritma Genetika (AG) adalah teknik pencarian nilai optimal secara stokastik yang didasarkan pada seleksi alam. AG meniru proses evolusi: populasi kromosom, seleksi berdasarkan fitness, rekombinasi (crossover), dan mutasi untuk menemukan solusi yang baik.</p>

    <h3>B. Sejarah Singkat</h3>
    <p>Dikembangkan oleh John Holland (1970-an). Berasal dari ide evolusi biologis dan dikembangkan menjadi alat optimasi komputer untuk berbagai masalah.</p>

    <h3>C. Tahapan Umum</h3>
    <ol>
      <li>Inisialisasi populasi (biasanya acak).</li>
      <li>Evaluasi fitness setiap individu.</li>
      <li>Seleksi individu untuk pembentukan induk (roulette, tournament, dsb.).</li>
      <li>Crossover dan mutasi untuk menghasilkan keturunan.</li>
      <li>Regenerasi populasi dan ulangi sampai kriteria berhenti.</li>
    </ol>

    <h3>D. Kelebihan</h3>
    <ul>
      <li>Mampu menangani variabel diskrit/kontinu tanpa turunan.</li>
      <li>Melakukan pencarian global pada ruang solusi besar.</li>
      <li>Tahan terhadap jebakan minimum lokal (dengan parameter yang tepat).</li>
      <li>Dapat di-paralelisasi dan mengembalikan sekumpulan solusi baik (bukan satu saja).</li>
    </ul>

<h3>E. Contoh Studi Kasus</h3>
<p>Contoh: mencari maksimum fungsi <strong>F(x) = e<sup>-2x</sup> · sin(3x)</strong>. Implementasi bisa memakai representasi biner (kromosom bit) atau representasi real.</p>

<h3>Demo Algoritma Genetika</h3>
<div id="gaDemo">
  <p>Demo pencarian maksimum fungsi F(x) = e^{-2x} * sin(3x) pada interval [-2, 2].</p>
  <label>Ukuran Populasi: <input id="gaPop" type="number" value="40" min="4" max="200"></label><br>
  <label>Generasi: <input id="gaGens" type="number" value="80" min="1" max="500"></label><br>
  <label>Probabilitas Crossover: <input id="gaCross" type="number" step="0.01" value="0.7" min="0" max="1"></label><br>
  <label>Probabilitas Mutasi: <input id="gaMut" type="number" step="0.001" value="0.02" min="0" max="1"></label><br>
  <button id="gaStart">Jalankan GA</button>
  <p id="gaInfo">Klik tombol untuk menjalankan.</p>
  <canvas id="gaCanvas" width="400" height="200" style="border:1px solid #ccc;"></canvas>
</div>


`,
  },

  {
    id: 17,
    title: "Proses pada Algoritma Genetika",
    content: `<h3>1. Komponen Algoritma Genetika</h3>
<ul>
<li><strong>Teknik Pengkodean</strong>: Representasi gen dalam bentuk binary encoding, permutation encoding, value encoding, dan tree encoding.</li>
<li><strong>Populasi Awal</strong>: Dibangkitkan secara acak, dengan generator random, pendekatan tertentu, atau permutasi gen.</li>
<li><strong>Fungsi Fitness</strong>: Mengukur kualitas solusi; semakin kecil pelanggaran, semakin baik solusi.</li>
</ul>

<h3>2. Proses Seleksi</h3>
<p>Seleksi menentukan individu yang akan menjadi induk berdasarkan nilai fitness.</p>
<ul>
<li><strong>Roulette Wheel</strong>: Probabilitas terpilih sesuai besar nilai fitness.</li>
<li><strong>Steady State</strong>: Mempertahankan individu terbaik, mengganti yang terburuk dengan offspring baru.</li>
<li><strong>Tournament</strong>: Memilih beberapa individu secara acak lalu menentukan yang terbaik.</li>
<li><strong>Rank Selection</strong>: Memberi ranking pada kromosom agar peluang lebih merata.</li>
</ul>

<h3>3. Proses Regenerasi</h3>
<p>Dilakukan melalui tiga operator utama:</p>
<ul>
<li><strong>Mutasi</strong>: Mengubah gen secara acak (binary, permutation, value, tree encoding).</li>
<li><strong>Crossover (Kawin Silang)</strong>: Menggabungkan gen dari dua induk (satu titik, dua titik, uniform, aritmatik, dll).</li>
<li><strong>Reproduksi</strong>: Menyalin individu terbaik ke generasi berikutnya.</li>
</ul>
<p>Tujuan regenerasi: mencegah local optimum dan menghasilkan solusi lebih baik.</p>

<h3>4. Kondisi Berhenti</h3>
<p>Proses dihentikan jika offspring yang dihasilkan sudah mencapai solusi optimal atau memenuhi kriteria berhenti tertentu.</p>

<h3>5. Perkembangan Metode Penjadwalan</h3>
<ul>
<li><strong>Ant Colony Optimization (ACO)</strong>: Terinspirasi perilaku semut dengan pheromone.</li>
<li><strong>Tabu Search</strong>: Menggunakan memori jangka pendek (Tabu List) untuk menghindari jebakan local optimum.</li>
<li><strong>Coloring Graph</strong>: Pewarnaan graf untuk menyusun jadwal efisien dengan sumber daya terbatas.</li>
</ul>

<h3>6. Contoh Pemakaian Algoritma Genetika</h3>
<ul>
<li>Persamaan: \(a + 2b + 3c + 4d = 20\).</li>
<li>Tahapan: pembentukan kromosom, inisialisasi populasi, evaluasi kromosom dengan fungsi objektif, seleksi menggunakan fitness function, hingga menghasilkan populasi baru.</li>
</ul>

<h3>Inti Pembelajaran</h3>
<ul>
<li>Algoritma genetika meniru proses evolusi biologis: <strong>seleksi – crossover – mutasi – reproduksi</strong>.</li>
<li>Digunakan untuk optimasi dan penjadwalan dengan pendekatan probabilistik.</li>
<li>Keunggulan: mampu mencari solusi global, bukan hanya lokal optimum.</li>
</ul>`,
  },
  
  {
    id: 18,
    title: "Game Playing",
    content: `<p>Berikut rangkuman materi tentang Game Playing dan kecerdasan buatan berdasarkan modul yang disajikan:</p>
    <ol>
      <li><strong>Definisi Game Playing</strong>
        <p>Game pada AI adalah aplikasi yang bertujuan sebagai hiburan, dengan objek yang dipelajari secara model dan karakter yang hidup. AI berperan sebagai pengendali atau pemikir otomatis dalam game, berinteraksi melalui penglihatan, suara, dan gerak anggota badan, sehingga tercipta interaksi yang alami antara pemain dan lawan atau objek utama.</p>
      </li>
      <li><strong>Metode Penggunaan Game</strong>
        <p>Metode seperti prosedur Minimax digunakan untuk memaksimalkan peluang kemenangan pemain. Pada permainan seperti Nim, AI menganggap langkah lawan sebagai yang terbaik dan memilih langkah optimalnya.</p>
      </li>
      <li><strong>Mode Game AI</strong>
        <p>Beragam teknik digunakan seperti Pathfinding dengan algoritma A* untuk mencari jalur terpendek, serta algoritma Negascout dan MTDF yang mengoptimalkan pencarian dan pemangkasan (pruning) dalam proses pengambilan keputusan.</p>
      </li>
      <li><strong>Finite State Machine (FSM)</strong>
        <p>FSM adalah model perancangan pengendali sistem menggunakan tiga komponen utama: State (keadaan), Event (kejadian), dan Action (aksi). FSM memudahkan pembuatan software, tetapi memiliki kekurangan seperti prediktabilitas tinggi dan kemungkinan oscillation saat batasan ketat.</p>
      </li>
      <li><strong>Sistem Berbasis Aturan (Rule Based System)</strong>
        <p>Merupakan sistem yang menggunakan sekumpulan aturan untuk memproses informasi dalam working memory dan menghasilkan aksi atau informasi baru. Kelebihannya adalah fleksibilitas dan kemudahan pengembangan, tapi kekurangannya adalah kompleksitas pemeliharaan jika aturan banyak.</p>
      </li>
      <li><strong>Algoritma AI dan Contohnya</strong>
        <p>Algoritma AI meliputi berbagai teknik seperti fuzzy logic (Tsukamoto, Mamdani, Sugeno), sistem pakar (forward chaining, certainty factor), dan algoritma populer seperti Dijkstra untuk pencarian jarak terpendek. Tujuan utama adalah memudahkan modelisasi dan pemecahan masalah.</p>
      </li>
      <li><strong>Algoritma Dijkstra</strong>
        <p>Merupakan algoritma rakus yang digunakan untuk mencari jalur terpendek di graf berbobot non-negatif. Algoritma ini mulai dari titik awal, lalu mencari jarak minimal ke titik lain secara bertahap, meskipun menjadi kurang efisien dengan banyak titik.</p>
      </li>
      <li><strong>Kompleksitas Kesalahan</strong>
        <p>Kesalahan dalam sistem AI bisa terjadi akibat kecurangan, ketidakakuratan, atau desain yang tidak optimal. Contoh nyata adalah dalam mesin cuci otomatis yang gagal menentukan waktu pencucian karena kesalahan pada algoritma.</p>
      </li>
      <li><strong>Aplikasi Game Playing dan AI</strong>
        <p>Penggunaan AI dalam game, robot, dan berbagai perangkat lunak lainnya memanfaatkan algoritma dan model seperti FSM, rule-based system, dan algoritma pencarian untuk meningkatkan kecerdasan dan efektivitas sistem.</p>
      </li>
    </ol>
    <p><strong>Kesimpulan:</strong> Pengembangan game dan sistem cerdas memanfaatkan berbagai metodologi dan algoritma dalam AI untuk menciptakan sistem yang adaptif, efisien, dan mampu berinteraksi secara alami. Namun, tantangan seperti kompleksitas dan potensi kesalahan tetap perlu diatasi melalui desain yang matang dan algoritma yang optimal.</p>`,
  },
  {
    id: 19,
    title: "Jurnal Fuzzy",
    content: `<h3>Judul penelitian</h3>
<p>Penerapan Fuzzy Inference System untuk Menentukan Jumlah Pembelian Produk Berdasarkan Data Persediaan dan Penjualan (Carrefour Puri Indah)</p>

<h3>Tujuan</h3>
<ul>
<li>Menggunakan FIS untuk membantu menentukan jumlah pembelian produk guna menjaga persediaan agar sesuai kebutuhan pasar.</li>
</ul>

<h3>Masalah yang diidentifikasi</h3>
<ul>
<li>Persediaan terlalu banyak dan tertumpuk lama → biaya modal, pajak, asuransi, penyusutan, kerusakan masa expire.</li>
<li>Barang kadang kosong → hilangnya kepercayaan konsumen.</li>
<li>Perlu analisa data historis transaksi penjualan untuk menentukan tingkat persediaan dan waktu pembelian kembali.</li>
</ul>

<h3>Landasan teori utama</h3>
<ul>
<li>Inventory: konsep persediaan, siklusnya, dan pentingnya keseimbangan antara persediaan dan permintaan.</li>
<li>Fuzzy Logic: pemetaan input ke output dengan himpunan fuzzy (sedikit, sedang, banyak) dan ketidakpastian data.</li>
<li>Fuzzy Inference System (FIS): kerangka penalaran fuzzy; dua pendekatan umum:</li>
<ul>
<li>Metode Mamdani (Max-Min, centroid defuzzification)</li>
<li>Metode Tsukamoto dan Sugeno (variasi representasi output)</li>
</ul>
<li>Proses umum FIS: fuzzification → aturan fuzzy → inferensi → defuzzification.</li>
</ul>

<h3>Metode penelitian</h3>
<ul>
<li>Model eksperimen menggunakan FIS Mamdani untuk menentukan jumlah pembelian berdasarkan dua variabel input: Persediaan dan Penjualan, dengan output Pembelian.</li>
<li>Data: data primer (hasil wawancara, data penjualan 2014–2015) dan data stok/pembelian untuk tiap produk. Sampel data diambil dari produk fast/medium/slow moving.</li>
<li>Pembagian data untuk sampel: 10 data sampel utama (Tabel 3.1) dengan kategori Persediaan, Penjualan, Pembelian.</li>
</ul>

<h3>Variabel dan himpunan fuzzynya</h3>
<p>Input 1: Persediaan</p>
<p>Himpunan fuzzy: Sedikit, Sedang, Banyak</p>
<p>Contoh nilai linguistik dan fungsi keanggotaan (berbentuk potongan garis linear secara bertahap)</p>
<p>Input 2: Penjualan</p>
<p>Himpunan fuzzy: Sedikit, Sedang, Banyak</p>
<p>Output: Pembelian</p>
<p>Himpunan fuzzy: Sedikit, Sedang, Banyak</p>

<h3>Aturan fuzzy (contoh inti)</h3>
<ul>
<li>if Persediaan is Sedikit and Penjualan is Sedikit then Pembelian is Sedikit</li>
<li>if Persediaan is Sedikit and Penjualan is Sedang then Pembelian is Sedang</li>
<li>if Persediaan is Sedikit and Penjualan is Banyak then Pembelian is Banyak</li>
<li>if Persediaan is Sedang and Penjualan is Sedikit then Pembelian is Sedikit</li>
<li>if Persediaan is Sedang and Penjualan is Sedang then Pembelian is Sedang</li>
<li>if Persediaan is Sedang and Penjualan is Banyak then Pembelian is Banyak</li>
<li>if Persediaan is Banyak and Penjualan is Sedikit then Pembelian is Sedikit</li>
<li>if Persediaan is Banyak and Penjualan is Sedang then Pembelian is Sedang</li>
<li>if Persediaan is Banyak and Penjualan is Banyak then Pembelian is Banyak</li>
</ul>

<h3>Contoh perhitungan studi kasus (data pertama Coca Cola Can 330 ml x 4)</h3>
<ul>
<li>Persediaan akhir Agustus 2015 = 15 unit → termasuk Sedikit</li>
<li>Penjualan bulan Agustus 2015 = 69 unit → termasuk Sedikit dan Sedang</li>
<li>Derajat keanggotaan (μ) untuk input:</li>
<ol>
<li>Persediaan Sedikit: μ ≈ 0.81</li>
<li>Penjualan Sedikit: μ ≈ 0.36</li>
<li>Penjualan Sedang: μ ≈ 0.11</li>
</ol>
<li>Inferensi dengan clipping menghasilkan nilai pembelian pada masing-masing kategori (contoh): Sedikit ≈ 0.36, Sedang ≈ 0.11</li>
<li>Defuzzifikasi menggunakan centroid untuk menghasilkan jumlah pembelian akhir: sekitar 48 unit</li>
</ul>

<h3>Hasil utama dan temuan</h3>
<ul>
<li>Penerapan FIS Mamdani pada data persediaan dan penjualan dapat membantu menentukan jumlah pembelian produk untuk persediaan.</li>
<li>Nilai kebenaran (akurasi) pada data testing sekitar 44,50% (44,49656%).</li>
<li>Hasil menunjukkan bahwa FIS bisa digunakan untuk keputusan pembelian pada bulan berikutnya, meski ada keterbatasan akurasi.</li>
</ul>

<h3>Gambaran praktik teknis</h3>
<ul>
<li>Proses fuzzification menggunakan dua input (Persediaan, Penjualan) dengan masing-masing tiga himpunan fuzzy.</li>
<li>Aturan logika fuzzy disusun berdasarkan kondisi historis.</li>
<li>Defuzzification menggunakan metode centroid (center of gravity) untuk mendapatkan nilai crisp Jumlah Pembelian.</li>
<li>Visualisasi antarmuka FIS Mamdani dan tabel aturan tersedia dalam bagian Hasil dan Pembahasan.</li>
</ul>

<h3>Kesimpulan utama</h3>
<ul>
<li>Logika fuzzy Mamdani dapat membantu Carrefour dalam menentukan jumlah pembelian untuk persediaan berdasarkan data persediaan dan penjualan.</li>
<li>Nilai kebenaran pada data testing menunjukkan masih ada ruang perbaikan (sekitar 44,5%), tetapi metode ini memberikan keputusan pembelian yang lebih terstruktur dan fleksibel terhadap ketidakpastian data.</li>
</ul>`,
  },
  {
    id: 20,
    title: "Sistem Pakar",
    content: `<h3>Definisi dan Bentuk</h3>
    <p>Sistem pakar umumnya berbentuk rule-based system yang menyimpan pengetahuan sebagai aturan IF–THEN. Contoh aturan sederhana:</p>
    <pre>IF gejala = demam AND batuk = parah THEN diagnosis = flu</pre>

    <h3>Komponen Utama</h3>
    <ul>
      <li><strong>Knowledge Base (Basis Pengetahuan):</strong> menyimpan fakta dan aturan yang diperoleh dari pakar.</li>
      <li><strong>Inference Engine (Mesin Inferensi):</strong> melakukan penalaran berdasarkan aturan dan fakta untuk mencapai kesimpulan.</li>
      <li><strong>Working Memory (Basis Data Fakta):</strong> menyimpan fakta sementara yang didapat selama proses inferensi.</li>
      <li><strong>User Interface (Antarmuka Pengguna):</strong> menghubungkan pengguna dengan sistem (input fakta/pertanyaan dan output rekomendasi).</li>
      <li><strong>Explanation Facility (Fasilitas Penjelasan):</strong> memberi alasan/logika mengapa sistem mengambil keputusan tertentu.</li>
      <li><strong>Knowledge Acquisition (Akuisisi Pengetahuan):</strong> proses memasukkan pengetahuan dari pakar ke dalam sistem.</li>
    </ul>

    <h3>Contoh Penerapan</h3>
    <ul>
      <li>Medis: Diagnosa penyakit (contoh historis: MYCIN).</li>
      <li>Pertanian: Deteksi hama tanaman padi.</li>
      <li>Teknik: Diagnosa kerusakan mesin.</li>
      <li>Keuangan: Analisis risiko kredit.</li>
      <li>Pendidikan: Evaluasi tingkat pemahaman siswa.</li>
      <li>Industri: Perawatan prediktif (predictive maintenance).</li>
    </ul>

    <h3>Metode Penalaran (Inference Engine)</h3>
    <p>Dua metode penalaran utama adalah <strong>Forward Chaining</strong> dan <strong>Backward Chaining</strong>.</p>

    <h4>Forward Chaining</h4>
    <p><em>Cara kerja:</em> mulai dari fakta/input (gejala) dan bergerak maju menuju kesimpulan.</p>
    <ol>
      <li>Pengguna memasukkan fakta/gejala ke Working Memory.</li>
      <li>Mesin inferensi membaca aturan IF–THEN di Knowledge Base.</li>
      <li>Jika premis (IF) cocok dengan fakta di Working Memory, aturan dijalankan (THEN) dan menghasilkan fakta/kesimpulan baru.</li>
      <li>Fakta baru ditambahkan ke Working Memory; proses diulang sampai tidak ada aturan yang cocok lagi atau kesimpulan tercapai.</li>
    </ol>
    <p><strong>Studi kasus (Diagnosa Penyakit Kulit):</strong> Jika fakta awal F = {G1 = Kulit merah, G2 = Gatal, G7 = Rasa panas di kulit} dan aturan R1: <em>IF G1 AND G2 THEN Dermatitis</em>, maka R1 terpenuhi dan Dermatitis ditambahkan ke Working Memory.</p>

    <h4>Backward Chaining</h4>
    <p><em>Cara kerja:</em> mulai dari hipotesis/goal dan bergerak mundur untuk mencari fakta yang mendukung goal.</p>
    <ol>
      <li>Tentukan hipotesis/goal, misalnya "Pasien terkena penyakit X".</li>
      <li>Cari aturan yang memiliki goal tersebut di bagian THEN.</li>
      <li>Periksa apakah semua kondisi (IF) pada aturan tersebut sudah ada di fakta.</li>
      <li>Jika ada kondisi yang belum diketahui, kondisi itu dijadikan sub-goal dan proses diulang (cek aturan lain atau minta input user).</li>
      <li>Jika semua kondisi terbukti benar, goal diterima; jika salah satu kondisi gagal dibuktikan, goal ditolak.</li>
    </ol>
    <p><strong>Studi kasus (Goal: Alergi Kulit):</strong> Rule R5: <em>IF rasa panas di kulit AND kulit merah AND gatal THEN alergi kulit</em>. Jika semua premis R5 terbukti dari input, maka "alergi kulit" terbukti; jika salah satu premis tidak tersedia, R5 gagal dan goal ditolak.</p>

    <h3>Catatan Praktis</h3>
    <ul>
      <li>Pemilihan metode (forward vs backward) tergantung pada jenis problem: forward cocok saat banyak fakta awal tersedia; backward lebih efisien bila ada hipotesis spesifik yang ingin diuji.</li>
      <li>Perlu mekanisme penanganan konflik (conflict resolution) jika beberapa aturan dapat dipicu bersamaan (contoh: prioritas, recency, specificity).</li>
      <li>Explanation facility membantu pengguna memahami alasan keluaran, penting untuk aplikasi kritis (medis, finansial).</li>
    </ul>`,
  },
  {
    id: 21,
    title: "Etika dan Tantangan Dalam Pengembangan dan Penggunaan Artificial Intelligence",
    content: `<h3>Pendahuluan</h3>
    <p>AI merupakan bidang teknologi yang berkembang pesat dan memiliki dampak besar terhadap berbagai aspek kehidupan manusia. Namun, kemajuan ini menimbulkan isu-isu etika dan tantangan kompleks yang perlu perhatian.</p>

    <h3>Pengertian Etika AI</h3>
    <p>Etika AI adalah sistem nilai dan norma yang menentukan apakah perilaku dan keputusan terkait AI adalah benar, adil, dan bertanggung jawab. Etika ini penting untuk mencegah kejahatan, bias, melindungi hak asasi manusia, membangun kepercayaan, dan menentukan tanggung jawab.</p>

    <h3>Prinsip-Prinsip Etika Dasar</h3>
    <ul>
      <li><strong>Manfaat bagi kesejahteraan manusia:</strong> AI harus membawa keuntungan nyata untuk masyarakat.</li>
      <li><strong>Keadilan:</strong> mengurangi bias dan memastikan akses yang adil.</li>
      <li><strong>Tanggung jawab dan transparansi:</strong> pengembang dan pengguna harus dapat menjelaskan dan mempertanggungjawabkan sistemnya.</li>
    </ul>

    <h3>Tantangan Etika dan Sosial dalam AI</h3>
    <ul>
      <li><strong>Bias dan ketidakadilan algoritmik:</strong> model dapat mereplikasi atau memperkuat ketidakadilan dalam data.</li>
      <li><strong>Ketidakpastian dan akurasi:</strong> risiko kesalahan pada domain kritis (mis. kesehatan).</li>
      <li><strong>Kepemilikan dan akses data:</strong> isu privasi dan hak atas data.</li>
      <li><strong>Keamanan dan keselamatan:</strong> perlindungan dari penyalahgunaan dan serangan.</li>
      <li><strong>Ketergantungan manusia terhadap AI:</strong> risiko berkurangnya keterampilan manusia dan overreliance.</li>
      <li><strong>Ketimpangan sosial:</strong> dampak ekonomi seperti penggantian pekerjaan dan kesenjangan akses.</li>
    </ul>

    <h3>Solusi dan Langkah Kebijakan</h3>
    <p>Diperlukan pendekatan multi-disiplin yang melibatkan pengembangan regulasi, transparansi, edukasi, kolaborasi internasional, serta inovasi penelitian untuk memastikan AI yang aman, adil, dan bertanggung jawab. Langkah konkret meliputi pengaturan keselamatan, penghormatan privasi, dan pembangunan standar etika.</p>

    <h3>Kesimpulan</h3>
    <p>Pengembangan AI harus diiringi prinsip etika yang kuat agar manfaatnya dapat maksimal dan risikonya diminimalisir. Kerja sama global dan perhatian terus-menerus terhadap isu etika penting untuk memastikan AI menjadi alat yang membantu manusia dan bukan sebagai ancaman.</p>`,
  },
];
