import './menuItems.css'

const options = ['Start', 'NothingYet', 'NothingYet']

export default function Items(){
    return (
        options.map((option) => (
            <button key={option}>{option}</button>
        ))
    )}