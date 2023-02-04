import { StyledSearchInput } from './style'

export function SearchInput() : JSX.Element {
    return (
        <StyledSearchInput>
            <input placeholder='Поиск' type='text' />
        </StyledSearchInput>
    )
}