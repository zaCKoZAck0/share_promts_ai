import { useState } from "react"

const TagsInput: React.FC = () => {
    const [suggestedTags, setSuggestedTags] = useState<string[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>("")

    const addTagToSelectedTags = (tag: string) => {
        setSelectedTags([...selectedTags, tag])
    }

    const removeTagFromSelectedTags = (index: number) => {
        setSelectedTags(selectedTags.filter((_, ind) => ind !== index))
    }

    const updateSuggestions = (value: string) => {
        setSuggestedTags([value])
    }

    const handleInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
        updateSuggestions(e.target.value)
    }

    const handleSuggestedTagClick = (value: string) => {
        addTagToSelectedTags(value)
        setInputValue("")
    }

    return (
        <div className="w-full">
            <ul className="selected_tags">
                {
                    selectedTags.map((tag, index) =>
                        <li key={index}>{tag} <button onClick={() => removeTagFromSelectedTags(index)}>X</button></li>)
                }
            </ul>
            <input type="text" value={inputValue} onChange={handleInputValueChange} className="tag_input" placeholder="web-development, idea, product..." />
            <ul className="suggested_tags">
                {
                    suggestedTags.map((tag, index) =>
                        <li key={index} onClick={() => handleSuggestedTagClick(tag)}>{tag}</li>)
                }
            </ul>
        </div>
    )
}

export default TagsInput;