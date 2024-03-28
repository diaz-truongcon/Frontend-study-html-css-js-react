import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Json(props) {

    const [showModal, setShowModal] = useState(false);
    const [update, setUpdate] = useState(false);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newProduct, setNewProduct] = useState(
        {
            name: '',
            price: '',
            category: '',
            img: '',
        }
    )
    const handleInputChange = e => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/products", newProduct);
            setShowModal(false);
            setUpdate( !update);
        } catch (error) {
            console.error('Error', error)
        }
    }

    useEffect(() => {
        fetchCategories();
        fetchProducts();
    }, [update]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("http://localhost:3000/category");
            setCategories(response.data)
        } catch (error) {
            console.error('Error', error)
        }
    }

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data);
        } catch (error) {
            console.error('Errorr', error);
        }
    }

    const handleDelete = async (productID) => {
        try {
            await axios.delete(`http://localhost:3000/products/${productID}`);
            setUpdate(!update);
        } catch (error) {
            console.error('Error', error)
        }
    }


    const nameByCategory = (id) => {
        const category = categories.find((category) => category.id == id);
        console.log(category);
        return category ? category.name : '';
    }

    return (
        <>
            <h1 className='text-center  mt-10 text-red-900'>Product List</h1>
            <button onClick={() => { setShowModal(true) }} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mb-4">Add Product</button>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {
                        products.map((item, index) => (
                            <>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.name}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{item.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{nameByCategory(item.category)}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={item.img} className="h-12 w-12 object-cover" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-blue-600">Edit</button>
                                        <button onClick={() => handleDelete(item.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                                    </td>
                                </tr>

                            </>
                        ))
                    }

                </tbody>
            </table>
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg w-1/2">
                        <h2 className="text-2xl font-semibold mb-4"></h2>
                        <form onSubmit={handleSubmit} >
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name:</label>
                                <input type="text" id="name" name="name" value={newProduct.name} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price:</label>
                                <input type="text" id="price" name="price" value={newProduct.price} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category:</label>
                                <select id="category" name="category" value={newProduct.category} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
                                    <option value="" disabled>Select Category</option>
                                    {categories.map(category => (
                                        <option key={category} value={category.id}>{category.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="img" className="block text-sm font-medium text-gray-700">Image URL:</label>
                                <input type="text" id="img" name="img" value={newProduct.img} onChange={handleInputChange} className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="flex justify-end">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">add</button>
                                <button onClick={() => setShowModal(false)} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-2 hover:bg-gray-400">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Json;