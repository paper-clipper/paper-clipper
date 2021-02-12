import React, { useState, useRef, useEffect } from 'react'
import { useCombobox, useMultipleSelection } from 'downshift'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'

import { Field, Select } from '@paper-ui/forms'
import { Tag } from '@paper-ui/misc'
import { Icon } from '@paper-ui/typography'
import { Button } from '@paper-ui/button'

export default ({
    name,
    placeholder,
    value = [],
    error,
    helperText,
    onChange = () => null,
    onBlur = () => null,
    filterItems = () => null,
    getFilteredItems = () => null,
}) => {

    const [inputValue, setInputValue] = useState('')
    const [widthValue, setWidthValue] = useState(0)
    const {
        getDropdownProps,
        addSelectedItem,
        selectedItems,
        getSelectedItemProps,
        removeSelectedItem,
    } = useMultipleSelection({ initialSelectedItems: value })
    const inputRef = useRef(null)

    useEffect(() => {
        filterItems(inputValue, selectedItems)
    }, [])

    useEffect(() => {
        const width = inputRef.current.offsetWidth
        setWidthValue(width)
        onChange({ target: { name, value: selectedItems }})
    }, [ selectedItems, inputRef.current ])

    useEffect(() => {
        filterItems(inputValue, selectedItems)
    }, [inputValue])

    const stateReducer = (state, actionAndChanges) => {
        const { changes, type } = actionAndChanges
        switch (type) {
            case useCombobox.stateChangeTypes.InputKeyDownEnter:
            case useCombobox.stateChangeTypes.ItemClick:
                return {
                    ...changes,
                    isOpen: false, // keep the menu open after selection.
                }
        }
        return changes
    }

    const addItem = selectedItem => {
        if (selectedItem) {
            setInputValue('')
            addSelectedItem(selectedItem)
            closeMenu()
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
        items: getFilteredItems(selectedItems),
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
            <Field.Inside ref={inputRef}>
                {selectedItems.map((selectedItem, index) => (
                    <Tag
                        key={`selected-item-${index}`}
                        {...getSelectedItemProps({ selectedItem, index })}
                    >
                        {selectedItem}
                        <Icon
                            as={FontAwesomeIcon}
                            modifiers={[ 'action', 'xs' ]}
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
            <Field.Group modifiers={['append', error && 'error' ]}>
                <Field.Input
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    style={{ paddingLeft: `${widthValue + 24}px` }}
                    modifiers="append"
                    onBlur={onBlur}
                    {...getInputProps(getDropdownProps({ preventKeyAction: isOpen }))}
                />
                <Field.Group modifiers="beside">
                    {getFilteredItems(selectedItems).length > 0 && (
                        <Button.Icon
                            modifiers={[ 'neutral' ]}
                            aria-label={'toggle menu'}
                            {...getToggleButtonProps()}
                            onClick={handleToggleButton}
                        >
                        <Icon
                            as={FontAwesomeIcon}
                            icon={!isOpen ? faChevronDown : faChevronUp}
                            fixedWidth
                        />
                        </Button.Icon>
                    )}
                </Field.Group>
            </Field.Group>
            {(error || helperText) && (
                <Field.Message modifiers={[ error && 'error' ]}>
                    {error || helperText}
                </Field.Message>
            )}
            <Select {...getMenuProps()}>
                {(isOpen || inputValue) && (
                    <Select.List>
                        {getFilteredItems(selectedItems).map((item, index) => (
                            <Select.Item
                                key={`${item}${index}`}
                                {...getItemProps({ item, index })}
                            >
                                {item}
                            </Select.Item>
                        ))}
                        {(getFilteredItems(selectedItems).length === 0 && inputValue) && (
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
