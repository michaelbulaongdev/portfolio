import {useState} from 'react';
import {
	Accordion,
	AccordionSummary,
	AccordionDetails,
	CardMedia,
	Container,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {listCert} from './lists';
import Spacer from './Spacer';

export default function Certificates() {
	const [expanded, setExpanded] = useState('');

	const handleChange = (panel) => (event, newExpanded) => {
		setExpanded(newExpanded ? panel : false);
	};

	return (
		<section>
			<Spacer id='Certificates' />
			<Container maxWidth='sm' align='center'>
				<Typography variant='h3'>My Certificates</Typography>
				<List>
					{listCert.map((item) => (
						<Accordion
							key={item.link}
							expanded={expanded === item.link}
							onChange={handleChange(item.link)}
							disableGutters={true}>
							<AccordionSummary expandIcon={<ExpandMoreIcon />}>
								<ListItem disablePadding>
									<ListItemIcon>
										<WorkspacePremiumIcon color='success' size='large' />
									</ListItemIcon>
									<ListItemText secondary={item.title} />
								</ListItem>
							</AccordionSummary>
							<AccordionDetails>
								<a
									className='cert-image'
									target='_blank'
									rel='noreferrer'
									href={item.link}>
									<CardMedia sx={{minHeight: 350}} image={item.image} />
								</a>
							</AccordionDetails>
						</Accordion>
					))}
				</List>
			</Container>
		</section>
	);
}
