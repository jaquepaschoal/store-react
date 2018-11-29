export const Types = {
  ADD_PRODUCT: "cart/ADD_PRODUCT",
  ADD_QUANTITY: "cart/ADD_QUANTITY",
  DELETE_PRODUCT: "cart/DELETE_PRODUCT"
};

const INITIAL_STATE = {
  data: "",
  loading: false
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      return { ...state, data: [...state.data, action.payload.product] };
    case Types.ADD_QUANTITY:
      let products = state.data.map(element => {
        if (element.id === action.payload.id) {
          return {
            ...element,
            subtotal: element.price * action.payload.qnt,
            qnt: action.payload.qnt
          };
        }
        return element;
      });
      return { ...state, data: products };
    case Types.DELETE_PRODUCT:
      let stayProducts = state.data.filter(element => {
        return element.id !== action.payload.id;
      });
      return { ...state, data: stayProducts };
    default:
      return state;
  }
}

export const Creators = {
  addProduct: product => ({
    type: Types.ADD_PRODUCT,
    payload: { product }
  }),

  addQuantity: (id, qnt) => ({
    type: Types.ADD_QUANTITY,
    payload: { id, qnt }
  }),

  deleteProduct: id => ({
    type: Types.DELETE_PRODUCT,
    payload: { id }
  })
};
