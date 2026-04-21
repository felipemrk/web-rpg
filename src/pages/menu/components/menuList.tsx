import './menuList.css'
import { arrOptions } from './itemsList';
import { useNavigate } from "react-router-dom";


export default function MenuOptions() {

    const navigate = useNavigate();

    return (
		<>
			{arrOptions.map((option) => (
				<button
					key={option.id}
					type="button"
					onClick={() => navigate(option.path)}
				>
					{option.label}
				</button>
			))}
		</>
	);
}
