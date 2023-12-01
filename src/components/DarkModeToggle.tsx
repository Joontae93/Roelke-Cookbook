import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
	const [darkMode, setDarkMode] = useState(() => {
		const darkModeCookie = document.cookie
			.split('; ')
			.find((cookie) => cookie.startsWith('darkMode='));
		if (darkModeCookie) {
			return darkModeCookie.split('=')[1] === 'true';
		}
		return window.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		const rootElement = document.documentElement;
		rootElement.setAttribute('data-bs-theme', darkMode ? 'dark' : 'light');
		document.cookie = `darkMode=${darkMode}`;
	}, [darkMode]);

	return (
		<div>
			<input
				type="radio"
				className="btn-check"
				name="options"
				id="option1"
				autoComplete="off"
				checked={darkMode}
				onChange={() => setDarkMode(!darkMode)}
			/>
			<label className="btn btn-secondary" htmlFor="option1">
				Lights Off
			</label>
			<input
				type="radio"
				className="btn-check"
				name="options"
				id="option2"
				autoComplete="off"
				checked={!darkMode}
				onChange={() => setDarkMode(!darkMode)}
			/>
			<label className="btn btn-secondary" htmlFor="option2">
				Lights On
			</label>
		</div>
	);
}
