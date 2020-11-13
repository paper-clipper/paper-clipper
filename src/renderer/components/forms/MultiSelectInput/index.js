import React, { useState, useRef, useEffect } from 'react'
import { useCombobox, useMultipleSelection } from 'downshift'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Field, Select } from '@paper/layout/forms'
import { Tag, Button } from '@paper/layout/elements'

export default ({
    name,
    placeholder,
    items = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neputun'],
    onChange = () => null,
}) => {

    const [inputValue, setInputValue] = useState('')
    const [widthValue, setWidthValue] = useState(0)
    const {
        getDropdownProps,
        addSelectedItem,
        selectedItems,
        getSelectedItemProps,
        removeSelectedItem,
    } = useMultipleSelection({ initialSelectedItems: [] })
    const ref = useRef(null)

    useEffect(() => {
        const width = ref.current.offsetWidth
        setWidthValue(width)
        onChange({ target: { name, value: selectedItems }})
    }, [selectedItems])

    const getFilteredItems = () =>
        items.filter(
            item =>
                selectedItems.indexOf(item) < 0 &&
                item.toLowerCase().startsWith(inputValue.toLowerCase())
        )

    const stateReducer = (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges
        switch (type) {
            case useCombobox.stateChangeTypes.InputKeyDownEnter:
            case useCombobox.stateChangeTypes.ItemClick:
                return {
                    ...changes,
                    isOpen: true, // keep the menu open after selection.
                }
        }
        return changes
    }

    const addItem = selectedItem => {
        if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
        }
    }

    const onStateChange = ({ inputValue, type, selectedItem }) => {
        switch (type) {
            case useCombobox.stateChangeTypes.InputChange:
                setInputValue(inputValue)
                break
            case useCombobox.stateChangeTypes.InputKeyDownEnter:
            case useCombobox.stateChangeTypes.ItemClick:
            case useCombobox.stateChangeTypes.InputBlur:
                addItem(selectedItem)
                break
            default:
                break
        }
    }

    const {
        isOpen,
        getToggleButtonProps,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        getItemProps,
        openMenu,
        closeMenu,
    } = useCombobox({
        inputValue,
        defaultHighlightedIndex: 0, // after selection, highlight the first item.
        selectedItem: null,
        items: getFilteredItems(),
        stateReducer,
        onStateChange,
    })

    const handleToggleButton = e => {
        e.preventDefault()
        if (!isOpen)
            return openMenu()
        return closeMenu()
    }

    return (
        <Field {...getComboboxProps()}>
            <Field.Inside ref={ref}>
                {selectedItems.map((selectedItem, index) => (
                    <Tag
                        key={`selected-item-${index}`}
                        {...getSelectedItemProps({ selectedItem, index })}
                    >
                        {selectedItem}
                        <FontAwesomeIcon
                            icon={faTimes}
                            fixedWidth
                            onClick={e => {
                                e.stopPropagation()
                                removeSelectedItem(selectedItem)
                            }}
                        />
                    </Tag>
                ))}
            </Field.Inside>
            <Field.Group modifiers="append">
                <Field.Input
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    style={{ paddingLeft: `${widthValue + 24}px` }}
                    {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
                    modifiers="append"
                />
                <Field.Group modifiers="beside">
                    <Button.Text
                        modifiers="icon"
                        aria-label={'toggle menu'}
                        {...getToggleButtonProps()}
                        onClick={handleToggleButton}
                    >
                        <FontAwesomeIcon
                            icon={!isOpen ? faChevronDown : faChevronUp}
                            fixedWidth
                        />
                    </Button.Text>
                </Field.Group>
            </Field.Group>
            <Select {...getMenuProps()}>
                {isOpen && (
                    <Select.List>
                        {getFilteredItems(items).map((item, index) => (
                            <Select.Item
                                key={`${item}${index}`}
                                {...getItemProps({ item, index })}
                            >
                                {item}
                            </Select.Item>
                        ))}
                        {inputValue && (
                            <Select.Item
                                onClick={() => addItem(inputValue)}
                            >
                                Create &quot;{inputValue}&quot;
                            </Select.Item>
                        )}
                    </Select.List>
                )}
            </Select>
        </Field>
    )
}
