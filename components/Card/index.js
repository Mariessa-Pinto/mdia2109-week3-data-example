export default function Card({
    degree = "none",
    color = "purple",
    font = "0",
    image = "icon/personTwo.png",
    display = "block",
    alignItems = "start",
    gap = "0",
    padding = "0",
    borderRadius = "0",
    height = "50px"
}) {
    return (
        <div style={{backgroundColor: color, fontSize: font, display: display, alignItems: alignItems, gap: gap, padding: padding, borderRadius: borderRadius, height: height }}>
            {
                color === "rgb(220 200 180)" ? <img src={'photos/business.png'} width="50"/> :
                color === "rgb(231 214 190)" ? <img src={'photos/computer.png'} width="50"/> :
                                <img src={image} width="50"/>
            }
            {degree}
        </div>
    )
}