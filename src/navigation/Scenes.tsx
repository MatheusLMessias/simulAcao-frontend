import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../scenes/Initial/App';

const Scenes: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	</BrowserRouter>
);

export default Scenes;