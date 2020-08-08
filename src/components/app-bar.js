class AppBar extends HTMLElement {
    constructor() {
        super();
        console.log('App bar created');
        this._shadowdom = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        console.log('App bar disconnected');
    }

    render() {
        const appbarEl = /* html */ `
        <h2>Club Finder</h2>`;

        const styleAppbar = /* html */ `
            <style>
                * {
                    margin: 0;
                    padding: 0px;
                    box-sizing: border-box;
                }
                :host {
                    /* Butuh display block agar inline element default custom element berubah menjadi
                    block element
                    */
                    display: block;
                    padding: 16px;
                    width: 100%;
                    background-color: cornflowerblue;
                    color: white;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                }
                h2 {
                    padding: 16px
                }
            </style>
        `;

        this._shadowdom.innerHTML = styleAppbar;
        this._shadowdom.innerHTML += appbarEl;
    }
}

customElements.define('app-bar', AppBar);
export default AppBar;
