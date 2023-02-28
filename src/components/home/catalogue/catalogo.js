import { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap'
import "./catalogo.css"
import Product from './product/product.js'



export default function Catalogue() {
  const [ products, setProducts ] = useState( [] )
  const [ loadingData, setLoadingData ] = useState( true )

  useEffect( () => {
    const obtenerCatalogue = async () => {

      try {
        const response = await fetch( 'http://localhost:4500/products' )
        const products = await response.json()
        setProducts( products )
        setLoadingData( false )

      } catch ( error ) {
        console.error( error )
      }

  }

  try{
    obtenerCatalogue()
  }catch(error){
    setLoadingData(false)
    console.error(error)
  }

}, [] )
  return (




    <Container>
      <h1 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '40px'  }}>Nuestras Guitarras</h1>
      <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      
      {
        loadingData ? (
          <Spinner animation='border' role={ "status" }></Spinner>
        ) :
          <div className='list-products'>
            {
              products.length === 0 ?
                <h1>No hay productos</h1>
                : products.map( ( product, index ) => (
                  <Product product={ product } key={ index }></Product>
                ) )
            }
          </div>


      }
    </Container>
   
  )
}