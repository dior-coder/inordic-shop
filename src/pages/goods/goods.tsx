import goodJSON from '../../stub/goods.json'
import {StyledListLi , StyledListUl} from '../../components/good-list/style'
import {iGood} from '../../components/good-list/types'


export function Goods(){
    return (
        <StyledListUl>
        {
            goodJSON.map( (good: iGood , index: number) => (
                    <StyledListLi key={good.TITLE + index}>
                        {good.TITLE}
                    </StyledListLi>
            ))
        }
    </StyledListUl>
    )
    }