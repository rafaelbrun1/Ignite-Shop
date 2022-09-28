import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: { 
    marginTop: '5rem',
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': { 
      color: '$green300'
    }
  }
});

export const ImageContainer = styled("div", {
  width: 145,
  zIndex: 1,
  height: 145,
  background: "linear-gradient(188deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 999,
  padding: "0.25rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});

export const Images = styled("div",{  
  display: 'flex',
  marginTop: '4rem',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
})