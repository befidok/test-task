var modal = document.getElementById('myModal')

document.getElementsByClassName('close')[0].onclick = function () {
  modal.style.display = 'none'
}

let loadedUsers = []
let cardCounter = 0

async function showModal() {
  if (loadedUsers.length === 0) {
    try {
      const response = await fetch(
        'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json '
      )
      if (!response.ok) {
        throw new Error(
          `Network error: ${response.status} ${response.statusText}`
        )
      }
      loadedUsers = await response.json()
    } catch (error) {
      console.error('Error loading data:', error)
      return
    }
  }

  const modalData = document.getElementById('modalData')
  modal.style.display = 'block'
  modalData.innerHTML = ''

  loadedUsers.slice(0, 10).forEach((user) => {
    const userBlock = document.createElement('div')
    userBlock.className = 'modal-user-block'
    userBlock.innerHTML = `
      <h3>${user.name}</h3>
      <p>Language: ${user.language}</p>
      <p>ID: ${user.id}</p>
      <p>Bio: ${user.bio}</p>
      <p>Version: ${user.version}</p>
      <hr />
    `
    modalData.appendChild(userBlock)
  })
}

async function loadCards() {
  if (loadedUsers.length === 0) {
    try {
      const response = await fetch(
        'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json '
      )
      if (!response.ok) {
        throw new Error(
          `Network error: ${response.status} ${response.statusText}`
        )
      }
      loadedUsers = await response.json()
    } catch (error) {
      console.error('Error loading data:', error)
      return
    }
  }

  const container = document.getElementById('cardsContainer')

  const toAdd = loadedUsers.slice(cardCounter, cardCounter + 10)
  cardCounter += toAdd.length

  toAdd.forEach((user) => {
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `
      <h3>${user.name}</h3>
      <p>ID: ${user.id}</p>
      <p>Language: ${user.language}</p>
    `
    container.appendChild(card)
  })
}
