import { Link } from 'react-router-dom'
import goodJSON from '../../stub/goods.json'
import {StyledListLi , StyledMenuUl} from './style'
import {iGood , iGoods} from './types'
import {GoodItem} from '../good-item'


export function GoodList() : JSX.Element{
    return(
        <StyledMenuUl>
            {
                goodJSON.map( (good: iGood , index: number) => (
                        <StyledListLi key={good.TITLE + index}>
                            <Link to={`/goods/${good.ID}`}>
                            <GoodItem  data={good}/>
                            </Link>
                        </StyledListLi>
                )
              ) as any[]
            }
        </StyledMenuUl>
    )
}