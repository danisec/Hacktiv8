## CSS (Cascading Style Sheets)

CSS (Cascading Style Sheets) adalah bahasa yang digunakan untuk menentukan tampilan dan format halaman website. Dengan menggunakan CSS, dapat memperbagus halaman website seperti mengatur jenis font, warna tulisan, jenis font dan sebagainya.

### Jenis-jenis penempatan kode CSS

1.  Inline CSS

    Inline CSS adalah kode CSS yang dituliskan di dalam file HTML. Jenis CSS ini hanya mempengaruhi satu baris pada kode HTML.

    Misalnya : `<h1 style="color: blue; font-size: 30px;">Learn CSS</h1>`

2.  Internal CSS

    Internal CSS ditempatkan pada bagian header `<header>...</header>` di file HTML. Internal CSS dapat membantu ketika ingin halaman website yang tampilannya berbeda dari halaman lain.

3.  External CSS

    External CSS adalah kode CSS yang ditempatkan di luar dokumen HTML sebagai file `.css`. Jenis CSS ini berfungsi untuk mengatur tampilan semua halaman website yang ditentukan dan dapat mengatur tampilan beberapa halaman sekaligus.

    Agar dapat menggunakan eksternal CSS, perlu menambahkan kode di bagian header `<header>...</header>` di file HTML.

    Misalnya :

    `<head>`

         <link rel="stylesheet"  type="text/css"  href="style.css">

    `</head>`
