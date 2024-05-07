import { createRoot } from "react-dom/client";
import * as React from "react";
import LoginForm from "./form.js";
import '../main.css'

// export const Login = () => {
// 	return (
// 	)

// }

createRoot(document.getElementById('root')!).render(
	<LoginForm
		types={[{ manifest: { id: 'i:grass' }, biome: { colors: ['#00ff00'] } }, { manifest: { id: 'i:lava' }, biome: { colors: ['#ff0000'] } }]}
		onSubmit={(username, password, setRegister) => {
			setRegister(true);
		}}
	/>
)