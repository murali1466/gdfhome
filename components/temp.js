<Box sx={{ display: "inline-flex", gap: "25px" }}>
  <List>
    <ListItem position="relative" className={styles["listitem-parent"]}>
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
              <Typography className={styles["desktop-dropdown-heading"]}>
                MEMBERSHIP
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>Benefits</ListItem>
                <ListItem className={styles["list-items"]}>Directory</ListItem>
                <ListItem className={styles["list-items"]}>
                  Become a Member
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={styles["desktop-dropdown-heading"]}>
                About GDF
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>About</ListItem>
                <ListItem className={styles["list-items"]}>Team</ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={styles["desktop-dropdown-heading"]}>
                WORKING GROUPS
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>Open</ListItem>
                <ListItem className={styles["list-items"]}>Past</ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={styles["desktop-dropdown-heading"]}>
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
    <ListItem position="relative" className={styles["listitem-parent"]}>
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
              <Typography className={styles["desktop-dropdown-heading"]}>
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
              <Typography className={styles["desktop-dropdown-heading"]}>
                CODES, STANDARDS & NETWORKS
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>
                  GDF Code of Conduct
                </ListItem>
                <ListItem className={styles["list-items"]}>Standards</ListItem>
                <ListItem className={styles["list-items"]}>Networks</ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={styles["desktop-dropdown-heading"]}>
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
                <ListItem className={styles["list-items"]}>Webinars</ListItem>
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
              <Typography className={styles["desktop-dropdown-heading"]}>
                MEDIA
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>
                  Digital Asset Reports
                </ListItem>
                <ListItem className={styles["list-items"]}>Blog</ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ListItem>
  </List>
  <List>
    <ListItem position="relative" className={styles["listitem-parent"]}>
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
              <Typography className={styles["desktop-dropdown-heading"]}>
                REPORTS
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>Reports</ListItem>
                <ListItem className={styles["list-items"]}>
                  Annual Reports
                </ListItem>
                <ListItem className={styles["list-items"]}>
                  Whitepapers
                </ListItem>
                <ListItem className={styles["list-items"]}>Taxonomies</ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={styles["desktop-dropdown-heading"]}>
                GDF HUBS
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>NFT Hub</ListItem>
                <ListItem className={styles["list-items"]}>
                  Sanctions Hub
                </ListItem>
              </List>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box>
              <Typography className={styles["desktop-dropdown-heading"]}>
                NEWS
              </Typography>
              <List>
                <ListItem className={styles["list-items"]}>
                  Newsletters
                </ListItem>
                <ListItem className={styles["list-items"]}>Press</ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </ListItem>
  </List>
</Box>;
// const joinButtonEle = document.getElementById("joinButton");
// const engageButtonEle = document.getElementById("engageButton");
// const reportsButtonEle = document.getElementById("reportsButton");
// const joinClassEle = document.getElementById("joinClass");
// const engageClassEle = document.getElementById("engageClass");
// const reportsClassEle = document.getElementById("reportsClass");

// function fun1() {
//   joinClassEle.classList.toggle("mobile-dropdown-item");
// }
// joinButtonEle.addEventListener("click", fun1);
// function fun2() {
//   engageClassEle.classList.toggle("mobile-dropdown-item");
// }
// engageButtonEle.addEventListener("click", fun2);
// function fun3() {
//   reportsClassEle.classList.toggle("mobile-dropdown-item");
// }
// reportsButtonEle.addEventListener("click", fun3);
