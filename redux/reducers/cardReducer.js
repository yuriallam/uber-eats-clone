let defaultState = {
    selectedItems: {items: [], restaurantName: ''}
}

let cardReducer = (state  = defaultState, action) => {
    switch (action.type) {
        case 'MODIFY_CART': {
            let newState = {...state};
            if (action.payload.checkboxValue){
                newState.selectedItems = {
                    items: [ ...newState.selectedItems.items, action.payload ],
                    restaurantName: action.payload.restaurantName
                };
            }
            else{
                newState.selectedItems = {
                    ...newState.selectedItems,
                    items: [
                        ...newState.selectedItems.items.filter((item) => item.title !== action.payload.title )
                    ]
                } 
            }
            return newState;
        };
        case 'EMPTY_CART' :{
       return {};
        }
        default: 
            return state;
    }
}

export default cardReducer;