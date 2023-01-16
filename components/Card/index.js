export default function Card({
    degree = "none",
    color = "purple",
    font = "0",
    image = "icon/personTwo.png"
}) {
    return (
        <div style={{backgroundColor: color, fontSize: font}}>
            {
                color === "red" ? <img src={'icon/person.png'} width="50"/> :
                color === "blue" ? <img src={'icon/personThree.png'} width="50"/> :
                                <img src={image} width="50"/>
            }
            {degree}
        </div>
    )
}