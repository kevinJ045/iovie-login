import { createRoot } from "react-dom/client";
import * as React from "react";
import LoginForm from "./form.js";

export const Login = () => {
	return <LoginForm
	types={[{ manifest: { id: 'i:grass' }, biome: { colors: ['#00ff00'] } }, { manifest: { id: 'i:lava' }, biome: { colors: ['#ff0000'] } }]}
	onSubmit={(username, password, setRegister) => {
		setRegister(true);
	}}></LoginForm>
}
