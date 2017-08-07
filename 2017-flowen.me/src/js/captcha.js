export default function captcha() {
	const formCaptcha = document.querySelector('.form-captcha')
	if (!formCaptcha) return

	const inputCaptcha = formCaptcha.querySelector('#input-captcha')
	const submitCaptcha = formCaptcha.querySelector('.submit-captcha')
	const myName = 'Rou Hun'
	const user = 'lowen',
		domain = 'flowen.nl',
		subject = 'wow! your name is really hard to spell';
	
	formCaptcha.addEventListener('submit', (e) => {
		e.preventDefault()
		// make sure we disable case sensitivity, my name is hard enough to spell
		if (inputCaptcha.value.toUpperCase() === myName.toUpperCase()) {
			window.open(`mailto: ${user}@${domain}?subject=${subject}`);
		} else {
			alert(`C'mon! it's not THAT hard`)
		}
	})
}