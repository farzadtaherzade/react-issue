import styled from 'styled-components';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f2f5;
  text-align: center;
`;

const NotFoundBox = styled.div`
  background-color: #fff;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  font-size: 1.25rem;
  color: #666;
  margin-bottom: 2rem;
`;

const PageNotFound = () => {
  const navigate = useNavigate()
  return (
    <NotFoundContainer>
      <NotFoundBox>
        <Title>404</Title>
        <Message>Sorry, the page you are looking for does not exist.</Message>
        <Button onClick={() => navigate('/dashboard')} variant='primary' size='lg'>Go Home</Button>
      </NotFoundBox>
    </NotFoundContainer>
  );
};

export default PageNotFound;
