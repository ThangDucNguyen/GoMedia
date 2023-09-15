import React, { Component } from "react";
import { Box, Flex } from "../../em-web-ui/components/base";
class Page401Container extends Component {
  render() {
    return (
      <Flex flexDirection="column" alignItems="stretch" width={"100%"}>
        <Flex flex={1} alignItems="center" flexDirection="column">
          <Flex
            flex={1}
            py={20}
            px={50}
            className="pagenotfound-content shadow"
            style={{ borderRadius: 5 }}
            backgroundColor="white"
            flexDirection="column"
            justifyContent="Center"
          >
            <Box
              as="text"
              pb={20}
              color="primary"
              fontSize="20px"
              fontWeight={700}
            >
              You don't have permission to see this lead. Please conntact to the admin.
            </Box>
            <Box
              as="text"
              style={{ textTransform: "uppercase" }}
              fontWeight={700}
              fontSize={{ xs: 13, md: 20 }}
              color="primary"
            >
              Vui long quay lai trang chu
            </Box>
          </Flex>
        </Flex>
      </Flex>
    );
  }
}

export default Page401Container;
