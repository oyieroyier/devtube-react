import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const theme = localStorage.getItem('theme');

function changeTheme() {
	if (theme === 'light') {
		localStorage.setItem('theme', 'dark');
		window.location.reload();
	} else {
		localStorage.setItem('theme', 'light');
		window.location.reload();
	}
}

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<MantineProvider defaultColorScheme={theme}>
			<button onClick={changeTheme}>haha</button>
			<App />
		</MantineProvider>
	</StrictMode>
);
