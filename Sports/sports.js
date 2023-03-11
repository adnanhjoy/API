const loadPlayers = (name) => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Brighton&p=${name}`)
        .then(res => res.json())
        .then(data => displayPlayer(data.player))
}
const displayPlayer = players => {
    const playerContainer = document.getElementById('player-container');
    playerContainer.innerHTML = ``;
    players.forEach(player => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div onclick="playerDetail('${player.strPlayer}')" class="card">
                <img src="${player.strThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">${player.strDescriptionEN.slice(0, 80)}</p>
                    </div>
                </div>


                
        `;
        playerContainer.appendChild(div)
        console.log(player)
    });

}

const searchPlayer = () => {
    const serachField = document.getElementById('search-field');
    const findPlayer = serachField.value;
    serachField.value = ''
    loadPlayers(findPlayer);
}

const playerDetail = idPlayer => {
    fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?t=Brighton&p=${idPlayer}}`)
        .then(res => res.json())
        .then(data => console.log(data))

}
loadPlayers('');