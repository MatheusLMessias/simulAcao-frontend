import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../scenes/Login/index';

const Scenes: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	</BrowserRouter>
);

export default Scenes;