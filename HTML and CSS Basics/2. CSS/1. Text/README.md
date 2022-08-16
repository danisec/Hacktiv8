## Text

Dalam penggunaan CSS pada file HTML memerlukan file `style.css` untuk dapat menghubungkannya dengan memasukkan `<link rel="stylesheet" href="./styles.css" />` ke dalam tag kode `<head>...</head`.

Misalnya :

`<head>`

    <link rel="stylesheet" href="./styles.css" />

`</head>`

### Style.css

Setelah menghubungkan file `style.css` ke dalam HTML. Kita dapat menulis CSS di dalam file `style.css`.

Misalnya :

h1 {

    color: blue;
    font-size: 40;

}

h2 {

    color: blue;
    font-size: 25;

}

### DRY (Don't Repeat Yourself)

Dalam penulisan kode CSS yang perlu di ingat adalah jangan duplikasi kode. Untuk menghindari duplikasi dan pengulangan kode, buatlah sebuah group CSS yang dapat digunakan secara berulang-berulang.

Misalnya :

h1, h2 {

    color: blue;

}
