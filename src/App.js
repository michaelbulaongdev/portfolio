import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from '@mui/material';
import DrawerAppBar from './components/DrawerAppBar';
import About from './components/About';
import Works from './components/Works';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

export default function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<header>
				<DrawerAppBar />
			</header>
			<main>
				<About />
				<Works />
				<Certificates />
				<Contact />
			</main>
		</ThemeProvider>
	);
}
