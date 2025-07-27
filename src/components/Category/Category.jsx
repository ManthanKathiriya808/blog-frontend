 
 const Category = ()=>{

    return(
        <>
            <div className="container position-sticky top-0">
                <h4> Category</h4>
                <div className="row mt-3 fs-5 ">

                        {
                              ["one", "two", "three", "four"].map((item, index) => (

                                <div className="col-md-12 col border py-2 px-3" key={index}>
                                   <a href={`/${item}`} className="text-decoration-none text-white"><div>
                                     {item}</div></a>
                                </div>
                                
                              ))

                        }

                </div>

            </div>
        </>
    )
 }

 export default Category