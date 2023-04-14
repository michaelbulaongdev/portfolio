import {
	Box,
	Button,
	IconButton,
	Container,
	Link,
	Typography,
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Spacer from './Spacer';

export default function Contact() {
	return (
		<section>
			<Spacer id='Contact' />
			<Container maxWidth='sm' align='center'>
				<Typography variant='h3'>Contact Me</Typography>
				<Typography my={1} variant='subtitle1'>
					For inquiries, you can reach me through the following channels:
				</Typography>
				<Box
					mt={3}
					sx={{
						width: 200,
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<IconButton
						target='_blank'
						href='mailto:michaelbulaongdev@gmail.com'
						aria-label='mail'
						size='large'>
						<EmailIcon />
					</IconButton>
					<IconButton
						target='_blank'
						href='https://www.linkedin.com/in/michaelbulaong/'
						aria-label='linkedin'
						size='large'>
						<LinkedInIcon />
					</IconButton>
					<IconButton
						target='_blank'
						href='https://github.com/michaelbulaongdev'
						aria-label='github'
						size='large'>
						<GitHubIcon />
					</IconButton>
				</Box>
				<Button
					sx={{mt: '1rem'}}
					variant='outlined'
					size='small'
					target='_blank'
					href='https://drive.google.com/file/d/1fJuYNKPtGzUF9L_4eM-OD1Ww9WG8cfSv/view?usp=share_link'>
					download resume
				</Button>
				<Spacer />
				<Spacer />
				<Link
					sx={{fontSize: '0.8rem'}}
					target='_blank'
					href='https://github.com/michaelbulaongdev/portfolio'
					underline='hover'>
					react + mui | gh-repo: michaelbulaongdev/portfolio
				</Link>
			</Container>
		</section>
	);
}
