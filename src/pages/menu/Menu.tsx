import './Menu.css'
import MenuOptions from './components/menuList';

function Menu(){
  return (
    <div className='menuBody'>
      <h1>My RPG</h1>
      <MenuOptions />
    </div>
      
  )
}

export default Menu;