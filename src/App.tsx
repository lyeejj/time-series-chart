import { Routes, Route } from 'react-router-dom';
import { ROUTES } from './constants/constants';
import ChartPage from './pages/ChartPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
	return (
		<Routes>
			<Route path={ROUTES.MAIN} element={<ChartPage />} />
			<Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
