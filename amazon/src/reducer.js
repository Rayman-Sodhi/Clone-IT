export const initialState = {
    basket : [],
    user: null
};

//selector
export const getBasketTotal = (basket)=>
   basket?.reduce((amount,item) => item.price+amount,0)

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket,action.item],
            };
        
            case "EMPTY_BASKET":
                return {
                    ...state,
                    basket: []
                }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBucket = [...state.basket]
            if(index>=0){
               newBucket.splice(index,1)
            }else{
                console.warn(
                    `cant remove product id (id : ${action.id} as its not in backet)`
                )
            }

            return{
                ...state,
                basket: newBucket
            }

            case "SET_USER":
                return{
                    ...state,
                    user: action.user
                }
        default:
            return state;
    }
    };

export default reducer;
