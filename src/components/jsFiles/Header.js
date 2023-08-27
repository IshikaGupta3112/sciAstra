import '../stylesheets/TeamPage.css'
import Logo from '../../assets/Logo.webp'

function Header(){
    return(<>
    <div id='headerDiv'>
    <img src={Logo}></img> 
    <h1>TeamPage</h1>
    <h2>Learn from the scientists, research scholars from the top institute in the world.</h2>
    </div>
    </>)
}
export default Header;