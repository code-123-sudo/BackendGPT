import client from './../config.js';

//create
export const addChat = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
    let result = await myColl.insertOne(req.body);
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
export const getAllChats = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")
    let result = await myColl.find({}).sort({updatedAt:-1}) ;
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

    let filterQueryValue = req.body.filterQueryValue;
    let filterQueryKey = req.body.filterQueryKey;

    let updateQueryValue1 = req.body.updateQueryValue1;
    let updateQueryKey1 = req.body.updateQueryKey1;

    let updateQueryValue2 = req.body.updateQueryValue2;
    let updateQueryKey2 = req.body.updateQueryKey2;

    let updateQuery = {
        [updateQueryKey1]:updateQueryValue1
    }

    if ( req.body.updateQueryValue2 ){
        updateQuery[updateQueryKey1] = updateQueryValue1;
        updateQuery[updateQueryKey2] = updateQueryValue2
    }

    const filter = { [filterQueryKey]: filterQueryValue };
    const update = { $set: updateQuery };
    let result = await myColl.updateOne(filter,update);
    res.json({
      "result":result
    });
    await client.close();
}

//update many
export const updateManyChats = async (req,res) => {
    await client.connect();
    await client.db("chatGPT").command({ ping: 1 });
    let myDB = client.db("chatGPT");
    let myColl = myDB.collection("allChattings")

    let filterQueryValue = req.body.filterQueryValue;
    let filterQueryKey = req.body.filterQueryKey;

    let updateQueryValue1 = req.body.updateQueryValue1;
    let updateQueryKey1 = req.body.updateQueryKey1;

    let updateQuery = {
        [updateQueryKey1]:updateQueryValue1
    }

    const filter = { [filterQueryKey]: filterQueryValue };
    const update = { $set: updateQuery };
    let result = await myColl.updateMany({},update);
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
    let result = await myColl.findOneAndDelete({name:req.query.name});
    res.json({
      "result":result
    });
    await client.close()
}