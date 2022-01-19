import '../styles/Banner.css'
import logo from '../assets/helyx.svg'

function Banner(){
    return (
        <div className={'banner'}>
            <img src={logo} alt={'helyx'} className={logo} />
            <h1 className={'title'}>Pokémon</h1>
        </div>

    )
}
export default Banner