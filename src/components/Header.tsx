import logo from './../assets/pae.png';
import githubLogo from './../assets/github.png';

function NavBar(){

    return(
        <nav className='flex flex-row gap-4 justify-between align-baseline'>
            <a className='hidden' href="/">Home</a>
            <a className='hidden' href="/emoji">Emojis</a>
            <a className='hidden' href="/">Pixilart Emojis</a>
        </nav>
    )
}


function Header(){


    return(
        <header className="flex flex-row bg-gold align-baseline p-2 justify-between">
            <a href="/">
                <div className="flex flex-row align-baseline gap-2 ">
                    <img src={logo} alt="heading image" className='w-32'/>
                    
                </div>
            </a>
            <NavBar/>
            <a href="https://github.com/iamBijoyKar/emojis-pixel-art">
                <img src={githubLogo} alt="github" className='w-12' />
            </a>

        </header>
    )
}
export default Header;