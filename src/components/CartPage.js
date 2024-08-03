import { useContext } from "react";
import { CartContext } from "../App";
import CardData from "../data/CardData";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import CardActions from "@mui/material/CardActions";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function CartPage() {
  const { cartState, setCartState } = useContext(CartContext);
  console.log("cartState from CartPage function", cartState);
  // console.log("CardData", CardData);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>WELCOME TO CART PAGE</h1>

      <Container maxWidth="lg" style={{ marginTop: "50px" }}>
        <Grid container spacing={3}>
          {cartState.map((data, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <CartCard key={index} data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export { CartPage };

function CartCard({ data }) {
  //Assuming data is an index or key that can be used directly on CardData
  // const index = data - 1;
  // return (
  //   <div className="card-container">
  //     <div className="card">
  //       <div>{CardData[index].title}</div>
  //       <div>{CardData[index].price}</div>
  //     </div>
  //   </div>
  // );
  console.group("data from CartCard function", data);
  const index = data - 1;
  console.log("index", index);
  return (
    <Card
      sx={{
        maxWidth: 300,
        height: 350,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        title="green iguana"
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography gutterBottom variant="h5" component="div">
          {CardData[index].title}
        </Typography>
        <Typography>{CardData[index].rating}</Typography>
        <Typography>{CardData[index].price}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}></CardActions>
    </Card>
  );
}
