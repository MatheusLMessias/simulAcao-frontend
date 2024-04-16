import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../scenes/Initial/App';
import Login from '../scenes/Login/index';

const Scenes: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	</BrowserRouter>
);

export default Scenes;