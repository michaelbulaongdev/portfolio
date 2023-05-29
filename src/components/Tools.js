import {Box, Container, Tooltip, Typography} from '@mui/material';
import Spacer from './Spacer';
import NextJS from '../images/nextjs-logo.png';
import ReactJS from '../images/react-logo.png';
import Tailwind from '../images/tailwind-logo.png';
import MUI from '../images/material-ui-logo.png';
import W3 from '../images/html-css-js-logo.png';

export default function Tools() {
	return (
		<section>
			<Spacer id='Tools' />
			<Container maxWidth='lg' align='center'>
				<Typography variant='h3'>My Tools</Typography>
				<Box className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-10 justify-center items-center'>
					<Tooltip title='Next-JS'>
						<img className='tools-logo h-28' src={NextJS} alt='next js logo' />
					</Tooltip>
					<Tooltip title='React-JS'>
						<img
							className='tools-logo h-28'
							src={ReactJS}
							alt='react js logo'
						/>
					</Tooltip>
					<Tooltip title='Tailwind-CSS'>
						<img
							className='tools-logo h-32'
							src={Tailwind}
							alt='tailwind logo'
						/>
					</Tooltip>
					<Tooltip title='Material-UI'>
						<img className='tools-logo h-20' src={MUI} alt='material-ui logo' />
					</Tooltip>
					<Tooltip title='CSS3 HTML5 JS'>
						<img className='tools-logo h-24' src={W3} alt='html css js logo' />
					</Tooltip>
				</Box>
			</Container>
		</section>
	);
}
