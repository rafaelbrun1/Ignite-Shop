import { styled } from "..";

export const Sidebar = styled("aside", {
  width: "30rem",
  height: "100vh",
  backgroundColor: "$gray800",
  gap: 2,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  overflow: 'visible',
  justifyContent: 'space-between',
  position: "absolute",
  zIndex: "1",
  right: "0",
  boxShadow: "-4px 0px 30px 0px #000000CC",

  h1: {
    marginTop: 72,
    fontWeight: 700,
    fontSize: 20,
  },
});

export const ButtonX = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 15,
  height: 15,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  position: "absolute",
  right: 24,
  top: 24,
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 94,
  height: 94,
  background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const TshirtContainer = styled("div", {
  display: "flex",
  gap: 20,
  alignItems: "center",
  marginTop: '2rem',
});

export const ProductInfoContainer = styled("div", {
  display: "flex",
  flex: 1,
  flexDirection: "column",
  gap: 15,
  justifyContent: "flex-start",

  span: {
    fontWeight: 400,
    fontSize: 18,
    color: "$gray300",
  },

  strong: {
    fontWeight: 700,
    fontSize: 18,
    color: "$gray100",
  },

  button: {
    cursor: "pointer",
    backgroundColor: "transparent",
    border: "transparent",
    display: "flex",
    justifyContent: "flex-start",
    color: "$green500",
    fontWeight: 700,
    fontSize: 16,
  },
});

export const CartInfo = styled("div", {
  display: "flex",
  alignItems: 'center',
  gap: 7,
  width: "30rem",
  flexDirection: "column",
});

export const Quantity = styled("div", {
  display: "flex",
  gap: 75,
  justifyContent: "space-around",
  alignItems: "center",

  span: {
    fontWeight: 400,
    fontSize: 16,
  },
});

export const Total = styled("div", {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 75,
  strong: {
    fontWeight: 700,
    fontSize: 18,
  },
});

export const BuyButton = styled("button", {
  backgroundColor: "$green500",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 700,
  fontSize: 18,
  color: "$white",
  width: "90%",
  borderRadius: 8,
  height: 69,
  border: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$green300",
  },
});

export const TshirtC = styled('div', { 
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  justifyContent: 'flex-start',
})
