import { NordicWalkingOutlined, PedalBikeOutlined, SportsSoccerOutlined, WaterDropOutlined } from "@mui/icons-material"

function ActivityIcon({type}) {

    let item = null
    if (type === "footing") {
        item = <SportsSoccerOutlined/>
    } else if (type === "swimming") {
        item = <WaterDropOutlined/>
    } else if (type === "bike") {
        item = <PedalBikeOutlined/>
    } else { // Walking
        item = <NordicWalkingOutlined/>
    }

    return (
        <>
            {item}
        </>
    )
}

export default ActivityIcon;