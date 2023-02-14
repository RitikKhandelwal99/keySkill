import React from 'react';
import index from './index';
import AddOn from './AddOn';


const App = () => {
  return(

  <>

    <div className="heading">
    <h2> Key Skills</h2>
    <hr/>
    <br/>
    <div className="box">
    <input type="text" placeholder="python"/>
    
    <input type="text" placeholder="java"/>

    
    
    </div>
    <br/>
    <div className="test">
      <input type="text" placeholder="MernStack"/>

      <input type="text" placeholder="type a text"/>



    </div>
    <br/>
    <AddOn/>
    <br/>
    <br/>
    <br/>
    <br/>
    <hr/>
    <div className="btn">
    <button type="button" className="btn btn-primary btn-lg">Back</button>
<button type="button" className="btn btn-secondary btn-lg">Preview</button>
    </div>
 
    </div>
     
     
    
    
  
    </>
  
    
    

    
    )
    }
    
  
export default App;
