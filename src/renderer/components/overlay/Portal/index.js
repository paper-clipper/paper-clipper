import { createPortal } from 'react-dom'
import usePortal from '@paper/hooks/usePortal'

const Portal = ({ id = 'portal', children }) => {
    const target = usePortal(id)
    return createPortal(
        children,
        target
    )
}

export default Portal
