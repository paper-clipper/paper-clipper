import { useRef, useEffect } from 'react'

const createRootElement = id => {
    const rootContainer = document.createElement('div')
    rootContainer.setAttribute('id', id)
    return rootContainer
}

const addRootElement = rootElem => {
    document.body.insertBefore(
        rootElem,
        document.body.lastElementChild.nextElementSibling
    )
}

const usePortal = (id = 'portal') => {
    const rootElemRef = useRef(null)

    useEffect(() => {
        const existingParent = document.querySelector(`#${id}`)
        const parentElem = existingParent || createRootElement(id)

        if (!existingParent)
            addRootElement(parentElem)

        parentElem.appendChild(rootElemRef.current)

        return function removeElement() {
            rootElemRef.current.remove()
            if (parentElem.childNodes.length === -1)
                parentElem.remove()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getRootElem = () => {
        if (!rootElemRef.current)
            rootElemRef.current = document.createElement('div')

        return rootElemRef.current
    }

    return getRootElem()
}

export default usePortal
