import '../../components/club-list';
import '../../components/search-bar';
import DataSource from '../data/data-source';

const main = () => {
    const searchElement = document.querySelector('search-bar');
    const buttonSearchElement = document.querySelector('#searchButtonElement');
    const clubListElement = document.querySelector('club-list');

    const onButtonSearchClicked = () => {
        // let dataSource = new DataSource(renderResult, fallbackResult);
        // dataSource.searchClub(searchElement.value);
        DataSource.searchClubsAsync(searchElement.valueInput)
            .then(renderResult)
            .catch(fallbackResult);
    };

    const onButtonSearchClickedAsync = async () => {
        try {
            const results = await DataSource.searchClubsAsync(
                searchElement.valueInput,
            );

            renderResult(results);
        } catch (err) {
            console.log(err);
            fallbackResult(err);
        }
    };

    const renderResult = (results) => {
        // clubListElement.innerHTML = '';
        // results.forEach((club) => {
        //     const { name, fanArt, description } = club;
        //     const clubElement = document.createElement('div');
        //     clubElement.setAttribute('class', 'club');
        //     const elementClubs = /* html */ `
        //         <img class="fan-art-club" src="${fanArt}" alt="Fan Art">
        //         <div class="club-info">
        //             <h2>${name}</h2>
        //             <p>${description}</p>
        //         </div>
        //     `;
        //     clubElement.innerHTML = elementClubs;
        //     clubListElement.appendChild(clubElement);
        // });
        clubListElement.clubItemList = results;
    };

    const fallbackResult = (message) => {
        // const elFallback = /*html*/ `<h2 class="placeholder">${message}</h2>`;
        // clubListElement.innerHTML = '';
        // clubListElement.innerHTML = elFallback;
        // clubListElement.innerHTML +=
        //     '<h2 class="placeholder">' + message + '</h2>';
        console.log(message);
        clubListElement.renderError(message);
    };

    // buttonSearchElement.addEventListener('click', onButtonSearchClicked);
    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;
