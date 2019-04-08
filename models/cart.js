// code by auchenberg
module.exports = function Cart(cart) {
    this.items = cart.items || {};
    this.totalItems = cart.totalItems || 0;
    this.totalPrice = cart.totalPrice || 0;

    this.add = function(item, id) {
        var cartItem = this.items[id];
        if (!cartItem) {
            cartItem = this.items[id] = {item: item, quantity: 0, price: 0};
        }
        cartItem.quantity++;
        cartItem.price = cartItem.item.price * cartItem.quantity;
        this.totalItems++;
        this.totalPrice += cartItem.item.price;
    };

    this.remove = function(id) {
        this.totalItems -= this.items[id].quantity;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    
    this.getItems = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
};








// code by youtube video academind

// module.exports = function Cart(oldCart){
//     this.items = oldCart.items || {};
//     this.totalQty = oldCart.totalQty || 0;
//     this.totalPrice = oldCart.totalPrice || 0;
    
//     this.add = function(item, id){
//         var storedItem = this.items[id];
//         if(!storedItem){
//             storedItem = this.items[id] = {item: item, qty :0,  price: 0};
//         }
//         storedItem.qty++;
//         storedItem.price = storedItem.item.price = storedItem.qty;
//         this.totalQty++;
//         this.totalPrice += storedItem.item.price;
//     };
//     this.reduceByOne = function(id){
//         this.items[id].qty--;
//         this.items[id].price -= this.items[id].item.price;
//         this.totalQty--;
//         this.totalPrice -= this.items[id].item.price;
//     };
//     this.generateArray = function(){
//         var arr = [];
//         for(var id in this.items){
//             arr.push(this.items[id]);
            
//         }
//     }
// }