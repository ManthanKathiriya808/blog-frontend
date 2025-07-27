

const Card = ()=>{
    return(
        <>
            <div className="fs-5 gap-2 border  px-2 py-1 d-flex justify-content-between align-items-center ">

                <div className="content">
                    <div className="title">
                        <p className="text-danger fw-bolder">
                        Gujarat Monsoon LIVE
                        Floods in Shravan, heavy rains in Ahmedabad:
                         </p>
                    </div>
                    <div className="di">
                        <p>
                             Many areas of Ahmedabad submerged in water, vehicles submerged on Palanpur-Chhapi highway, red alert in 7 districts today
                        </p>
                    </div>
                </div>
                <div className="image">
                    <img src="https://images.bhaskarassets.com/webp/thumb/176x0/web2images/960/2025/07/24/editors-view_1753366891.gif" alt="Placeholder" style={{width:"300px", height:"150px"}}/> 
                </div>
            </div>

        </>
    )
}

export default Card