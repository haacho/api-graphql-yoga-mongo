import Message from "../../models/message";

const Query = {
  ping() {
    return "pong!";
  },
  messages: async () => {
    return await Message.find();
  },
  getMessage: async (_, { _id }) => {
    return await Message.findById(_id);
  },
};

export default Query;
