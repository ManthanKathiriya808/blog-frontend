import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";



const Home = ()=>{

    return(
        <Layout>
            <div className="d-flex flex-column gap-4 py-2">
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>
                   <Card/>

            </div>
        </Layout>
    )
}


export default Home;