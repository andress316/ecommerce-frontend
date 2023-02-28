import { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ShoppingCartContext from '../../contexts/shopping-cart/ShoppingCartContext.js';

function addCheckout( preferenceId ) {
  const mp = new window.MercadoPago( 'TEST-155e2b63-26f2-48de-add5-fbc20c4d0bca', {
    locale: 'es-CL'
  } );

  // Inicializa el checkout
  mp.checkout( {
    preference: {
      id: preferenceId,
    },
    render: {
      container: `#payment-form`, // Indica el nombre de la clase donde se mostrará el botón de pago
      label: 'Pagar', // Cambia el texto del botón de pago (opcional)
    },
  } );
}

const Checkout = () => {
  const shoppingCartCtx = useContext( ShoppingCartContext )
  const { products, removeProduct } = shoppingCartCtx
  const [ total, setTotal ] = useState( 0 )
  const [ preferenceId, setPreferenceId ] = useState( '' )
  useEffect( () => {

    setTotal( 0 )
    products.forEach( product => {
      const price = parseInt( product.price )
      setTotal( ( current ) => {
        return current + price * product.quantity
      } )
    } )



  }, [ products ] )

  useEffect( () => {

    const getPreferenceId = async () => {
      const token = localStorage.getItem( 'token' )

      const fetchResponse = await fetch( 'http://localhost:4500/orders', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${ token }`,
          "Accept": "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify( { products } )
      } )
      const response = await fetchResponse.json()
      if ( !fetchResponse.ok ) {
        throw new Error( response.details )
      }
      setPreferenceId( response.preferenceId.body.id )
    }
    try {
      getPreferenceId()

    } catch ( error ) {
      console.error( error )
    }



  }, [ products ] )

  useEffect( () => {
    if ( preferenceId ) {
      // con el preferenceId en mano, inyectamos el script de mercadoPago
      const script = document.createElement( 'script' );
      script.type = 'text/javascript';
      script.src = 'https://sdk.mercadopago.com/js/v2';
      script.addEventListener( 'load', () => addCheckout( preferenceId ) ); // Cuando cargue el script, se ejecutará la función addCheckout
      document.body.appendChild( script );
    }
  }, [ preferenceId ] );
  return (
    

      <div className="bg-black" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginLeft: '40px', marginTop: '50px', maxWidth: '800px', flexDirection: 'column'}}>
        <h1>Checkout</h1>
        {
          products?.length === 0 ? 'No hay productos'
            : (
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th style={{color:'white'}}>#</th>
                    <th style={{color:'white'}}>Nombre</th>
                    <th style={{color:'white'}}>Precio</th>
                    <th style={{color:'white'}}>Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products?.map( ( product, index ) => {
                      return (
                        <tr key={ index }>
                          <td style={{color:'white'}}>{ index + 1 }</td>
                          <td style={{color:'white'}}>{ product.name }</td>
                          <td style={{color:'white'}}>{ product.price * product.quantity }</td>
                          <td style={{color:'white'}}>{ product.quantity }</td>

                          <td><button onClick={ () => {
                            removeProduct( product._id )
                          }
                          } ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                              <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                            </svg></button></td>
                        </tr> )
                    } )
                  }
                </tbody>
                <tfoot>
                  <tr>
                    <td style={{color:'white'}}>TOTAL: { total }</td>
                  </tr>
                </tfoot>
              </Table>
            )
        }
        <div className="mt-10" id="payment-form"></div>
      </div>
      
    
  )
}

export default Checkout