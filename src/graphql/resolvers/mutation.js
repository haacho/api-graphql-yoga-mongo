import Message from "../../models/message";

const Mutation = {
  createMessage: async (_, { message }) => {
    const newMessage = new Message(message);
    return await newMessage.save();
  },

  deleteMessage: async (_, { _id }) => {
    const deleteMessage = await Message.findByIdAndDelete(_id);
    return deleteMessage;
  },
  updateMessage: async (_, { _id, message }) => {
    const newMessage = await Message.findByIdAndUpdate(_id, message, {
      new: true,
    });
    return newMessage;
  },
};

export default Mutation;
