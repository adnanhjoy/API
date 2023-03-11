const loadUser = () => {
    fetch('https://randomuser.me/api/?results=100')
        .then(res => res.json())
        .then(data => displayUserData(data.results))
}
const displayUserData = users => {
    const userContainer = document.getElementById('user-container');
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div class="card">
            <img src="${user.picture.large}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${user.name.title} ${user.name.first} ${user.name.last}</h5>
                <p class="card-text">Phone: ${user.phone}</p>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">City: ${user.location.city} TimeZone: ${user.location.timezone.offset}</li>
            <li class="list-group-item">street: ${user.location.street.name}</li>
            <li class="list-group-item">${user.location.coordinates.latitude}</li>
        </ul>
    </div>
        `;

        userContainer.appendChild(div)
        console.log(user)
    });
}
loadUser()