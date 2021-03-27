import { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Punch']);

        return ( 
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setcategories } />
            <hr/>
            
            { 
                categories.map( (category) => 
                    <GifGrid 
                        key= { category }
                        category={ category } 
                    />
                    )
            }

        </>
     );
}
 
export default GifExpertApp;