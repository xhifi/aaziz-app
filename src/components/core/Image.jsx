export default function Image(props){
    const {src, alt, ...rest} = props;
    
    return <img src={src} alt={alt} {...rest} />
}

