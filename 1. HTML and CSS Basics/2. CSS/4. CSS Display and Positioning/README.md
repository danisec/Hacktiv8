## CSS Display and Positioning

Property position di CSS memiliki 4 nilai untuk mengatur posisi elemen yaitu, `static`, `relative`, `absolute`, dan `fixed`.

1.  Position Static

    Position static adalah posisi yang secara default telah digunakan ketika tidak pernah menentukan metode posisi yang digunakan. Posisi static tidak akan bekerja apabila menggunakan property : `top`, `bottom`, `left`, `right`.

    <br />

    **Misalnya :**

    .element {

    position: static;

    top: 100px; `// Does not work`

    border: 1px solid #000;

    }

    <br />

2.  Position Relative

    Posisi relative yaitu posisi normal yang dapat menggunakan property : `top`, `bottom`, `left`, `right` untuk dapat mengatur tata letak suatu elemen.

    <br />

    **Misalnya :**

    .element {

    position: static;

    top: 100px;

    border: 1px solid #000;

    }

    <br />

3.  Position Absolute

    Posisi absolute bergantung pada parent-elemen dari elemen posisi absolute tersebut. Namun jika elemen absolute tidak berada didalam sebuah elemen maka position absolute akan menyesuaikan dengan elemen utama yaitu body.

    <br />

    **Misalnya :**

    .element {

    position: absolute;

    right: 0;

    top: 100px;

    width: 200px;

    border: 1px solid #000;

    }

    <br />

4.  Position Fixed

    Position fixed adalah posisi tetap yang berada pada posisi yang telah ditentukan meskipun tinggi sebuah elemen lebih dari browser, sehingga dapat melakukan scroll ke atas dan bawah. Poisiton fixed akan tetap berada pada posisinya, tidak akan berubah.

    <br />

    **Misalnya :**

    .element {

    position: fixed;

    right: 0;

    top: 100px;

    width: 200px;

    border: 1px solid #000;

    }
