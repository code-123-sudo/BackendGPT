import client from './../config.js';

//create
export const addChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
    const commState = {
        name : req.body.name,
        messages : req.body.messages
    }
    let result = await myColl.insertOne(commState);
    res.json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId
    });
    await client.close();
}

//read
export const getChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
    let result = await myColl.find({name:req.query.name});
    let searchResult = []
    for await (const doc of result) {
      searchResult.push(doc);
    }
    res.json({
      "result":searchResult
    });
    await client.close();
}

//read
export const getAllChats = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
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
export const updateChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
    const filter = { name: req.query.name };
    const update = { $set: { messages: req.body.messages } };
    let result = await myColl.updateOne(filter,update);
    res.json({
      "result":result
    });
    await client.close();
}

//delete
export const deleteChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
    let result = await myColl.findOneAndDelete({"name": req.query.name});
    res.json({
      "result":result
    });
    await client.close();
}