import { Navigate } from "react-router";

// Al recibir solo una prop, puedo especificar directamente el tipo de esa prop en la destructuración de los parámetros
// Estou declarando que el componente ProtectedRoute recibe una prop llamada children de tipo React.ReactNode.

const ProtectedRoute = ({ children } : { children: React.ReactNode }) => {
    
    const user = false
  
    return user ? <>{children}</> : <Navigate to="/" />;
};

export default ProtectedRoute