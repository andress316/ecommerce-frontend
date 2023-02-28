// import { Button, Card } from 'react-bootstrap'

// const Product = ( props ) => {
//   const { product } = props
//   return (
//     <Card style={ { width: '18rem' } } key={ product._id }>
//       <Card.Img variant="top" src={ product.image } />
//       <Card.Body>
//         <Card.Title>{ product.name }</Card.Title>
//         <Card.Text>
//           { product.price }
//         </Card.Text>
//         <Button variant="primary">Agregar al carrito</Button>
//       </Card.Body>
//     </Card> )
// }
// export default Product


import { useContext } from 'react'
import { Button, Card } from 'react-bootstrap'
import ShoppingCartContext from '../../../../contexts/shopping-cart/ShoppingCartContext.js'

const Product = ( props ) => {
  const { product } = props
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { addProduct } = shoppingCartCtx

  return (
    <Card style={ { width: '18rem', backgroundColor:'#23252A', margin:'20px', padding:'10px' } } key={ product._id }>
      <Card.Img variant="top" src={ product.image } />
      <Card.Body>
        <Card.Title>Modelo: { product.name }</Card.Title>
        <Card.Text>
         Precio: $ { product.price }
        </Card.Text>
        <Button variant="warning" onClick={ () => {
          addProduct( product )
        }
        } >Agregar al carrito</Button>
      </Card.Body>
    </Card> )
}
export default Product