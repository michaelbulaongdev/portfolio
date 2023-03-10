import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Link,
	Typography,
} from '@mui/material';
import {listWorks} from './lists';
import Spacer from './Spacer';

export default function Works() {
	return (
		<div>
			<Spacer id='Works' />
			<Container maxWidth='md' align='center'>
				<Typography variant='h4'>Sample Works</Typography>
				<Grid
					container
					my={3}
					spacing={3}
					sx={{
						display: 'flex',
						alignItems: 'stretch',
						justifyContent: 'center',
					}}>
					{listWorks.map((item) => (
						<Grid item key={item.link} xs={8} sm={6} md={4}>
							<Card sx={{maxWidth: 325}}>
								<CardActionArea href={item.link} target='_blank'>
									<CardMedia
										sx={{minHeight: 200}}
										image={item.image}
										title={item.thumbnail}
									/>
									<CardContent>
										<Typography variant='h6' component='div'>
											{item.title}
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											{item.description}
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						</Grid>
					))}
				</Grid>
				<Typography variant='body2'>
					For more samples, please visit my{' '}
					<Link
						color='primary.dark'
						target='_blank'
						href='https://github.com/michaelbulaongdev'>
						GitHub account page
					</Link>
					.
				</Typography>
			</Container>
		</div>
	);
}
