import logo from './logo.svg';
export default function Navbar(){
    return(
        <div>
            <nav className="nav">
                <img src={logo} alt="" />
                <h3>React Facts</h3>
                <h4>React Course - Project 1</h4>
            </nav>
        </div>
    )
}