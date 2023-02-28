import Carrusel from "../Carrusel.js";
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Row';
import Catalogue from './catalogue/catalogo.js';

import { useContext, useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserContext from '../../contexts/users/UserContext.js'





// const HomePage = () => {
    
    
    
//     return (


//         <div>
//             <Carrusel />

//             <Container className="mt-5">
//             <Row xs={1} md={2} className="g-4 justify-content-md-center">
//             <Catalogue />   
//             {/* <CardCategoria /> */}  
//             </Row>
//             </Container>
            
//         </div>



//     )
// }

// export default HomePage;


export default function HomePage() {
    const userCtx = useContext( UserContext )
  
    const { authStatus, verifyingToken } = userCtx
  
    const [ loading, setLoading ] = useState( true )
  
    useEffect( () => {
  
      if ( !authStatus ) {
        const verifyUser = async () => {
          await verifyingToken()
          setLoading( false )
        }
        verifyUser()
      }
  
    }, [ authStatus, verifyingToken ] )
  
    if ( loading ) return ( <><Spinner></Spinner></> )
    return (
        <div>
            <Carrusel />
            <Container className="mt-5">
            <Row xs={1} md={2} className="g-4 justify-content-md-center">
            <Catalogue />   
            </Row>
            </Container>         
        </div>
    )
    
  }



