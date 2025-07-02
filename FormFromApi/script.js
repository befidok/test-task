const openModalBtn = document.getElementById('openModalBtn')
const closeModalBtn = document.getElementById('closeModalBtn')
const modal = document.getElementById('modal')
const loadDataBtn = document.getElementById('loadDataBtn')
const cardsContainer = document.getElementById('cardsContainer')

openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block'
})

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none'
})

loadDataBtn.addEventListener('click', () => {
  modal.style.display = 'none'

  fetch('https://dummyjson.com/users')
    .then((res) => res.json())
    .then((data) => {
      const users = data.users.slice(0, 10)

      users.forEach((user) => {
        const card = document.createElement('div')
        card.className = 'card'
        card.innerHTML = `
            <img src="${user.image}" alt="${user.firstName} ${user.lastName}">
            <h3>${user.firstName} ${user.lastName}</h3>
            <p>Birth date: ${user.birthDate}</p>
            <p>Phone: ${user.phone}</p>
            <p>City: ${user.address.city}</p>
        `
        cardsContainer.appendChild(card)
      })
    })
    .catch((err) => {
      console.error('Error loading data:', err)
    })
})
