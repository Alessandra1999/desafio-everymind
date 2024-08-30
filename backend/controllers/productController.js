// controllers/productController.js
const Product = require('../models/productModel');

// Obter todos os produtos
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar produtos', error });
  }
};

// Criar um novo produto
exports.createProduct = async (req, res) => {
  try {
    const { nome, codigo, descricao, preco } = req.body;
    const product = await Product.create({ nome, codigo, descricao, preco });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar produto', error });
  }
};

// Atualizar um produto
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, codigo, descricao, preco } = req.body;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    await product.update({ nome, codigo, descricao, preco });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar produto', error });
  }
};

// Deletar um produto
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ message: 'Produto não encontrado' });
    }
    await product.destroy();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar produto', error });
  }
};
