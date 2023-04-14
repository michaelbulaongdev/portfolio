import {Box, Container, Grid, Toolbar, Typography} from '@mui/material';
import Spacer from './Spacer';
import MBProfilePic from '../images/profile pic.jpeg';
import MBLogo from '../images/MBM_icon_W.png';

export default function About() {
	return (
		<section>
			<Container id='About' maxWidth='md' align='center'>
				<Toolbar sx={{display: {xs: 'none', sm: 'none', md: 'block'}}} />
				<Grid container my={5}>
					<Grid
						item
						xs={12}
						md={6}
						sx={{
							display: 'flex',
							alignContent: 'center',
							flexDirection: 'column',
						}}>
						<Typography variant='h6' pt={9}>
							Hi, my name is
						</Typography>
						<Typography
							variant='h1'
							pb={7}
							sx={{fontFamily: 'Permanent Marker'}}>
							Mike
						</Typography>
					</Grid>
					<Grid item xs={12} md={6}>
						<Box
							component='img'
							// src='https://i.imgur.com/z33vWH4.jpeg' //replaced with local import
							src={MBProfilePic}
							alt="Mike's profile picture"
							width={250}
							sx={{
								borderRadius: '50%',
							}}
						/>
					</Grid>
				</Grid>
				<Box
					mt={'1rem'}
					sx={{
						maxWidth: 500,
						borderTop: 1,
						borderBottom: 1,
						p: 2,
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Typography variant='h5' align='center'>
						music technologist
					</Typography>
					<Typography variant='h5' align='center'>
						web developer
					</Typography>
				</Box>
			</Container>
			<Spacer />
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
