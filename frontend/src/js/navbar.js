const NAVBAR = 'navbar'
const NAVBAR_MENU = 'navbar-menu'
const NAVBAR_BTN = 'navbar-btn'

const navbar = document.getElementById(NAVBAR)
const navbarMenu = document.getElementById(NAVBAR_MENU)
const navbarBtn = document.getElementById(NAVBAR_BTN)

navbarBtn.addEventListener('click', () => {
	navbarMenu.classList.toggle('hide')
})

window.onload = () => {
	document.onclick = (e) => {
		if (e.target.id != NAVBAR_MENU && e.target.id != NAVBAR_BTN) {
			//element clicked wasn't the div; hide the div
			navbarMenu.classList.add('hide')
		}
	}
}
