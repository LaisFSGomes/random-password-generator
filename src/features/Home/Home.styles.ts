import { styled } from "@mui/system";
import { Box, Slider, Typography } from "@mui/material";

export const HomeWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    border: "1px solid #555",
    width: "60%",
    padding: "5rem",
    alignSelf: "center",
    "@media (max-width: 600px)": {
        width: "80%",
        padding: "5rem 1rem",
    },
    "@media (max-width: 300px)": {
        width: "calc(100% - 2rem)",
        padding: "2rem 0rem",
    },
});
export const SliderWrapper = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
});
export const SliderPasswordLength = styled(Slider)({
    "& .MuiSlider-mark": {
        backgroundColor: "#EE7336",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
    },
    "& 	.MuiSlider-track": {
        backgroundColor: "#F956B3",
        border: "1px solid #F956B3",
    },
    "& 	.MuiSlider-rail": {
        backgroundColor: "red",
    },
    "& .MuiSlider-thumb": {
        backgroundColor: "#EE7336",
        "&:hover": {
            boxShadow: "0px 0px 0px 8px rgba(238,115,54, 0.16)",
        },
    },
    "& .Mui-active": {
        "&:hover": {
            boxShadow: "0px 0px 0px 8px rgba(238,115,54, 0.4)",
        },
    },
    },
);
export const LabelSlider = styled(Typography)({

});