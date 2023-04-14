import {Box, Container, Grid, Toolbar, Typography} from '@mui/material';
import MBProfilePic from '../images/profile pic.jpeg';

export default function Home() {
	return (
		<section>
			<Container id='Home' maxWidth='md' align='center'>
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
		</section>
	);
}
