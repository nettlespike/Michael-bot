module.exports = {
    name: "michael scott",
    description: "lets talk about hard things",
    execute(message) {
      if (
        message.content.toLowerCase().includes("hard")||
        message.content.toLowerCase().includes("ridgid")||
        message.content.toLowerCase().includes("big")||
        message.content.toLowerCase().includes("ahh")||
        message.content.toLowerCase().includes("came")||
        message.content.toLowerCase().includes("fit")||
        message.content.toLowerCase().includes("small")||
        message.content.toLowerCase().includes("on top")||
        message.content.toLowerCase().includes("blow")||
        message.content.toLowerCase().includes("tight")||
        message.content.toLowerCase().includes("stuck")||
        message.content.toLowerCase().includes("stepbro")
      ) {
        message.channel.send("thats what she said");
      }
    },
  };
  
  