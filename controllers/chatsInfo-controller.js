import client from './../config.js';

//create
export const addChatInfo = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattingsInfo")
    const commState = {
        name : req.body.name,
        isEditing : req.body.isEditing,
        header: req.body.header
    }
    let result = await myColl.insertOne(commState);
    res.json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId
    });
    await client.close();
}

//read
export const getChatInfo = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl2 = myDB.collection("allChattingsInfo")
    let queryValue = req.body.queryValue;
    let queryKey = req.body.queryKey;
    let result = await myColl2.findOne({[queryKey]:queryValue});
    // let searchResult = []
    // for await (const doc of result) {
    //   searchResult.push(doc);
    // }
    console.log(result)
    res.json({
      "results":result
    });
    await client.close();
}

//read
export const getAllChatsInfo = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattingsInfo")
    let result = await myColl.find({});
    let searchResult = []
    for await (const doc of result) {
      searchResult.push(doc);
    }
    res.json({
      "result":searchResult
    });
    await client.close();
}

//update
export const updateChatInfo = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattingsInfo")
    let filterQueryValue = req.body.filterQueryValue;
    let filterQueryKey = req.body.filterQueryKey;
    let updateQueryValue = req.body.updateQueryValue;
    let updateQueryKey = req.body.updateQueryKey;
    const filter = { [filterQueryKey]: filterQueryValue };
    const update = { $set: { [updateQueryKey]: updateQueryValue } };
    let result = await myColl.updateOne(filter,update);
    res.json({
      "result":result
    });
    await client.close();
}

//delete
export const deleteChatInfo = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattingsInfo")
    let filterQueryValue = req.body.filterQueryValue;
    let filterQueryKey = req.body.filterQueryKey;
    let result = await myColl.findOneAndDelete({[filterQueryKey]:filterQueryValue});
    res.json({
      "result":result
    });
    await client.close();
}