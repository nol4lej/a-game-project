import { ReactNode, FC } from "react"
import PrincipalNav from "../components/PrincipalNavbar/PrincipalNav"

// Se utiliza para definir un tipo de objeto en TS.
// En este caso, estoy definiendo una interfaz llamada LayoutProps

interface LayoutProps {
    children: ReactNode // children será un ReactNode
}

// FC es una abreviatura de 'FunctionComponent', que es una interfaz genérica proporcionada por React.
// Describe un componente funcional que acepta las propiedades especificadas en LayoutProps.

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <PrincipalNav />
            {children}
        </div>
    )
}

export default Layout