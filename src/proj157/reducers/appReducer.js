import { ADD, EDIT, DELETE} from '../appActions/appActions';


const appReducer = (state = [], action) => {
    switch(action.type)
    {
        case ADD:
            return [...state, action.payload];
        case EDIT:
            return state.map(currentElement=> {
                if(currentElement.id !== action.payload.id){
                    return currentElement;
                }

                const { author, comment, rate } = action.payload;

                return({
                    author,
                    comment,
                    id: currentElement.id,
                    rate,
                });
            });
        case DELETE:
            return state.filter(currentStateElement => currentStateElement.id !== action.payload.id );

        default:
            console.warn(`lack of action ${action.type}`);
            return state;
    }
}