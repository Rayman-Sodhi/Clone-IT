const missons = document.querySelectorAll('.mission__container')
const hamburger = document.querySelector('.hamburger')
const navigation = document.querySelector('.navigation__menu')
const header = document.querySelector('.header')
const IS_ACTIVE = 'is-active'
const SHOW = 'show'
const WITH_BACKGROUND = 'with__background'
hamburger.addEventListener('click', () => {
	hamburger.classList.toggle(IS_ACTIVE)
	navigation.classList.toggle('open')
})
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
missons.forEach((misson) => {
	missionObserver.observe(misson)
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
