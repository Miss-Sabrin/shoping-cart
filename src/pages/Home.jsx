import Cards from "../components/cards";
import data from "../backend/Data";
import "./Home.css";


const Home=()=> {
  return (
    <div className="container-fluid">
        <p className="text-center mt-5 text-uppercase fw-bolder ">Shooping Page</p> 
        <div className="container py-4">
            <div className="row">
                {data.products.map((item, index)=>{
                    return(
                        <Cards img={item.img} title={item.title}
                         desc={item.desc} price={item.price} item={item} key={index} />
                        

                    )
                })}
               

            </div>

        </div>


        </div>
  )
}
 
export default Home;