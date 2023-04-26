import { Box, Container, Typography, Grid } from "@mui/material";
import styles from "../../styles/components/herosection.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function HeroSection() {
  return (
    <>
      <Box
        className={styles["herosection-bg"]}
        sx={{ paddingTop: { xs: "70px" }, paddingBottom: { xs: "100px" } }}
      >
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} lg={6}>
              <Box>
                <Typography variant="h1" className={styles["hero-heading"]}>
                  Advancing Digital Finance
                </Typography>
                <Typography className={styles["hero-para"]}>
                  The leading global members association advocating &
                  accelerating the adoption of best practices for digital
                  assets.
                </Typography>
                <Box sx={{ display: { md: "flex", gap: "20px" } }}>
                  <Box className={styles["hero-buttons"]}>
                    <Typography variant="span">
                      Contact our Head of Community
                    </Typography>
                  </Box>
                  <Box
                    className={styles["hero-buttons"]}
                    sx={{ paddingLeft: { lg: "10px" } }}
                  >
                    <Typography variant="span">
                      JOIN OUR MAILING LIST
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Box>
                      <img
                        src="https://res.cloudinary.com/dm9tstije/image/upload/v1682332889/gdfhome/GDF-Logo_o3h17m.png"
                        alt="gdf"
                        width="100px"
                      />
                      <Typography className={styles["content"]}>
                        <strong className={styles["hero-strong"]}>30+</strong>
                        Consultation Responses
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <img
                        src="https://res.cloudinary.com/dm9tstije/image/upload/v1682332889/gdfhome/GDF-Logo_o3h17m.png"
                        alt="gdf"
                        width="100px"
                      />
                      <Typography className={styles["content"]}>
                        <strong className={styles["hero-strong"]}>10</strong>
                        Codes of Conduct
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box>
                      <img
                        src="https://res.cloudinary.com/dm9tstije/image/upload/v1682332889/gdfhome/GDF-Logo_o3h17m.png"
                        alt="gdf"
                        width="100px"
                      />
                      <Typography className={styles["content"]}>
                        <strong className={styles["hero-strong"]}>100+</strong>{" "}
                        Events and Networking Opportunities
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    {" "}
                    <Box>
                      <img
                        src="https://res.cloudinary.com/dm9tstije/image/upload/v1682332889/gdfhome/GDF-Logo_o3h17m.png"
                        alt="gdf"
                        width="100px"
                      />
                      <Typography className={styles["content"]}>
                        <strong className={styles["hero-strong"]}>150+</strong>{" "}
                        Members in the Code Certification Programme
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{
          p: "10px",
          position: "relative",
          top: "-50px",
        }}
      >
        <Container sx={{ backgroundColor: "#2c9195", borderRadius: "10px" }}>
          <Box sx={{ p: { xs: "15px", md: "20px" } }}>
            <Typography
              variant="h4"
              sx={{
                textAlign: "center",
                color: "#fff",
                opacity: "0.8",
                fontSize: "20px",
              }}
            >
              OUR MISSION
            </Typography>
            <Typography sx={{ textAlign: "center", color: "#fff" }}>
              To promote and underpin the greater adoption of market standards
              for the use of crypto and digital assets,through the development
              of best practices and governance standards in a shared engagement
              forum with industry, policymakers and regulators
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{ backgroundColor: "#fff", padding: { lg: "30px" } }}
        className="main"
      >
        <Container>
          <Typography
            sx={{
              color: "#000",
              fontWeight: "bolder",
            }}
          >
            GDF Merges With GBBC
          </Typography>
          <Typography>
            {" "}
            Global Digital Finance and <a>Global Blockchain Business Council</a>
            have now merged, becoming the world’s largest industry association
            for the blockchain technology and digital assets ecosystem. The
            combined association now has nearly 500 institutional members and
            178 ambassadors, operating in 95 jurisdictions and across various
            disciplines. Global Digital Finance has been renamed GBBC Digital
            Finance.
          </Typography>
          <Box className={styles["visit-gbbc"]}>
            <a>
              <Typography variant="span">
                Visit the GBBC website here
              </Typography>
            </a>
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          backgroundColor: "#2c9498",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Container>
          <Box
            sx={{
              backgroundColor: "#fff",
              textAlign: "center",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Typography className={styles["activities"]}>ACTIVITIES</Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingTop: "30px" }}>
            <Grid item xs={12} md={4}>
              <Box className="card">
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <Typography
                    variant="h3"
                    className={styles["activity-heading1"]}
                  >
                    Upcoming Events
                  </Typography>
                  <ChevronRightIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className={styles["line1"]}></Box>
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682332928/gdfhome/DAW-C_2023-1_oe5w90.png"
                  alt="digitalassests"
                  className={styles["event-image"]}
                />{" "}
                <Typography
                  variant="h3"
                  className={styles["activity-heading2"]}
                >
                  Digital Assests Week California
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  FT Live:Crypto and Digital Assests Summit
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  London Blockchain Finance Summit
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Data and the Future of Financial Services Summit 2023
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="card">
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <Typography
                    variant="h3"
                    className={styles["activity-heading1"]}
                  >
                    Regulatory Engagement
                  </Typography>
                  <ChevronRightIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className={styles["line1"]}></Box>
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682422802/gdfhome/default_ayilh5.png"
                  alt="digitalassests"
                  className={styles["event-image"]}
                />{" "}
                <Typography
                  variant="h3"
                  className={styles["activity-heading2"]}
                >
                  Consultation on Proposed Regulatory Measures for Digital
                  Payment ...
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  FSB Consultation on International Regulation of Crypto-Assets
                  Act ...
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Response to the HM Treasury Consultation on managing the
                  failure ...
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Response to the White House OSTP on the Climate Implications
                  of D ...
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="card">
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  {" "}
                  <Typography
                    variant="h3"
                    className={styles["activity-heading1"]}
                  >
                    Digital Asset Report
                  </Typography>
                  <ChevronRightIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className={styles["line1"]}></Box>
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682422845/gdfhome/master-1_waya44.jpg"
                  alt="digitalassests"
                  className={styles["event-image"]}
                />{" "}
                <Typography
                  variant="h3"
                  className={styles["activity-heading2"]}
                >
                  Talking about MICA | Interview with Anastasia Kinsky
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Guy Melamed, CEO and Co-Founder of Exberry
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  OECD Global Blockchain Policy Forum 2022 | Interview with
                  Lawrenc ...
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Anastasia Kinsky, Head of Programmes and Content at GDF, and
                  Stev ...
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ padding: "20px" }}>
        <Container>
          <Typography
            variant="h2"
            sx={{ fontSize: "25px", textAlign: "center" }}
          >
            <Typography variant="span" className={styles["strong"]}>
              350+
            </Typography>
            GLOBAL MEMBERS & PARTNERS
          </Typography>
          <Box className={styles["green-line"]}></Box>
          <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682423561/gdfhome/Untitled-design-2021-07-09T100553.648-150x150_xte0oc.png"
                alt="logo"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682423560/gdfhome/R3_Logo-150x150_wepptq.png"
                alt="logo"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682423560/gdfhome/Huobi_Logo_People-150x150_evycj2.png"
                alt="logo"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682423560/gdfhome/HL_Logo-150x150_tz0edh.png"
                alt="logo"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682423560/gdfhome/EY_logo_New-150x150_iajmqp.png"
                alt="logo"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682423560/gdfhome/DLA_Piper_logo-150x150_t116op.png"
                alt="logo"
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682423560/gdfhome/Untitled-design-2021-07-01T154649.451-150x150_aicb1s.png"
                alt="logo"
              />
            </Grid>
          </Grid>
          <Box className={styles["view-all"]}>
            <Typography variant="span">VIEW ALL</Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
