import { Link, useLocation } from 'react-router-dom'

export default function NavBar(props) {
    const { pathname } = useLocation();
    if (pathname === "/") {
        return (
            <nav className="navigationBar">
                <div className="scoreSection">
                    <p className='scoreTrack'>Score: {props.score} </p>
                </div>
                <Link to='/'>
                    <h1 className="gameTitle">Animal Name Game</h1>
                </Link>
                <div className="infoSection">
                    <Link to='/'>
                        <p className="infoItem">Game</p>
                    </Link>
                    <Link to='/ranking'>
                        <p className="infoItem">Rankings</p>
                    </Link>
                    <Link to='/profile'>
                        <p className="infoItem">Profile</p>
                    </Link>
                </div>
    
            </nav>
        )
    } else {
        return (
            <nav className="navigationBar">
                <Link to='/'>
                    <h1 className="gameTitle">Animal Name Game</h1>
                </Link>
                <div className="infoSection">
                    <Link to='/'>
                        <p className="infoItem">Game</p>
                    </Link>
                    <Link to='/ranking'>
                        <p className="infoItem">Rankings</p>
                    </Link>
                    <Link to='/profile'>
                        <p className="infoItem">Profile</p>
                    </Link>
                </div>
    
            </nav>
        )
    }

  }