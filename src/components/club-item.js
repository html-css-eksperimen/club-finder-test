class ClubItem extends HTMLElement {
    constructor() {
        super();
        console.log('Club item created');
        this._shadowdom = this.attachShadow({ mode: 'open' });
    }

    set clubItem(clubitem) {
        this._clubitem = clubitem;
        this.render();
    }

    get clubItem() {
        return this._clubitem;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        console.log('club item disconnected');
    }

    render() {
        if (Object.entries(this._clubitem).length > 0) {
            const { name, fanArt, description } = this._clubitem;

            const elementClubs = /* html */ `
            <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
            <div class="club-info">
                <h2>${name}</h2>
                <p>${description}</p>
            </div>
            `;

            const elementStyle = /* html */ `
                <style>
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    :host {
                        display: block;
                        margin-bottom: 18px;
                        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                        border-radius: 10px;
                        overflow: hidden;
                    }
                    .fan-art-club {
                        width: 100%;
                        max-height: 300px;
                        object-fit: cover;
                        object-position: center;
                    }
                    .club-info {
                        padding: 24px;
                    }
                    .club-info > h2 {
                        font-weight: lighter;
                    }
                    .club-info > p {
                        margin-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 10; /* number of lines to show */
                    }
                </style>
            `;

            this._shadowdom.innerHTML = elementStyle;
            this._shadowdom.innerHTML += elementClubs;
        }
    }
}

customElements.define('club-item', ClubItem);
export default ClubItem;
