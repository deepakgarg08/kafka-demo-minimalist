import KafkaConfig from "./config.js";


const sendMessageToKafka = async (req, res) => {
  try {
    const randomFloat = Math.random();
    console.log('✌️randomFloat --->', randomFloat);
    const { message } = req.body;
    console.log('✌️message controller--->', message);
    // create object from class KafkaConfig
    const kafkaConfig = new KafkaConfig();
    const messages = [{ key: "key1", value: message }];
    kafkaConfig.produce("my-topic", messages);

    const messages2 = [{ key: "key2", value: message + randomFloat }];
    kafkaConfig.produce("my-topic", messages2);

    res.status(200).json({
      status: "Ok!",
      message: "Message successfully send!",
    });
  } catch (error) {
    console.log("🚀 ~ file: controller.js:sendMessageToKafka ~ error:", error);
    console.log(error);
  }
};

const constrollers = { sendMessageToKafka };

export default constrollers;
