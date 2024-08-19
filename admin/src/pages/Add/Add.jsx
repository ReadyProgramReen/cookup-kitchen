import React from 'react'
import '../Add/Add.css'
import { assets } from '../../assets/admin_assets/assets'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = ({url}) => {

    const [image,setImage] = useState(false);
    const [data,setData] =useState({
        name:'',
        description:'',
        price:'',
        category:'Jamaica',

    })

    const onChangeHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        setData(data=>({...data,[name]:value}))

    }

    // api call

    const onSubmittHandler = async (event)=>{
        event.preventDefault();
        const formData = new FormData();

        formData.append('name',data.name)
        formData.append('description',data.description)
        formData.append('price',Number(data.price))
        formData.append('category',data.category)
        formData.append('image',image)
        const response = await axios.post(`${url}/api/food/add`, formData);

        if(response.data.success){
            setData({
                name:'',
                description:'',
                price:'',
                category:'Jamaica',
        
            })
            setImage(false)
            toast.success(response.data.message)
        }
        else{
            toast.error(response.data.message)

        }


    }

    
    
  return (
    <div className='add'>
        <form onSubmit={onSubmittHandler} className='flex-col' >
            <div className="add-image-upload flex-col">
                <p>Upload Image </p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image): assets.upload_area} alt="" />
                </label>
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
            </div>
            
            <div className="add-product-name flex-col">
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name="name" placeholder='Type here'  />
            </div>

            <div className="add-product-description flex-col">
                <p>Product Description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required></textarea>
            </div>
            
            <div className="add-category-price">
                <div className="add-category flex-col">
                    <p>Product Category</p>
                    <select onChange={onChangeHandler}  name="category" >
                        <option value="Jamaica">Jamaica</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Trinidad">Trinidad</option>
                        <option value="Saint Lucia">Saint Lucia</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Saint Kitts">Saint Kitts</option>
                        <option value="Sint Maarten">Sint Maarten</option>

                    </select>
                </div>

                <div className="add-price flex-col">
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="Number" name='price' placeholder='$20' />
                </div>

            </div>

            <button type='submit' className='add-btn'>ADD</button>
        </form>
    </div>
  )
}

export default Add