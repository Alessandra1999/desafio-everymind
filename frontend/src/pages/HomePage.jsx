import ProductList from '../components/ProductList';
import styled from 'styled-components';

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: #4c11d2;
`;

const HomePage = () => {
  return (
    <Container>
      <Title>Bem-vindo à Nunes Sports!</Title>
      <ProductList />
    </Container>
  );
};

export default HomePage;
