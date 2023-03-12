import mongodb from "mongodb";

const getClient = () => {
  const uri =
    "mongodb+srv://usertest:1234@cluster0.b8ueg30.mongodb.net/?retryWrites=true&w=majority";
  return new mongodb.MongoClient(uri);
};

export { getClient };
