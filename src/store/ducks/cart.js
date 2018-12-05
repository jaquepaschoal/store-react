export const Types = {
  ADD_PRODUCT: "cart/ADD_PRODUCT",
  ADD_QUANTITY: "cart/ADD_QUANTITY",
  DELETE_PRODUCT: "cart/DELETE_PRODUCT"
};

const INITIAL_STATE = {
  data: [],
  loading: false
};

export default function categories(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_PRODUCT:
      if (state.data.length > 0) {
        let isInCart = state.data.some(element => {
          return element.id === action.payload.product.id;
        });

        if (isInCart) {
          let quantity = 0;
          let repeatedProduct = state.data.map(element => {
            if (element.id === action.payload.product.id) {
              quantity = element.qnt + 1;
              return {
                ...element,
                qnt: element.qnt + 1,
                subtotal: element.subtotal * quantity
              };
            }
            return element;
          });
          return { ...state, data: repeatedProduct };
        } else {
          return {
            ...state,
            data: [
              ...state.data,
              {
                ...action.payload.product,
                qnt: 1,
                subtotal: action.payload.product.price
              }
            ]
          };
        }
      } else {
        return {
          ...state,
          data: [
            ...state.data,
            {
              ...action.payload.product,
              qnt: 1,
              subtotal: action.payload.product.price
            }
          ]
        };
      }
    case Types.ADD_QUANTITY:
      let products = state.data.map(element => {
        if (element.id === action.payload.id) {
          return {
            ...element,
            subtotal: element.price * parseInt(action.payload.qnt),
            qnt: parseInt(action.payload.qnt)
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
