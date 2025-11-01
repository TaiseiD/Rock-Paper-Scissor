class Buttons extends HTMLElement {
    connectedCallback() {

        const label = this.getAttribute('label') || this.textContent || "Button";
        const type = this.getAttribute('type') || "primary";

        this.innerHTML = `
        <link rel="stylesheet" href="../../components/button/button.css">
        <button class="btn ${type}">${label}</button>
        `;
    }
}
customElements.define('comp-btn', Buttons);