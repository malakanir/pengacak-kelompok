// Fisher-Yates (Knuth) shuffle: setiap posisi ditukar dengan indeks acak di [0, i].
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Acak nama lalu bagi secara round-robin agar ukuran kelompok selisih paling banyak 1.
function bagiKelompok(nama, mode, n) {
  const daftar = shuffle(nama.slice());
  const jumlah = mode === "jumlah" ? n : Math.ceil(daftar.length / n);
  const kelompok = Array.from({ length: jumlah }, () => []);
  daftar.forEach((item, i) => kelompok[i % jumlah].push(item));
  return kelompok;
}

document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const tombol = $("pk-acak");
  if (!tombol) return;

  tombol.addEventListener("click", () => {
    const nama = $("pk-nama").value.split("\n").map((s) => s.trim()).filter(Boolean);
    const mode = document.querySelector('input[name="pk-mode"]:checked').value;
    const n = parseInt($("pk-n").value, 10);
    const pesan = $("pk-pesan");
    const hasil = $("pk-hasil");
    hasil.textContent = "";

    if (nama.length === 0) { pesan.textContent = "Masukkan minimal satu nama."; return; }
    if (!(n >= 1)) { pesan.textContent = "Angka harus minimal 1."; return; }
    if (mode === "jumlah" && n > nama.length) { pesan.textContent = "Jumlah kelompok tidak boleh lebih dari jumlah nama."; return; }
    pesan.textContent = "";

    bagiKelompok(nama, mode, n).forEach((anggota, idx) => {
      const kartu = document.createElement("div");
      kartu.style.cssText = "border:1px solid #8884;border-radius:8px;padding:12px;margin:8px 0";
      const judul = document.createElement("strong");
      judul.textContent = "Kelompok " + (idx + 1) + " (" + anggota.length + ")";
      const daftar = document.createElement("ul");
      anggota.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        daftar.appendChild(li);
      });
      kartu.append(judul, daftar);
      hasil.appendChild(kartu);
    });
  });
});
