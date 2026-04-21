import HeroSelector from "../../hero-selector/HeroSelector";
import Config from "../../config/GameConfig";
import Quit from "../../Quit";

export const arrOptions = [
    { id: 1, label: "Começar", path: "/hero-selector", element: <HeroSelector /> },
    { id: 2, label: "Configurações", path: "/config", element: <Config /> },
    { id: 3, label: "Sair", path: "/quit", element: <Quit /> },
];