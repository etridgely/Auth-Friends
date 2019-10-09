import React from 'react';
import { Card } from 'semantic-ui-react';

 const Friend = (props) => {

    return (
        
        <Card>
            <Card.Group>
                <Card color = 'black' 
                header ={props.name}
                description = {`Age: ${props.age}`}
                meta = {`email: ${props.email}`}
                  />       
            </Card.Group>
        </Card>
        
        
    )

}

export default Friend;