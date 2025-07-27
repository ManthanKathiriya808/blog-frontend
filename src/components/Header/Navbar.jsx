


const Navbar = ()=>{


    return(
        <nav className="navbar navbar-expand-lg navbar-bg ">
            <div className="container ">
                <a href="#" className=" text-white navbar-brand fs-3 ">Blog Project</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto fs-4">
                        <li className="nav-item"> <a href="" className="nav-link text-white">Home</a></li>
                        <li className="nav-item"> <a href="" className="nav-link text-white">Home</a></li>
                        <li className="nav-item"> <a href="" className="nav-link text-white">Home</a></li>
                        <li className="dropdown"> <a href="" className="nav-link text-white  dropdown-toggle" data-bs-toggle="dropdown">Home</a>
                           <ul className="dropdown-menu"> 
                            <li><a href="" className="dropdown-item ">Submenu 1</a></li>    
                         
              
                         </ul>
                        
                        </li>
                     
                    </ul>
                </div>
            </div> 

        </nav>
    )
}


export default Navbar