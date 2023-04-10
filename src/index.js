// Test import of styles
import '@/styles/index.scss'

let shaka;

if (!localStorage.count) {
    localStorage.count = 1
}

const version = ++localStorage.count % 3

switch (version) {
    case 0:
        import(`shaka-player-4.3.5`).then((e) => {
            shaka = e
            done()
        });
        break
    case 1:
        import(`shaka-player-2.5.10`).then((e) => {
            shaka = e
            done()
        });
        break
    case 2:
        import(`shaka-player-3.3.0`).then((e) => {
            shaka = e
            done()
        });
        break
}

function done() {
    const heading = document.createElement('h1')
    heading.textContent = "Shaka version " + shaka?.Player?.version

    const app = document.querySelector('#root')
    app.append(heading)
}