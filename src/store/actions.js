export default {
  addCart(context,payload){
    // let oldProduct =null
    // for(let item of state.cartList){
    //   if(item.iid===payload.iid){
    //     oldProduct =item
    //   }
    // }
    
    return new Promise((resolve,reject)=>{
      let oldProduct = context.state.cartList.find((item)=>{
        return item.iid === payload.iid
      })
        
      if(oldProduct){
        context.commit('addCounter',oldProduct)
        // oldProduct.count+=1
        resolve('当前商品数量+1')
      }else{
        payload.count=1
        context.commit('addToCart',payload)
        // state.cartList.push(payload)
        resolve('添加了新的商品')
      }
    })
    
    
  }
   
  }