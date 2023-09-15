import { Breadcrumb, Layout, Tabs, Steps, Image, Button } from "antd";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { createStructuredSelector } from "reselect";
import { PATHS, SERVICE_API } from "../../appConstants";
import { Flex, Box, PageHeader } from "../../em-web-ui/components/base/index";
import { userActions, userSelectors } from "../../reduxResources/user";
import LeadDetailForm from "./component/LeadDetailForm";
import { AppstoreOutlined } from "@ant-design/icons";
import mainLogo from "../../em-web-ui/components/image/Schedule.png";
import TextArea from "antd/es/input/TextArea";
const { Content, Footer, Sider } = Layout;
const { TabPane } = Tabs;
class LeadDetailContainer extends Component {
  static proTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  state = { userInfo: {} };

  componentDidMount() {
    const leadId = this.props.match.params.id || "";
    this.props.getLead(leadId);
    this.state.userInfo = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
  }
  render() {
    const { user: rawUser } = this.props;
    const { userInfo } = this.state;
    const user = rawUser ? rawUser.toJS() : {};
    const { id } = userInfo || {};
    const isAuthor = user.created_by == id;

    return (
      <Layout>
        <PageHeader></PageHeader>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            background: "white",
            padding: "0 50px",
          }}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Detail</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {isAuthor ? (
          <Content style={{ height: "100vh" }}>
            <Flex flexDirection={"row"}>
              <LeadDetailForm item={user} />
              <Tabs style={{ marginLeft: "100px" }} defaultActiveKey="activity">
                <TabPane tab="Activity" key="activity">
                  <Flex flexDirection={"row"} justifyContent={"space-between"}>
                    <Box style={{ fontWeight: 800 }}>
                      <AppstoreOutlined />
                      Page View
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        textAlign: "end",
                      }}
                    >
                      <small class="private-microcopy is--text--help">
                        <span>
                          <span>Sep 8, 2023 </span>
                          at
                          <span> 9:57 PM GMT+7</span>
                        </span>
                      </small>
                    </Box>
                  </Flex>
                  <Box p={2}>{user.first_name} viewed LandMark 81 detail</Box>
                  <Box px={4} py={2}>
                    <Steps
                      progressDot
                      current={0}
                      direction="vertical"
                      items={[
                        {
                          title: "viewed LandMark 81 detai",
                          description: "Sep 8, 2023 9:57 PM GMT+7",
                        },
                        {
                          title: "viewed Bitexco",
                          description: "Aug 1, 2023 11:57 PM GMT+7",
                        },
                      ]}
                    />
                  </Box>
                  <Flex flexDirection={"row"} justifyContent={"space-between"}>
                    <Box style={{ fontWeight: 500 }}>
                      <AppstoreOutlined />
                      Marketing email sent to Alex Mervis
                      <span class="child tm">
                        {"<amervis@admiral-blue.com>"}
                      </span>
                    </Box>
                    <Box
                      pt={3}
                      style={{
                        display: "flex",
                        textAlign: "end",
                      }}
                    >
                      <small class="private-microcopy is--text--help">
                        <span>
                          <span>Sep 8, 2023 </span>
                          at
                          <span> 9:57 PM GMT+7</span>
                        </span>
                      </small>
                    </Box>
                  </Flex>
                  <Box p={2}>{user.first_name} viewed LandMark 81 detail</Box>
                  <Box px={4} py={2}>
                    <Steps
                      progressDot
                      current={0}
                      direction="vertical"
                      items={[
                        {
                          title: "Open",
                          description: "Sep 11, 2023 9:57 PM GMT+7",
                        },
                        {
                          title: "Delivered",
                          description: "Oct 1, 2023 11:57 PM GMT+7",
                        },
                        {
                          title: "Sent",
                          description: "Oct 8, 2023 9:57 PM GMT+7",
                        },
                      ]}
                    />
                  </Box>
                </TabPane>

                <TabPane tab="Emails" key="emails">
                  <Flex flexDirection={"row"} justifyContent={"space-between"}>
                    <Box style={{ fontWeight: 800 }}>
                      <AppstoreOutlined />
                      Temple Email
                    </Box>
                    <Box
                      style={{
                        display: "flex",
                        textAlign: "end",
                      }}
                    >
                      <small class="private-microcopy is--text--help">
                        <span>
                          <span>Sep 8, 2023 </span>
                          at
                          <span> 9:57 PM GMT+7</span>
                        </span>
                      </small>
                    </Box>
                  </Flex>
                  <Box p={2}>To Brian with temple</Box>
                  <TextArea style={{height: 400, width: 600}} value={"Hey Brian, I heard your company is in the market for a tasty cupcake supplier. We're the number one cupcake supplier in the world. If you're interested in talking about our pricing, let me know. Yours, Brian Cupcakes not to your taste? We also sell the best muffins and donuts."}>
                  </TextArea>
                </TabPane>
                <TabPane tab="Notes" key="notes">
                  <Button> Create your Note </Button>
                </TabPane>
                <TabPane tab="Calls" key="calls">
                  {/* Content for the "Calls" tab */}
                </TabPane>
                <TabPane tab="Schedule" key="schdule">
                  <img
                    src={mainLogo}
                    style={{ width: "600px" }}
                    alt="fireSpot"
                  />
                </TabPane>
              </Tabs>
            </Flex>
          </Content>
        ) : (
          <>
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
                You don't have permission to see this lead. Please conntact to
                the admin.
              </Box>
              <Box
                as="text"
                style={{ textTransform: "uppercase" }}
                fontWeight={700}
                fontSize={{ xs: 13, md: 20 }}
                color="primary"
              >
                Come back to Home page.
              </Box>
            </Flex>
          </>
        )}
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: userSelectors.item,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLead: (id) => {
      dispatch(
        userActions.userGetAjax({
          url: `${SERVICE_API}/${id}`,
        })
      );
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(LeadDetailContainer));
