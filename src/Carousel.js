import React from 'react'

class Carousel extends React.Component{
    
    constructor(props){
        super(props)

        this.state = {
            photos: [],
            active: 0
        }
    }
    
    render(){
        const {photos, active} = this.state
        return (
            <div className="carousel">
                <img src={photos[active]} alt="animal"/>
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                        //eslint-disable-next-line
                        <img key={photo}
                            onClick={this.handleIndexClick}
                            ONkE
                            data-index={index}
                            src={photo}
                            className={index === active ? "active": ""}
                            />
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel 