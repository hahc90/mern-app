import { Link } from 'react-router-dom';

const DashboardHeader = () => {
	const content = (
		<header className="dashboard-header">
			<div className="dashboard-header__container">
				<Link to="/dashboard/notes">
					<h1 className='dashboard-header__title'>TechNotes</h1>
				</Link>
				<nav className="dashboard-header__nav">
				</nav>	
			</div>	
		</header>
	)
	return content;
};
export default DashboardHeader;