import client from './../config.js';
// for counter and live chat
//create
export const addLiveChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("liveChat")
    const liveChatState = {
        counter : req.body.counter,
        liveChat: req.body.liveChat,
        messages : req.body.messages
    }
    let result = await myColl.insertOne(liveChatState);
    res.json({
      acknowledged: result.acknowledged,
      insertedId: result.insertedId
    });
    await client.close();
}

//read
export const getLiveChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("liveChat")
    let queryValue = req.query.name;
    let result = await myColl.findOne({name:queryValue});
    let searchResult = []
    console.log(result)
    res.json({
      "result":result
    });
    await client.close();
}

//read
export const getAllLiveChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("liveChat")
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
export const updateLiveChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("liveChat")
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
export const deleteLiveChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("liveChat")
    let filterQueryValue = req.body.filterQueryValue;
    let filterQueryKey = req.body.filterQueryKey;
    let result = await myColl.findOneAndDelete({[filterQueryKey]:filterQueryValue});
    res.json({
      "result":result
    });
    await client.close()
}