import { useEffect, useState } from 'react';
import { getProducts, deleteProduct } from '../services/productService';
import ProductForm from './ProductForm';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Title = styled.h1`
    color: #4c11d2;
    margin-top: 50px;
`;

const Table = styled.table`
    border: 3px solid #44749d;
    border-collapse: collapse;
    margin-top: 50px;
    padding: 25px;
    border-radius: 8px;
    color: #13049a;
`;

const Th = styled.th`
    border: 2px solid #44749d;
    border-collapse: collapse;
    padding: 20px;
`;

const Td = styled.th`
    border: 2px solid #44749d;
    border-collapse: collapse;
`;

const CustomButton = styled.button`
    border: none;
    border-radius: 3px;
    background-color: #c6d4e1;
    color: #13049a;
    margin: 10px;
    padding: 5px;
    font-size: 1em;
    font-weight: 600;

    &:hover{
        cursor: pointer;
        background-color: #13049a;
        color: #c6d4e1;
        transform: scale(1.1);
    }
`;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        };
        fetchProducts();
    }, []);

    const handleDelete = async (id) => {
        await deleteProduct(id);
        setProducts(products.filter(product => product.id !== id));
    };

    const handleSelect = (product) => {
        setSelectedProduct(product);
    };

    const handleDeselect = () => {
        setSelectedProduct(null);
    };

    return (
        <Container>
            {selectedProduct ? (
                <ProductForm
                    product={selectedProduct}
                    onClose={handleDeselect}
                    onSave={() => {
                        setSelectedProduct(null);
                        getProducts().then(data => setProducts(data));
                    }}
                />
            ) : (
                <>
                    <ProductForm
                        onClose={handleDeselect}
                        onSave={() => getProducts().then(data => setProducts(data))}
                    />
                    <Title>Lista de Produtos</Title>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Nome</Th>
                                <Th>Código</Th>
                                <Th>Descrição</Th>
                                <Th>Preço</Th>
                                <Th>Ações</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <Td>{product.nome}</Td>
                                    <Td>{product.codigo}</Td>
                                    <Td>{product.descricao}</Td>
                                    <Td>{product.preco}</Td>
                                    <Td>
                                        <CustomButton onClick={() => handleSelect(product)}>Editar</CustomButton>
                                        <CustomButton onClick={() => handleDelete(product.id)}>Deletar</CustomButton>
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </>
            )}
        </Container>
    );
};

export default ProductList;
