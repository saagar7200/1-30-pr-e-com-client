/* eslint-disable @typescript-eslint/no-explicit-any */
import api from './index'

// * get featured 
export const getFeaturedProducts = async() =>{
    try {

        const response = await api.get('/product/featured')
        return response.data
        
    } catch (error:any) {
          throw error.response.data
    }
}

//* get all products



//* get most sale


//* get summer sale