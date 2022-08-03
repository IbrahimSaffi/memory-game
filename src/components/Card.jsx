import Box from "./Box"
function Card() {
    let setS
    let items = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
    let totalItems = 16
    let rows = []
    for (let i = 0; i < 4; i++) {
        let row = []
        for (let j = 0; j < 4; j++) {
           let itemToDisplay = Math.floor(Math.random()*totalItems)
           console.log(items[itemToDisplay],items)
           row.push(<Box svgNo={items[itemToDisplay]} />)
           items.splice(itemToDisplay,1)
           totalItems--
        }
        rows.push(<div className="row" >{row}</div>)
        //I think Use Effect can be used to re-render cards.
    }
    return (
        <div className="card" >
            {rows}
        </div>
    )
}
export default Card