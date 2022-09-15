import { Image, Link } from 'components'

export default function Logo({width, height}){    
    return (
        <Link to="/" className="nav-link"><Image src="https://bityl.co/EMUO" alt="This be da logo mon!" className="img-fluid" width={width} height={height}/> Company Logo</Link>
    )
}