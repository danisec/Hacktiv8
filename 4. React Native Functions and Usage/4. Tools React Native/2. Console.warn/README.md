# Console.warn

Perbdaan antara console.log dan console.warn adalah console.log akan menampilkan log pada console browser, sedangkan console.warn akan menampilkan di console emulator.

Caranya ketikkan `console.warn()` dibawah `render()`

Misalnya

```
render() {
    console.warn(this.state.Greeting)
}
```

Maka akan menampilkan console di dalam emulator.

![](./image/consol.warn.png)
