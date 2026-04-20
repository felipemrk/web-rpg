import "./menuItems.css";
import { Router } from "react-router-dom";

export default function Items() {
	const arrOptions = [
		{ id: 1, label: "Começar" },
		{ id: 2, label: "Configurações" },
		{ id: 3, label: "Sair" },
	];
	return arrOptions.map((option) => (
		<button key={option.id} type="button"><link rel="stylesheet" href="" />
			{option.label}
		</button>
	));
}
