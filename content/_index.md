---
title: "Pengacak Kelompok"
---

Masukkan nama, satu per baris, lalu pilih cara membagi kelompok.

<div id="pk">
<label class="pk-lbl" for="pk-nama">Daftar nama</label>
<textarea id="pk-nama" class="pk-area" rows="8" placeholder="Andi&#10;Budi&#10;Citra"></textarea>
<div class="pk-mode">
<input type="radio" id="pk-m1" name="pk-mode" value="jumlah" checked>
<label for="pk-m1">Jumlah kelompok</label>
<input type="radio" id="pk-m2" name="pk-mode" value="anggota">
<label for="pk-m2">Anggota per kelompok</label>
</div>
<div class="pk-kalimat">
<span class="pk-k-jumlah">Bagi menjadi</span>
<span class="pk-k-anggota">Isi tiap kelompok dengan</span>
<input id="pk-n" class="pk-angka" type="number" min="1" value="2" aria-label="Angka">
<span class="pk-k-jumlah">kelompok</span>
<span class="pk-k-anggota">orang</span>
</div>
<button id="pk-acak" class="pk-tombol" type="button">Acak kelompok</button>
<p id="pk-pesan" class="pk-pesan" role="alert"></p>
<div id="pk-hasil" class="pk-hasil"></div>
</div>

<script src="js/pengacak.js"></script>
