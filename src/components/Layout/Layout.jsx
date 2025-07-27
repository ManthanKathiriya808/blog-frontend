import Category from "../Category/Category";
import Navbar from "../Header/Navbar";



const Layout = ({children})=>{

    return(
        <>
                <Navbar/>
            <div className="container my-5">


                <div className="row">
                    <div className="col-md-3">

                <Category/>
                    </div>
                    <div className="col-md-9 mt-3 mt-md-0">

                            <div className="cont">
                                {children}
                            </div>
                
                    </div>


                </div>


            </div>

        </>
    )
}


export default Layout;