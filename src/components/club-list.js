import './club-item';

class ClubList extends HTMLElement {
    constructor() {
        super();
        console.log('Club list created');
        this._shadowdom = this.attachShadow({ mode: 'closed' });
    }

    set clubItemList(clublist) {
        this._clubitemList = clublist;
        this.render();
    }

    get clubItemList() {
        return this._clubitemList;
    }

    connectedCallback() {
        this.render();
    }

    disconnectedCallback() {
        console.log('Club list disconnected');
    }

    render() {
        if (this._clubitemList && this._clubitemList.length > 0) {
            const listClubItem = [];

            this._clubitemList.forEach((club) => {
                const clubItemEl = document.createElement('club-item');
                clubItemEl.clubItem = club;
                listClubItem.push(clubItemEl);
            });

            this._shadowdom.innerHTML = '';
            this._shadowdom.append(...listClubItem);
        }
    }

    renderError(message) {
        console.log('render error', message);
        const elFallback = /*html*/ `<h2 class="placeholder">${message}</h2>`;

        const styleEl = /* html */ `
        <style>
            .placeholder {
                font-weight: lighter;
                color: rgba(0, 0, 0, 0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                display: block;
            }
        </style>
    `;

        this._shadowdom.innerHTML = '';
        this._shadowdom.innerHTML += styleEl;
        this._shadowdom.innerHTML += elFallback;
    }
}

customElements.define('club-list', ClubList);
export default ClubList;
