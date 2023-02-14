import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './NavBar';


const AddOn =() => {
    return(
        <>
        
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<NavBar/>}>
                <Route path="AddOn" element={<AddOn/>}/>

            </Route>
            </Routes>
            </BrowserRouter>
        </>
    )
}
export default AddOn;