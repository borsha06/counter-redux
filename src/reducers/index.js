const initialState ={
    count: 0
}
const INCREMENT ='INCREMENT'
const DECREMENT = 'DECREMENT'
const REFRESH ='REFRESH'
export function reducer(state=initialState,action){
    switch(action.type){
        case INCREMENT:
            return{

            count: state.count+1

            }
        case DECREMENT:
            if(state.count >0){
                return{
                    count: state.count-1
                }
            }
            else
            return state;
        case REFRESH:
            return{
                count: 0
            }
           
            
        default:
            return state
    }
    
}