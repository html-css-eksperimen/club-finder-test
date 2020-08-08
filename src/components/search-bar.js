class SearchBar extends HTMLElement {
    constructor() {
        super();
        console.log('search bar created');
        this._shadowdom = this.attachShadow({ mode: 'closed' });
    }

    set clickEvent(eventListener) {
        this._eventListener = eventListener;
        this.render();
    }

    get clickEvent() {
        return this._eventListener;
    }

    set valueInput(valueInput) {
        this._valueInput = valueInput;
    }

    get valueInput() {
        this._valueInput = this._shadowdom.querySelector(
            '#searchElement',
        ).value;
        return this._valueInput;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {}

    render() {
        const searchEl = /* html */ `
        <div id="search-container" class="search-container">
            <input
                placeholder="Search football club"
                id="searchElement"
                type="search"
            />
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        `;

        const styleElement = /* html */ `
            <style>
                .search-container {
                    max-width: 800px;
                    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                    padding: 16px;
                    border-radius: 5px;
                    display: flex;
                    position: sticky;
                    top: 10px;
                    background-color: white;
                }

                .search-container>input {
                    width: 75%;
                    padding: 16px;
                    border: 0;
                    border-bottom: 1px solid greenyellow;
                    font-weight: bold;
                }

                .search-container>input:focus {
                    outline: 0;
                    border-bottom: 2px solid green;
                }

                .search-container>input:focus::placeholder {
                    font-weight: bold;
                }

                .search-container>input::placeholder {
                    color: greenyellow;
                    font-weight: normal;
                }

                .search-container>button {
                    width: 23%;
                    cursor: pointer;
                    margin-left: auto;
                    padding: 16px;
                    background-color: green;
                    color: white;
                    border: 0;
                    text-transform: uppercase;
                }

                @media screen and (max-width: 550px) {
                    .search-container {
                        flex-direction: column;
                        position: static;
                    }

                    .search-container>input {
                        width: 100%;
                        margin-bottom: 12px;
                    }

                    .search-container>button {
                        width: 100%;
                    }
                }
            </style>
        `;

        this._shadowdom.innerHTML = styleElement;
        this._shadowdom.innerHTML += searchEl;

        this._shadowdom
            .querySelector('#searchButtonElement')
            .addEventListener('click', this._eventListener);
    }
}

customElements.define('search-bar', SearchBar);
export default SearchBar;
