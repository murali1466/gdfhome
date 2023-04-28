import {
  AppBar,
  Box,
  Container,
  List,
  ListItem,
  Typography,
  Grid,
  TextField,
} from "@mui/material";
import styles from "../../styles/components/header.module.css";
import HeroSection from "../herosection";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";

export default function Header() {
  const [joindropDown, setjoindropDown] = useState(false);
  const [engagedropDown, setengagedropDown] = useState(false);
  const [reportsdropDown, setreportsdropDown] = useState(false);
  const [hambargerdropDown, sethambargerdropDown] = useState(false);
  const [searchdropDown, setsearchdropDown] = useState(false);
  function join() {
    setjoindropDown(!joindropDown);
  }
  function engage() {
    setengagedropDown(!engagedropDown);
  }
  function reports() {
    setreportsdropDown(!reportsdropDown);
  }
  function hambarger() {
    sethambargerdropDown(!hambargerdropDown);
    setjoindropDown(false);
    setengagedropDown(false);
    setreportsdropDown(false);
    setsearchdropDown(false);
  }
  function searchicon() {
    setsearchdropDown(!searchdropDown);
  }

  return (
    <>
      <AppBar position="relative" sx={{ display: "block", background: "#fff" }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <img
              src="https://res.cloudinary.com/dm9tstije/image/upload/v1682422802/gdfhome/default_ayilh5.png"
              alt="GDF"
              width="150px"
            />
          </Box>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Box>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682422802/gdfhome/default_ayilh5.png"
                alt="GDF"
                width="150px"
              />
            </Box>
            <Box sx={{ display: "inline-flex", gap: "25px" }}>
              <List>
                <ListItem
                  position="relative"
                  className={styles["listitem-parent"]}
                >
                  JOIN
                  <Box
                    sx={{
                      position: "absolute",
                      background: "red",
                      top: "55px",
                      width: "500px",
                      display: "flex",
                      backgroundColor: "#fff",
                      padding: "10px",
                    }}
                    className={styles["desktop-dropdown-item"]}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            MEMBERSHIP
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Benefits
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Directory
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Become a Member
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            About GDF
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              About
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Team
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            WORKING GROUPS
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Open
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Past
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            SELF-CERTIFY
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Self-Certify to the GDF Code
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </ListItem>
              </List>
              <List>
                <ListItem
                  position="relative"
                  className={styles["listitem-parent"]}
                >
                  ENGAGE
                  <Box
                    sx={{
                      position: "absolute",
                      background: "red",
                      top: "55px",
                      width: "500px",
                      display: "flex",
                      backgroundColor: "#fff",
                      padding: "10px",
                    }}
                    className={styles["desktop-dropdown-item"]}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            REGULATORY & POLICY ENGAGEMENT
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Regulators' Only Forum
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Consultation Responses
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Agency Roundtables
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            CODES, STANDARDS & NETWORKS
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              GDF Code of Conduct
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Standards
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Networks
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            EVENTS
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Upcoming Events
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Conferences
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Global Summits
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Webinars
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              GBBC Events
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Industry Roundtables
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            MEDIA
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Digital Asset Reports
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Blog
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </ListItem>
              </List>
              <List>
                <ListItem
                  position="relative"
                  className={styles["listitem-parent"]}
                >
                  REPORTS
                  <Box
                    sx={{
                      position: "absolute",
                      background: "red",
                      top: "55px",
                      width: "500px",
                      display: "flex",
                      backgroundColor: "#fff",
                      padding: "10px",
                    }}
                    className={styles["desktop-dropdown-item"]}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            REPORTS
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Reports
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Annual Reports
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Whitepapers
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Taxonomies
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            GDF HUBS
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              NFT Hub
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Sanctions Hub
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Box>
                          <Typography
                            className={styles["desktop-dropdown-heading"]}
                          >
                            NEWS
                          </Typography>
                          <List>
                            <ListItem className={styles["list-items"]}>
                              Newsletters
                            </ListItem>
                            <ListItem className={styles["list-items"]}>
                              Press
                            </ListItem>
                          </List>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              gap: "10px",
            }}
          >
            <MenuIcon className="appbar-mobile-icons" onClick={hambarger} />
            <SearchIcon className="appbar-mobile-icons" onClick={searchicon} />
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <form>
              <TextField id="search-input" label="Search" variant="outlined" />
            </form>
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: "5",
              top: "70px",
              backgroundColor: "#fff",
              width: "100%",
              left: "0px",
              padding: "10px",
              display: { xs: "block", md: "none" },
            }}
          >
            {hambargerdropDown ? (
              <Box sx={{}}>
                <List>
                  <ListItem
                    position="relative"
                    className={styles["listitem-parent"]}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      id="joinButton"
                      onClick={join}
                    >
                      <Typography>JOIN</Typography>
                      <KeyboardArrowDownIcon />
                    </Box>
                    {joindropDown ? (
                      <Box
                        sx={{
                          backgroundColor: "#fff",
                          padding: "10px",
                        }}
                        className={styles["mobile-dropdown-item"]}
                        id="joinClass"
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                MEMBERSHIP
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Benefits
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Directory
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Become a Member
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                About GDF
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  About
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Team
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                WORKING GROUPS
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Open
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Past
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                SELF-CERTIFY
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Self-Certify to the GDF Code
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    ) : (
                      ""
                    )}
                  </ListItem>
                </List>
                <List>
                  <ListItem
                    position="relative"
                    className={styles["listitem-parent"]}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      id="engageButton"
                      onClick={engage}
                    >
                      <Typography>ENGAGE</Typography>
                      <KeyboardArrowDownIcon />
                    </Box>
                    {engagedropDown ? (
                      <Box
                        sx={{
                          backgroundColor: "#fff",
                          padding: "10px",
                        }}
                        className={styles["mobile-dropdown-item"]}
                        id="engageClass"
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                REGULATORY & POLICY ENGAGEMENT
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Regulators' Only Forum
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Consultation Responses
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Agency Roundtables
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                CODES, STANDARDS & NETWORKS
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  GDF Code of Conduct
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Standards
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Networks
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                EVENTS
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Upcoming Events
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Conferences
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Global Summits
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Webinars
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  GBBC Events
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Industry Roundtables
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                MEDIA
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Digital Asset Reports
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Blog
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    ) : (
                      ""
                    )}
                  </ListItem>
                </List>
                <List>
                  <ListItem
                    position="relative"
                    className={styles["listitem-parent"]}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                      id="reportsButton"
                      onClick={reports}
                    >
                      <Typography>REPORTS</Typography>
                      <KeyboardArrowDownIcon />
                    </Box>
                    {reportsdropDown ? (
                      <Box
                        sx={{
                          backgroundColor: "#fff",
                          padding: "10px",
                        }}
                        className={styles["mobile-dropdown-item"]}
                        id="reportsClass"
                      >
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                REPORTS
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Reports
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Annual Reports
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Whitepapers
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Taxonomies
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                GDF HUBS
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  NFT Hub
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Sanctions Hub
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                          <Grid item xs={12}>
                            <Box>
                              <Typography
                                className={styles["desktop-dropdown-heading"]}
                              >
                                NEWS
                              </Typography>
                              <List>
                                <ListItem className={styles["list-items"]}>
                                  Newsletters
                                </ListItem>
                                <ListItem className={styles["list-items"]}>
                                  Press
                                </ListItem>
                              </List>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    ) : (
                      ""
                    )}
                  </ListItem>
                </List>
              </Box>
            ) : (
              ""
            )}
            {searchdropDown ? (
              <Box
                sx={{
                  position: "absolute",
                  zIndex: "5",
                  backgroundColor: "#fff",
                  width: "100%",
                  left: "0px",
                  padding: "10px",
                  textAlign: "center",
                  order: "2",
                }}
              >
                <form>
                  <TextField
                    id="search-input"
                    label="Search"
                    variant="outlined"
                  />
                </form>
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Container>
      </AppBar>
      <HeroSection />
    </>
  );
}
