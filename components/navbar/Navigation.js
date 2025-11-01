class navBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

        <base href="../../">
        
        <link rel="stylesheet" href="../../components/navbar/navigation.css">
        <nav>
            <a href="index.html">Home</a> 
            <a href="interface/game/game.html">Play</a>
        </nav>
        `;
    }
}
customElements.define('nav-bar', navBar);