import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Grid,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import styles from "../../styles/components/footer.module.css";
export default function Footer() {
  return (
    <>
      <Box sx={{ backgroundColor: "#030122", p: "20px" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              {" "}
              <Box className="wow fadeInUp " data-wow-delay="10s">
                <Typography variant="h5" className={styles["footer-heading"]}>
                  CONTACT
                </Typography>
                <Typography sx={{ color: "#fff", textAlign: "center" }}>
                  Email:
                  <Typography
                    variant="span"
                    sx={{ textDecoration: "underline", mt: "8px" }}
                  >
                    hello@gdf.io
                  </Typography>
                </Typography>
                <Box sx={{ textAlign: "center", mt: "8px" }}>
                  <LinkedInIcon className={styles["linkedin-icon"]} />
                  <TwitterIcon className={styles["twitter-icon"]} />
                </Box>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Box
                    sx={{
                      padding: "3px",
                      backgroundColor: "#197b8c",
                      borderRadius: "10px",
                      display: "inline-block",
                    }}
                  >
                    {" "}
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        padding: "3px",
                      }}
                    >
                      <EmailIcon sx={{ color: "#fff" }} />
                      <Typography
                        variant="span"
                        sx={{ color: "#fff", paddingLeft: "10px" }}
                      >
                        JOIN OUR MAILING LIST
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <Typography variant="h5" className={styles["footer-heading"]}>
                  EXPLORE
                </Typography>
                <List>
                  <ListItem className={styles["footer-listitems"]}>
                    MEMBER BENEFITS
                  </ListItem>
                  <ListItem className={styles["footer-listitems"]}>
                    MEMBER DIRECTORY
                  </ListItem>
                  <ListItem className={styles["footer-listitems"]}>
                    CODES
                  </ListItem>
                  <ListItem className={styles["footer-listitems"]}>
                    EVENTS
                  </ListItem>
                  <ListItem className={styles["footer-listitems"]}>
                    WORKING GROUPS
                  </ListItem>
                  <ListItem className={styles["footer-listitems"]}>
                    RESOURCES
                  </ListItem>
                  <ListItem className={styles["footer-listitems"]}>
                    ABOUT
                  </ListItem>
                </List>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              {" "}
              <Box>
                <Typography variant="h5" className={styles["footer-heading"]}>
                  INFORMATION
                </Typography>
                <List>
                  <ListItem className={styles["footer-listitems"]}>
                    PRIVACY POLICY
                  </ListItem>
                  <ListItem className={styles["footer-listitems"]}>
                    COOKIES
                  </ListItem>
                </List>
              </Box>
            </Grid>
          </Grid>

          <hr />
          <Grid container spacing={2} sx={{ p: "20px" }}>
            <Grid item xs={12} sm={12} md={4}>
              {" "}
              <Box sx={{ textAlign: "center" }}>
                <img
                  src="https://res.cloudinary.com/dm9tstije/image/upload/v1682332889/gdfhome/GDF-Logo_o3h17m.png"
                  alt="logo"
                  width="65px"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box>
                <Typography className={styles["copy-right"]}>
                  COPY RIGHT
                  <Typography variant="span">© GBBC DIGITAL FINANCE</Typography>
                  <br /> REGISTERED NUMBER: 11246402
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography className={styles["website-build"]}>
                  Website Build by
                </Typography>
                <a target="_blank" href="https://www.scube.co/">
                  <img
                    src="https://res.cloudinary.com/dm9tstije/image/upload/v1682332893/gdfhome/scube-2020-logo_logo-white-e1612207229499_tliprn.png"
                    alt="scube"
                    width="100px"
                  />
                </a>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
