import {Box, Container, Typography} from '@mui/material';
import Spacer from './Spacer';
import MBLogo from '../images/MBM_icon_W.png';

export default function About() {
	return (
		<section>
			<Spacer id='About' />
			<Container maxWidth='md' align='center'>
				<Box>
					<Typography className='max-w-lg italic' variant='h6'>
						"For me, learning is a never ending quest; therefore, I consider
						myself a student of this university called 'life'."
					</Typography>
				</Box>
				<Box component='img' src={MBLogo} alt='MB logo' width={250} p={5} />
			</Container>
		</section>
	);
}
