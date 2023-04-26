import { Typography, Box, Container } from "@mui/material";
export default function RegisterNow() {
  return (
    <>
      <Box className="main" sx={{ backgroundColor: "#030122" }}>
        <Container
          sx={{ display: { sm: "flex", gap: "20px", alignItems: "center" } }}
        >
          <Box>
            <Typography sx={{ color: "#fff" }}>
              Register now for GBBC Digital Finance's upcoming events
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#4cbebb",
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: "10px",
              fontSize: "13px",
              marginTop: { xs: "20px", sm: "0px" },
            }}
          >
            <Typography variant="span" sx={{ color: "#fff" }}>
              REGISTER NOW
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
