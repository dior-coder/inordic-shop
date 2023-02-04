import { useAppDispatch } from '../../../../store'
import { createExtraActions } from '../../../../store/actions/goods'


import { iGood } from '../../../../components/good-list/types';
import { StyledItem, StyledCount, StyledButton } from './style'

export function Item(data: iGood): JSX.Element{
    // Импортируем определенный экшн
    const { delFromBasket, changeCountGoodInBasket } = createExtraActions()
    //Создаем объект диспечера
    const dispatch = useAppDispatch()
    console.log(data.COUNT_IN_BASKET)
    return <StyledItem>
        <img src={data.IMG} />
        <h2>{data.TITLE}</h2>
        <StyledCount>
        <StyledButton onClick={() => dispatch(changeCountGoodInBasket('+', data))}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png" alt="" />
        </StyledButton>  
        <span>{data.COUNT_IN_BASKET}</span>
        <StyledButton disabled={data.COUNT_IN_BASKET == 1 ? true : false} onClick={() => dispatch(changeCountGoodInBasket('-', data))}>    
            <img src="https://www.svgrepo.com/show/155829/minus.svg" alt="" />
        </StyledButton>
        </StyledCount>
        <StyledButton onClick={ () => dispatch(delFromBasket(data))} action='del'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Icons8_flat_delete_generic.svg" alt="удалить" />
        </StyledButton>
        {data.DISCR}
    </StyledItem>
}
