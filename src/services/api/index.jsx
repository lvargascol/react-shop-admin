const API = process.env.NEXT_PUBLIC_API_URL;
const VERSION = process.env.NEXT_PUBLIC_API_VERSION;

const endPoints = {
    auth: {
        login: `${API}/api/${VERSION}/auth/login`,
        profile: `${API}/api/${VERSION}/auth/profile`,
        refresh: `${API}/api/${VERSION}/auth/refresh-token`,
    },
    products: {
        getProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        getAllProducts: `${API}/api/${VERSION}/products`, 
        getProducts: (limit = 5, offset = 0) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,  
        updateProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        deleteProduct: (id) => `${API}/api/${VERSION}/products/${id}`,
        addProducts: `${API}/api/${VERSION}/products`,         
    },
    users: {
        getUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        updateUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        deleteUser: (id) => `${API}/api/${VERSION}/users/${id}`,
        getUsers: (limit = 5) => `${API}/api/${VERSION}/users?limit=${limit}`,
        addUsers: `${API}/api/${VERSION}/users`,
        available: `${API}/api/${VERSION}/users/is-available`,
    },
    categories: {
        getCategorie: (id) => `${API}/api/${VERSION}/categories/${id}`,
        updateCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        deleteCategory: (id) => `${API}/api/${VERSION}/categories/${id}`,
        getCategories: (limit = 5) => `${API}/api/${VERSION}/categories?limit=${limit}`, 
        addCategories: `${API}/api/${VERSION}/categories`,
        getCategoriesProducts: (id, limit = 5 , offset = 0) => `${API}/api/${VERSION}/categories/${id}/products?limit=${limit}&offset=${offset}`,  
    },
    files: {
        upload: `${API}/api/${VERSION}/files/upload`,
        getFile: (fileName) => `${API}/api/${VERSION}/files/${fileName}`,
    },
};

export default endPoints;