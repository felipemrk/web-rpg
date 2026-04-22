import { useState } from "react";
import "./components/Heroes.css";

// Alterar para puxar os heróis pelo arr


export default function HeroDisplay() {
	const [selectedHero, setSelectedHero] = useState<string | null>(null);

	return (
		<>
			<h1 className="title">Choose your hero!</h1>
			<div className="display">
				<div className="mary" onClick={() => setSelectedHero("Mary")}>
					Mary
				</div>
				<div className="creed" onClick={() => setSelectedHero("Creed")}>
					Creed
				</div>
			</div>
			{selectedHero && <button type="button" className="confirmButton">Confirm {selectedHero}</button>}
		</>
	);
}