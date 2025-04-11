
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Simply redirect to the landing page instead of creating a loop
  return <Navigate to="/" replace />;
};

export default Index;
