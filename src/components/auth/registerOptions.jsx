import React, { Component } from 'react';

class registerOptions extends Component {
  
    render() { 
    const registerOptions = (

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-4">Register as individual</div>
                    <div className="col-4">Register as Company</div>
                    <div className="col-4">Forex</div>
                </div>
            </div>
        </section>
    )
        return <div>
        {registerOptions}
        </div>;
    }
}
 
export default registerOptions;