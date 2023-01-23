import "../css/Ad.css"
interface AdProperties {
    flavor:string,
    isLight:boolean,
    fontSize:number
}
function Ad(props:AdProperties) {
    let className = "Ad " + (props.isLight ? "Add--light" : "Ad--dark")
    return (
        <div className={className}>
            <p>Vote For:</p>
            <p className="cursive" style={{fontSize: props.fontSize}}>{props.flavor}</p>
            
        </div>
    )
}

export default Ad