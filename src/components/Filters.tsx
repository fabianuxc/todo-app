import { FILTERS_BUTTONS, TODO_FILTERS } from "../consts"
import { type FilterValue } from "../types"

interface Props {
    onFilterChange: (filter: FilterValue) => void
    filterSelected: FilterValue
}

export const Filters: React.FC<Props> = ({filterSelected, onFilterChange}) => {
    const handleClick = (filter: FilterValue) => {

    }
    return (
        <ul className="filters">
            {
                Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) =>  {
                    const isSelected = key === filterSelected
                    const className = isSelected ? 'selected' : ''
                    return(
                    <li>
                        <a href={href} className={className}
                onClick={(event) => {
                    event.preventDefault()
                    onFilterChange(key as FilterValue)
                }}>
                    {literal}
                </a>
                    </li>)
                })
            }
            <li>
                <a className={`${filterSelected === TODO_FILTERS.ALL ? TODO_FILTERS.ACTIVE: ''}`}
                onClick={() => {
                    onFilterChange(TODO_FILTERS.ALL)
                }}>
                </a>
            </li>
        </ul>
    )
}