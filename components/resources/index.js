import { Typography, Box, Container, Grid } from "@mui/material";
import styles from "../../styles/components/resource.module.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
export default function Resources() {
  return (
    <>
      <Box className="main">
        <Container>
          <Box className="bluebar">
            <Typography variant="span" className="bluebar-inside">
              Resources
            </Typography>
          </Box>
          <Grid container spacing={2} sx={{ paddingTop: "10px" }}>
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
                    GDF Code of Conduct
                  </Typography>
                  <ChevronRightIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className={styles["line1"]}></Box>
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682495993/gdfhome/GDF-Code-03_xefady.jpg"
                  alt="digitalassests"
                  className={styles["event-image"]}
                />{" "}
                <Typography
                  variant="h3"
                  className={styles["activity-heading2"]}
                >
                  Part I - Overarching Principles
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Part II - Principles for Token Sales
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Part III - Principles for Token Platforms
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Part IV – Principles for Funds and Fund Managers
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="card" sx={{ p: "5px" }}>
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
                    Latest from GDF
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
                  GBBC Digital Finance Response to FTX Bankruptcy
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  MiCA: Agreement made on Thursday following final trilogue
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  GDF’s Look at the Queen’s Speech
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  GDF in Q1: Roundup Letter
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="card" sx={{ p: "5px" }}>
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
                    Reports
                  </Typography>
                  <ChevronRightIcon sx={{ color: "#fff" }} />
                </Box>
                <Box className={styles["line1"]}></Box>
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682441552/gdfhome/reports-default-1_uxbqyz.svg"
                  alt="digitalassests"
                  className={styles["event-image"]}
                />{" "}
                <Typography
                  variant="h3"
                  className={styles["activity-heading2"]}
                >
                  The Bitcoin Love Index Overview
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Bitcoin Love Index
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  Guidance on Measurement, Allocation, and Target Setting
                  Related t ...
                </Typography>
                <Typography
                  variant="h3"
                  className={styles["activity-heading3"]}
                >
                  CFTC and Ooki DAO: Looking at the treatment of DAOs and DAO
                  parti ...
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
