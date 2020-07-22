import React from "react";

const Image = ({icon, desc}) => {

    let baseurl = "http://openweathermap.org/img/wn/" + `${icon}` + "@2x.png"


    return (
        <div>
            <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt={desc}></img>
        </div>
    )
    

}

export default Image;