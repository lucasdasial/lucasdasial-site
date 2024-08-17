import './styles.css';

export function TopBar() {
    return <header className='header'>

        <div className='avatar-container'>

            <img className='avatar' src="fav.png" alt="foto de perfil" />
            <p className='myName'><strong>Lucas Alves</strong> </p>
        </div>


        <nav data-aos="fade-up" data-aos-delay="1000">
            <button>
                Contato
            </button>
        </nav>
    </header>
}