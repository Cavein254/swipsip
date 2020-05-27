
export const addProduct = (state, action) {
	switch(action.type) {
		case 'ADD_PRODUCT':
			return (
				[...products, { id, type, name, price, inCart }]
				)
	}
}