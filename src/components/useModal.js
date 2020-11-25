import { useState } from 'react'

const useModal = () => {
	const [isShown, setIsShown] = useState(false)

	function toggle() {
		setIsShown(!isShown)
	}

	return {
		isShown,
		toggle,
	}
}

// use this in the display page...for products

export default useModal
