import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Container, Typography, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export default function WorkingGroups() {
  var settings = {
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Box className="main">
        <Container
          sx={{
            padding: "10px",
          }}
        >
          <Box className="bluebar" sx={{ marginBottom: "20px" }}>
            <Typography variant="span" className="bluebar-inside">
              Working Groups
            </Typography>
          </Box>
          <Slider
            {...settings}
            sx={{
              ".slick-slider .slick-prev::before": {
                content: <ArrowBackIosIcon />,
                background: "red",
              },
            }}
          >
            <Box sx={{ padding: "10px" }} className="wgcard">
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682441552/gdfhome/reports-default-1_uxbqyz.svg"
                alt="workinggroup"
                width="352"
                height="162"
              />
              <Typography
                variant="h3"
                sx={{ fontSize: "20px", color: "#000", marginTop: "10px" }}
              >
                MiCA Working Group
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#2C9498",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography variant="span">View more</Typography>
                <ChevronRightIcon />
              </Box>
            </Box>
            <Box sx={{ padding: "10px" }} className="wgcard">
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682441552/gdfhome/reports-default-1_uxbqyz.svg"
                alt="workinggroup"
                width="352"
                height="162"
              />
              <Typography
                variant="h3"
                sx={{ fontSize: "20px", color: "#000", marginTop: "10px" }}
              >
                Global Financial Institutions for Cryptoassets (GFIC)
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#2C9498",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography variant="span">View more</Typography>
                <ChevronRightIcon />
              </Box>
            </Box>
            <Box sx={{ padding: "10px" }} className="wgcard">
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682441552/gdfhome/reports-default-1_uxbqyz.svg"
                alt="workinggroup"
                width="352"
                height="162"
              />
              <Typography
                variant="h3"
                sx={{ fontSize: "20px", color: "#000", marginTop: "10px" }}
              >
                Sanctions
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#2C9498",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography variant="span">View more</Typography>
                <ChevronRightIcon />
              </Box>
            </Box>
            <Box sx={{ padding: "10px" }} className="wgcard">
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682441552/gdfhome/reports-default-1_uxbqyz.svg"
                alt="workinggroup"
                width="352"
                height="162"
              />
              <Typography
                variant="h3"
                sx={{ fontSize: "20px", color: "#000", marginTop: "10px" }}
              >
                ESG
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#2C9498",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography variant="span">View more</Typography>
                <ChevronRightIcon />
              </Box>
            </Box>
            <Box sx={{ padding: "10px" }} className="wgcard">
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682441552/gdfhome/reports-default-1_uxbqyz.svg"
                alt="workinggroup"
                width="352"
                height="162"
              />
              <Typography
                variant="h3"
                sx={{ fontSize: "20px", color: "#000", marginTop: "10px" }}
              >
                LATAM Working Group
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#2C9498",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography variant="span">View more</Typography>
                <ChevronRightIcon />
              </Box>
            </Box>
            <Box sx={{ padding: "10px" }} className="wgcard">
              <img
                src="https://res.cloudinary.com/dm9tstije/image/upload/v1682441552/gdfhome/reports-default-1_uxbqyz.svg"
                alt="workinggroup"
                width="352"
                height="162"
              />
              <Typography
                variant="h3"
                sx={{ fontSize: "20px", color: "#000", marginTop: "10px" }}
              >
                STABLECOINS Code Refresh
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "#2C9498",
                  fontSize: "16px",
                  marginTop: "10px",
                }}
              >
                <Typography variant="span">View more</Typography>
                <ChevronRightIcon />
              </Box>
            </Box>
          </Slider>
        </Container>
      </Box>
    </>
  );
}
