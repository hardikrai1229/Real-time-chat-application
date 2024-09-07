import { ChatState } from "../Context/chatProvider";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import { Flex } from "@chakra-ui/react";
import MyChats from "../components/MyChats";
import Chatbox from "../components/Chatbox";
import { useState } from "react";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex
        w="100%"
        h="calc(100vh - 60px)"
        p={3}
        justifyContent="space-between"
        overflow="hidden"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
    </div>
  );
};

export default Chatpage;
