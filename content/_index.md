---
title: "Pengacak Kelompok"
---

Masukkan nama, satu per baris, lalu pilih cara membagi kelompok.

<div id="pk">
<label for="pk-nama"><strong>Daftar nama</strong> (satu per baris)</label>
<textarea id="pk-nama" rows="8" style="width:100%"></textarea>
<fieldset style="border:0;padding:0;margin:12px 0">
<label><input type="radio" name="pk-mode" value="jumlah" checked> Jumlah kelompok</label>
<label style="margin-left:12px"><input type="radio" name="pk-mode" value="anggota"> Anggota per kelompok</label>
</fieldset>
<input id="pk-n" type="number" min="1" value="2" style="width:6em">
<button id="pk-acak" type="button">Acak kelompok</button>
<p id="pk-pesan" role="alert"></p>
<div id="pk-hasil"></div>
</div>

<script src="js/pengacak.js"></script>
