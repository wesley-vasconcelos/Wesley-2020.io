import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../../pages2/home';
import Expertise from '../../pages2/expertise';
import Announcement from '../../pages2/announcement';
import Attachment from '../../pages2/attachment';
import Review from '../../pages2/review';
import Surrender from '../../pages2/surrender';
import Navbar from '../../components2/navbar';

const Veiculos = () => {
	const routes = [
		{ component: Home, path: '/veiculo/', exact: true, name: 'Inicio' },
		{ component: Expertise, path: '/veiculo/pericia', name: 'Pericia' },
		{ component: Announcement, path: '/veiculo/anuncio', name: 'Anuncio' },
		{ component: Attachment, path: '/veiculo/anexo', name: 'Anexo' },
		{ component: Review, path: '/veiculo/revisao', name: 'Revisão' },
		{ component: Surrender, path: '/veiculo/entrega', name: 'Entrega' }
	];
	return (
		<Router>
			<Navbar routes={routes} />
			{routes.map((i) => <Route key={i.path} component={i.component} exact={i.exact} path={i.path} />)}
		</Router>
	);
};

export default Veiculos;
