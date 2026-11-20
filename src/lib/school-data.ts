// Single source of truth for official school facts. The chatbot, pages and tests all read
// from here. Never add a phone number: the school does not publish one on this site.

export const SCHOOL = {
  name: "SMP Negeri 54 Kota Bandung",
  shortName: "SMPN 54 Bandung",
  slogan: "54 BEST",
  logo: "/images/logo.png",
  gate: "/images/gerbang.jpeg",
  address: "Jl. Raya Utsman Bin Affan, Rancanumpang, Gedebage, Kota Bandung",
  email: "smpn54bandung@gmail.com",
  instagram: { handle: "@bdg.smpn54", url: "https://www.instagram.com/bdg.smpn54/" },
  youtube: { handle: "@smpn54bandung8", url: "https://www.youtube.com/@smpn54bandung8" },
  hours: "Senin – Jumat, 07.00 – 14.00 WIB",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=SMP+Negeri+54+Bandung+Rancanumpang+Gedebage",
} as const;

/** The five words behind the "54 BEST" slogan, in official order. */
export const SLOGAN_WORDS = ["Berdoa", "Belajar", "Berkarya", "Berkarakter", "Berhasil"] as const;

export const STATS = [
  { value: 777, label: "Siswa Aktif", note: "Peserta didik" },
  { value: 24, label: "Rombongan Belajar", note: "Kelas VII – IX" },
  { value: "B", label: "Akreditasi", note: "30 September 2018" },
  { value: 33, label: "Guru", note: "Pendidik" },
  { value: 5, label: "Tenaga Kependidikan", note: "Staf administrasi" },
] as const;

export const BISA = [
  {
    letter: "B",
    title: "Bersih",
    icon: "sparkles",
    short: "Lingkungan kelas dan sekolah selalu rapi dan terawat.",
    detail:
      "Setiap warga sekolah membiasakan membuang sampah pada tempatnya, piket kelas terjadwal, dan menjaga kebersihan toilet, kantin, serta halaman.",
  },
  {
    letter: "I",
    title: "Indah",
    icon: "flower",
    short: "Sudut sekolah tertata, estetis, dan nyaman dipandang.",
    detail:
      "Taman, mading, dan sudut kelas ditata kreatif oleh siswa sehingga sekolah menjadi ruang belajar yang menyenangkan dan membanggakan.",
  },
  {
    letter: "S",
    title: "Sehat",
    icon: "heart",
    short: "Pola hidup sehat jasmani dan rohani bagi seluruh warga.",
    detail:
      "Didukung ruang UKS, olahraga rutin, kantin sehat, serta pembiasaan saling menghargai agar tubuh dan pikiran tetap bugar.",
  },
  {
    letter: "A",
    title: "Asri",
    icon: "leaf",
    short: "Hijau, sejuk, dan ramah lingkungan.",
    detail:
      "Penghijauan, tanaman kelas, dan gerakan hemat energi menjadikan sekolah sejuk serta menumbuhkan kepedulian terhadap alam.",
  },
] as const;

export const VISION =
  "Terwujudnya peserta didik yang beriman dan bertakwa kepada Tuhan Yang Maha Esa, sehat jasmani dan rohani, serta mampu berkembang menjadi pribadi yang mandiri, kreatif, kritis, komunikatif, kolaboratif, dan berwawasan kebangsaan untuk menghadapi tantangan global.";

export const MISSIONS = [
  { title: "Berdoa", text: "Menumbuhkan keimanan dan ketakwaan kepada Tuhan Yang Maha Esa melalui pembiasaan sikap religius, doa bersama, serta penguatan akhlak mulia." },
  { title: "Belajar", text: "Menyelenggarakan proses pembelajaran yang mendalam, aktif, dan menyenangkan dengan menekankan pada penguasaan pengetahuan, keterampilan, serta pengembangan penalaran kritis." },
  { title: "Berkarya", text: "Mengembangkan kreativitas dan kemandirian peserta didik melalui berbagai kegiatan intrakurikuler, kokurikuler, dan ekstrakurikuler yang mendorong inovasi serta keterampilan berkarya." },
  { title: "Berkarakter", text: "Membentuk peserta didik yang berwawasan kebangsaan, menjunjung tinggi nilai kewargaan, serta berkomunikasi dan berkolaborasi dengan baik dalam kehidupan bermasyarakat." },
  { title: "Berhasil", text: "Mewujudkan lulusan yang sehat jasmani dan rohani, memiliki kecakapan abad 21, serta siap menghadapi tantangan kehidupan untuk meraih keberhasilan di masa depan." },
] as const;

export const MASAGI = [
  { title: "Cinta Agama", value: "Silih Asih", desc: "Menumbuhkan keimanan, akhlak mulia, dan rasa kasih kepada sesama." },
  { title: "Jaga Budaya", value: "Silih Asah", desc: "Mencintai dan melestarikan budaya Sunda serta kearifan lokal." },
  { title: "Bela Negara", value: "Silih Asuh", desc: "Disiplin, cinta tanah air, dan saling membimbing sebagai warga bangsa." },
  { title: "Cinta Lingkungan", value: "Silih Wawangi", desc: "Peduli alam sekitar dan menebarkan hal-hal positif." },
] as const;

export const TIMELINE = [
  {
    year: "2013",
    title: "Rintisan Sekolah Filial",
    desc: "Sekolah mulai dirintis sebagai sekolah filial untuk menjawab kebutuhan pendidikan menengah pertama bagi warga Rancanumpang dan Gedebage.",
  },
  {
    year: "2013 – 2014",
    title: "Tumbuh Bersama Warga",
    desc: "Kegiatan belajar mengajar berjalan dengan dukungan masyarakat sekitar, sambil menyiapkan kelembagaan sekolah negeri yang mandiri.",
  },
  {
    year: "14 Feb 2015",
    title: "SK Pendirian Sekolah",
    desc: "Terbit Surat Keputusan pendirian, menandai lahirnya SMP Negeri 54 Kota Bandung secara resmi sebagai sekolah negeri mandiri.",
  },
  {
    year: "30 Sep 2018",
    title: "Terakreditasi B",
    desc: "Sekolah meraih Akreditasi B, pengakuan atas mutu layanan pendidikan yang terus dibangun.",
  },
  {
    year: "Kini",
    title: "777 Siswa, 24 Rombel",
    desc: "Terus berkembang dengan Budaya BISA dan karakter Bandung Masagi menuju sekolah 54 BEST: Berdoa, Belajar, Berkarya, Berkarakter, Berhasil.",
  },
] as const;

export type Leader = { name: string; role: string; photo?: string; note?: string };

export const LEADERS: Leader[] = [
  { name: "Hendra Prijatna, S.Pd., M.Pd.", role: "Kepala Sekolah", note: "Plt." },
  { name: "Elin Lindiawati R, S.Pd.", role: "Wakasek Kurikulum", photo: "/images/wkasek-kurikulum.jpeg" },
  { name: "Desi Kusmawati, S.Pd.", role: "Wakasek Kesiswaan", photo: "/images/wakasek-kesiswaan.jpeg" },
  { name: "Farrashati R, S.Pd.", role: "Wakasek Humas", photo: "/images/wakasek-humas.jpeg" },
  { name: "Aulia Wisuda P, S.Kom.", role: "Wakasek Sarana", photo: "/images/wakasek-sarana.jpeg" },
  { name: "Nono, S.A.P", role: "Kepala Tata Usaha", photo: "/images/kepala-tu.jpeg" },
];

export const FACILITIES = [
  { src: "/images/lab-ipa.jpeg", title: "Laboratorium IPA", category: "Laboratorium", desc: "Ruang praktikum sains untuk eksperimen fisika, kimia, dan biologi dengan meja kerja kelompok." },
  { src: "/images/alat-ipa.jpeg", title: "Peralatan Laboratorium IPA", category: "Laboratorium", desc: "Koleksi alat peraga dan instrumen praktikum yang menunjang pembelajaran sains berbasis eksperimen." },
  { src: "/images/komputer.jpeg", title: "Laboratorium Komputer", category: "Laboratorium", desc: "Fasilitas komputer untuk pembelajaran informatika, literasi digital, dan asesmen berbasis komputer." },
  { src: "/images/perpustakaan.jpeg", title: "Perpustakaan", category: "Literasi", desc: "Pusat literasi sekolah dengan koleksi buku pelajaran, fiksi, dan referensi untuk menumbuhkan minat baca." },
  { src: "/images/perpustakaan-2.jpeg", title: "Ruang Baca Perpustakaan", category: "Literasi", desc: "Area baca yang tenang dan nyaman untuk belajar mandiri maupun berdiskusi." },
  { src: "/images/ruang-kelas.jpeg", title: "Ruang Kelas", category: "Pembelajaran", desc: "Ruang kelas yang bersih dan tertata sesuai Budaya BISA, mendukung pembelajaran aktif." },
  { src: "/images/toilet-cowo.jpeg", title: "Toilet Putra", category: "Sanitasi", desc: "Toilet khusus siswa putra yang dijaga kebersihannya setiap hari." },
  { src: "/images/toilet-cewe.jpeg", title: "Toilet Putri", category: "Sanitasi", desc: "Toilet khusus siswi putri yang bersih, aman, dan nyaman." },
  { src: "/images/uks.jpeg", title: "Ruang UKS", category: "Kesehatan", desc: "Unit Kesehatan Sekolah untuk pertolongan pertama dan layanan kesehatan siswa." },
] as const;

export type Day = "Selasa" | "Rabu" | "Kamis" | "Jumat";
export const DAY_FILTERS = ["Semua", "Selasa", "Rabu", "Kamis", "Jumat"] as const;
export type DayFilter = (typeof DAY_FILTERS)[number];

export type Ekskul = { name: string; day: Day; time: string; place: string; icon: string };

export const EKSKUL: Ekskul[] = [
  { name: "Tarung Derajat", day: "Selasa", time: "14.45 - 16.45", place: "Lapangan Upacara", icon: "swords" },
  { name: "Marching Band", day: "Jumat", time: "15.00 - 17.30", place: "Lapangan Voli", icon: "drum" },
  { name: "Pramuka", day: "Rabu", time: "14.30 - 17.30", place: "Lapangan Upacara", icon: "tent" },
  { name: "Karawitan", day: "Rabu", time: "15.00 - 17.00", place: "Lapangan Upacara", icon: "music" },
  { name: "Volly Ball", day: "Rabu", time: "15.00 - 17.00", place: "Lapangan Voli", icon: "volleyball" },
  { name: "Tari", day: "Kamis", time: "14.45 - 16.45", place: "Ruang Kelas", icon: "sparkles" },
  { name: "Pajarpara", day: "Kamis", time: "15.00 - 17.00", place: "Lapangan Upacara", icon: "flag" },
  { name: "PMR", day: "Jumat", time: "13.00 - 15.00", place: "Lapangan Upacara / Kelas", icon: "cross" },
  { name: "Futsal", day: "Jumat", time: "15.00 - 17.00", place: "Triditi", icon: "goal" },
  { name: "Sepak Bola", day: "Jumat", time: "15.00 - 17.00", place: "Lapang Tulip", icon: "trophy" },
];

export function filterEkskul(day: DayFilter): Ekskul[] {
  return day === "Semua" ? EKSKUL : EKSKUL.filter((e) => e.day === day);
}

// Original interview quotes from student representatives.
export const TESTIMONIALS = [
  { name: "Fadil", photo: "/images/fadila.jpeg", quote: "Kesan saya selama bersekolah di sini sangat senang karena saya dapat banyak pengalaman berharga, memiliki teman-teman sangat baik dan ilmu-ilmu yang sangat bermanfaat. Program BISA sangat berarti dan sangat membantu agar mewujudkan sekolah yang nyaman dan aman dalam mencari ilmu pengetahuan. Program ini membangun kepribadian siswa yang peduli akan lingkungan, serta kebiasaan hidup sehat." },
  { name: "Khansa", photo: "/images/khansa.jpeg", quote: "Selama menjadi siswa di sekolah ini, saya mendapatkan banyak pengalaman, ilmu, dan pelajaran berharga, baik dalam bidang akademik maupun nonakademik. Menurut saya, bersekolah di lingkungan yang menerapkan budaya BISA (Bersih, Indah, Sehat, dan Asri) merupakan hal yang sangat positif. Lingkungan sekolah yang bersih dan nyaman dapat membuat proses belajar menjadi lebih menyenangkan, meningkatkan semangat belajar, serta menjaga kesehatan seluruh warga sekolah." },
  { name: "Aulia", photo: "/images/aulia.jpeg", quote: "Saya merasa sangat senang dan nyaman ketika menjadi siswa di SMPN 54 Bandung, saya berpendapat bahwa program ini sangat bagus untuk melatih kedisiplinan siswa dan dapat menimbulkan lingkungan yang bersih, nyaman dan aman. Namun dibalik semua itu saya juga masih berharap agar semua siswa-siswi SMPN 54 Bandung mematuhi aturan yang disediakan dan saya juga berharap agar sekolah dapat mengembangkan lagi program-program tersebut ataupun program-program yang baru ingin dibuat." },
  { name: "Abidzar", photo: "/images/abidzar.jpeg", quote: "Selama menjadi siswa di sini, saya merasa sangat bersukur dan bangga. Sekolah ini bukan hanya tempat belajar, tapi juga tempat saya belajar tentang tanggung jawab, persahabatan, dan kedisiplinan. Bapak/ibu guru selalu membimbing dengan sabar, dan teman-teman sangat mendukung. Saya sangat setuju dengan budaya BISA. Bersih, indah, sehat, dan asri membuat kami merasa nyaman saat belajar. Lingkungan yang bersih membuat pikiran jadi fokus, dan suasana yang asri membuat sekolah terasa seperti rumah kedua. Budaya ini juga melatih kami untuk peduli lingkungan, tidak hanya di sekolah tapi juga di rumah." },
  { name: "Filzah", photo: "/images/filzdah.jpeg", quote: "Perpaduan antara pengalaman berharga selama belajar dan penerapan budaya BISA menjadikan sekolah ini tempat yang sangat ideal, kondusif, serta menyenangkan untuk berkembang." },
  { name: "Ammar", photo: "/images/ammar.jpeg", quote: "Kesan saya selama menjadi siswa di SMPN 54 Bandung cukup senang karena di sini saya menemukan banyak teman yang unik dan juga asik. Pendapat saya mengenai budaya BISA sebenarnya program tersebut sangat bagus agar menciptakan lingkungan yang bersih dan meningkatkan kesadaran siswa, sayangnya mayoritas siswa masih belum menerapkan program dan kurangnya sikap peduli pada lingkungan." },
] as const;

export const QUICK_REPLIES = ["Alamat", "Budaya BISA", "Jadwal Ekskul", "Jam Operasional"] as const;
export type QuickReply = (typeof QUICK_REPLIES)[number];

export function quickReplyAnswer(topic: QuickReply): string {
  switch (topic) {
    case "Alamat":
      return `📍 ${SCHOOL.name} beralamat di ${SCHOOL.address}. Untuk pertanyaan, silakan kirim email ke ${SCHOOL.email} atau DM Instagram ${SCHOOL.instagram.handle}.`;
    case "Budaya BISA":
      return `🌿 Budaya BISA adalah gerakan sekolah berwawasan lingkungan: ${BISA.map((b) => `${b.title} (${b.short.toLowerCase().replace(/\.$/, "")})`).join(", ")}. Budaya ini dijalankan setiap hari oleh seluruh warga sekolah.`;
    case "Jadwal Ekskul":
      return `🗓️ Jadwal ekstrakurikuler:\n${EKSKUL.map((e) => `• ${e.name} — ${e.day}, ${e.time} di ${e.place}`).join("\n")}`;
    case "Jam Operasional":
      return `🕖 Jam operasional sekolah: ${SCHOOL.hours}. Di luar jam tersebut, silakan tinggalkan pesan lewat halaman Kontak.`;
  }
}

/** Plain-text knowledge base handed to the AI assistant. */
export function schoolKnowledge(): string {
  return [
    `Nama: ${SCHOOL.name}. Slogan: "${SCHOOL.slogan}" (${SLOGAN_WORDS.join(", ")}).`,
    `Alamat: ${SCHOOL.address}. Email: ${SCHOOL.email}. Instagram: ${SCHOOL.instagram.handle}. YouTube: ${SCHOOL.youtube.handle}. Jam operasional: ${SCHOOL.hours}.`,
    `Statistik: ${STATS.map((s) => `${s.label} ${s.value} (${s.note})`).join("; ")}.`,
    `Visi: ${VISION}`,
    `Misi: ${MISSIONS.map((m, i) => `${i + 1}. ${m.title} — ${m.text}`).join(" ")}`,
    `Budaya BISA: ${BISA.map((b) => `${b.title}: ${b.detail}`).join(" ")}`,
    `Bandung Masagi (pendidikan karakter Kota Bandung berbasis kearifan Sunda): ${MASAGI.map((m) => `${m.title} (${m.value}) — ${m.desc}`).join(" ")}`,
    `Sejarah: ${TIMELINE.map((t) => `${t.year}: ${t.title} — ${t.desc}`).join(" ")}`,
    `Riwayat kepala sekolah: ${PRINCIPALS.map((p) => `${p.name} (${p.period})`).join("; ")}.`,
    `Pimpinan: ${LEADERS.map((l) => `${l.role}: ${l.name}${l.note ? ` (${l.note})` : ""}`).join("; ")}.`,
    `Fasilitas: ${FACILITIES.map((f) => f.title).join(", ")}.`,
    `Ekstrakurikuler: ${EKSKUL.map((e) => `${e.name} (${e.day}, ${e.time}, ${e.place})`).join("; ")}.`,
  ].join("\n");
}

export const PRINCIPALS = [
  { name: "Hj. Elin Karlina, S.Pd., M.Pd.", period: "2015 – 2018" },
  { name: "Ike Fiesta Reni Hapsari, M.Pd.", period: "2018 – 2025" },
  { name: "Tika Kartika, M.Pd.", period: "2025 – 2026" },
  { name: "Hendra Prijatna, S.Pd., M.Pd.", period: "2026 – sekarang", current: true },
] as const;
