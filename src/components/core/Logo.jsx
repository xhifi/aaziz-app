import { Image } from 'components'

export default function Logo(props){
    const {width, height} = props;
    
    return (
        <Image src="https://bityl.co/EMUO" alt="This be da logo mon!" className="img-fluid" width={width} height={height}/>
    )
}