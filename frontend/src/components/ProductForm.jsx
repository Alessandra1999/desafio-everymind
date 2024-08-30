import { useState, useEffect } from 'react';
import { createProduct, updateProduct } from '../services/productService';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled.h2`
    color: #000087;
    margin-bottom: 15px;
`;

const Label = styled.label`
    font-weight: 600;
    font-size: 1.1em;
    margin-right: 8px;
    color: #000087;
`;

const Input = styled.input`
    height: 30px;
    border-radius: 3px;
    border: 2px solid #44749d;
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

const ProductForm = ({ product = {}, onClose, onSave }) => {
    const [formData, setFormData] = useState({
        productName: product.nome || "",
        productCode: product.codigo || "",
        description: product.descricao || "",
        price: product.preco || ""
    });

    useEffect(() => {
        if (product.id) {
            setFormData({
                productName: product.nome || "",
                productCode: product.codigo || "",
                description: product.descricao || "",
                price: product.preco || ""
            });
        }
    }, [product]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const productData = {
            nome: formData.productName,
            codigo: formData.productCode,
            descricao: formData.description,
            preco: parseFloat(formData.price)
        };

        try {
            if (product.id) {
                await updateProduct(product.id, productData);
            } else {
                await createProduct(productData);
            }

            onSave();
            onClose();

            setFormData({
                productName: "",
                productCode: "",
                description: "",
                price: ""
            });
        } catch (error) {
            console.error('Erro ao salvar o produto:', error);
        }
    };

    return (
        <Container>
            <Title>{product.id ? 'Editar Produto' : 'Adicionar Produto'}</Title>
            <form onSubmit={handleSubmit}>
                <Label>
                    Nome:
                    <Input
                        type="text"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        placeholder="Nome do produto"
                        required
                    />
                </Label>
                <Label>
                    Código:
                    <Input
                        type="text"
                        name="productCode"
                        value={formData.productCode}
                        onChange={handleChange}
                        placeholder="Código do produto"
                        required
                    />
                </Label>
                <Label>
                    Descrição:
                    <Input
                        type="text"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Descrição do produto"
                        required
                    />
                </Label>
                <Label>
                    Preço:
                    <Input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Preço do produto"
                        step="0.01"
                        required
                    />
                </Label>
                <CustomButton type="submit">Salvar</CustomButton>
                <CustomButton type="button" onClick={onClose}>Cancelar</CustomButton>
            </form>
        </Container>
    );
};

export default ProductForm;
