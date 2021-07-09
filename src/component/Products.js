import {BrowserRouter as Route,Link} from "react-router-dom"
import {useState,useEffect} from "react"
import axios from "axios"
import "../styles/Product.css"

function Products() {
  const [products,setProducts]=useState([])
  useEffect(() => {
    axios({
      method:"get",
      url:"https://fakestoreapi.com/products",
    }).then(res=>{
      console.log(res.data)
      setProducts(res.data)

    })
   
  }, [])
  return (
    <div>
      <h3>Welcome to Product Page</h3>
      {products.map(prod=>{
        return(
          <div className="prod">
            <h4>{prod.title}</h4>
            <Link to={`/product/${prod.id}`}>
            <img src={prod.image} alt="prod" style={{width:"20%"}}/>
            </Link>
            <p>${prod.price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Products
