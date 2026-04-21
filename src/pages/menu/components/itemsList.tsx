import HeroSelector from "../../hero-selector/HeroSelector";
import Config from "../../config/GameConfig";
import Quit from "../../Quit";

export const arrOptions = [
    { id: 1, label: "Start", path: "/hero-selector", element: <HeroSelector /> },
    { id: 2, label: "Configuration", path: "/config", element: <Config /> },
    { id: 3, label: "Quit", path: "/quit", element: <Quit /> },
];