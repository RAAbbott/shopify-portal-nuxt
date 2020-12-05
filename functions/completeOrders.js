
exports.handler = async (event, context) => {
    console.log(event, context);
    // const tag = 'EOM-READY';
    // const orders = req.body.orderIds;
    // let error = false;
    // const asyncForEach = async (array, callback) => {
    // for (let index = 0; index < array.length; index++) {
    //     await callback(array[index], index, array);
    // }
    // }
    // const updateTags = async () => {
    // await asyncForEach(orders, async (orderId) => {
    //     try {
    //     await shopify.order.update(orderId, {tags: 'EOM-READY'});
    //     console.log('success');
    //     } catch (error) {
    //     console.log(error);
    //     error = true;
    //     }
    // })
    // }

    // if (!shopify) {
    // shopify = new Shopify({
    //     shopName: process.env.SHOP_NAME,
    //     apiKey: process.env.API_KEY,
    //     password: process.env.PASSWORD
    // })
    // }

    // await updateTags();

    // if (error) {
    // res.status(500).send("Error When Updating Orders, Please Try Again");
    // } else {
    // res.status(200).send("All Orders Successfully Updated");
    // }
    
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    }
}


