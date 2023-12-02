import { useState, useEffect } from 'react';
import '../scss/DarkModeToggle.scss';
import { LightsOff, LightsOn } from '../assets/ToggleIcons';
// import { ReactComponent as Cake } from 'bootstrap-icons/icons/cake-fill.svg';
// import { ReactComponent as Cake2 } from 'bootstrap-icons/icons/cake2-fill.svg';

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
		<div className="toggle">
			<div
				className="toggle-icon"
				dangerouslySetInnerHTML={{ __html: LightsOn }}
			/>
			<div className="toggle-switch">
				<input
					type="radio"
					className="toggle-switch-checkbox"
					name="options"
					id="option1"
					autoComplete="off"
					checked={darkMode}
					onChange={() => setDarkMode(!darkMode)}
					onClick={() => setDarkMode(!darkMode)}
				/>
				<label className="toggle-switch-label" htmlFor="option1">
					<span className="toggle-switch-inner" />
					<span className="toggle-switch-switch" />
				</label>
			</div>
			<div
				className="toggle-icon"
				dangerouslySetInnerHTML={{ __html: LightsOff }}
			/>
		</div>
	);
}
