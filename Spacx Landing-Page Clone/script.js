const missons = document.querySelectorAll('.missions')

// creating new instance of intersaction of Observer
const missionObserver = new IntersectionObserver(
	(entries) => {
		const ON_SCREEN = 'on__screen'
		entries.forEach((entry) => {
			const { isIntersecting, target } = entry

			if (isIntersecting) {
				target.classList.add(ON_SCREEN)
				return true
			}

			target.classList.remove(ON_SCREEN)
		})
	},
	{
		threshold: 0.5,
	}
)

//looping over missions and call observe method on every single loop.
missons.forEach((misson) => {
	missionObserver.observe(misson)
}) 


const hamburger = document.querySelector('.hamburger')            
const navigation = document.querySelector('.navigation__menu')

const header = document.querySelector('.header')

const IS_ACTIVE = 'is-active'     // for hamburger
const SHOW = 'show'
const WITH_BACKGROUND = 'with__background'

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle(IS_ACTIVE)     // for hamburger 
	navigation.classList.toggle('open')     // for navigation menu
}) 


let prevScrollPos = window.pageYOffset

window.onscroll = () => {
	const currentScrollPos = window.pageYOffset
	const halfScreenHeight = Math.floor(window.innerHeight / 2)

	hamburger.classList.remove(IS_ACTIVE)
	navigation.classList.remove('open')

	if (currentScrollPos > halfScreenHeight) {
		header.classList.add(WITH_BACKGROUND)
	} else {
		header.classList.remove(WITH_BACKGROUND)
	}

	const HIDING = 'hiding'

	if (currentScrollPos > prevScrollPos) {
		header.classList.remove(SHOW)
		header.setAttribute('id', HIDING)

		setTimeout(() => {
			header.removeAttribute('id', HIDING)
		}, 900)
	} else {
		header.classList.add(SHOW)
	}

	prevScrollPos = currentScrollPos
}