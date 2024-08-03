import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { CartContext, ItemContext, BadgeContext } from "../App";

function ItemCard({ itemData, index }) {
  const { cartState, setCartState } = useContext(CartContext);
  const { itemState, setItemState } = useContext(ItemContext);
  const { badgeState, setBadgeState } = useContext(BadgeContext);

  const isInCart = cartState.includes(itemData.id);

  const handleClick = () => {
    if (
      itemData.button === "Add to cart" ||
      itemData.button === "Remove from cart"
    ) {
      if (isInCart) {
        // Remove from cart
        setCartState(cartState.filter((item) => item !== itemData.id));
        setBadgeState(badgeState - 1);
      } else {
        // Add to cart
        setCartState([...cartState, itemData.id]);
        setBadgeState(badgeState + 1);
      }
    }
  };

  return (
    <Card sx={{ maxWidth: 300, height: 350, display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        title="green iguana"
      />
      <CardContent sx={{ textAlign: "center", flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {itemData.title}
        </Typography>
        <Typography>
          {itemData.rating}
        </Typography>
        <Typography >
          {itemData.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "center", padding: 2 }}>
        <Button size="small" onClick={handleClick}>
          {itemData.button === "Add to cart" ||
          itemData.button === "Remove from cart"
            ? isInCart
              ? "Remove from cart"
              : "Add to cart"
            : itemData.button}
        </Button>
      </CardActions>
    </Card>
  );
}

export { ItemCard };
