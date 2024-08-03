import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useContext, useState } from "react";
import CardData from "../data/CardData.json";
import { ItemCard } from "./ItemCard";
import { BadgeContext } from "../App";

function AllCards() {
  const { badgeState, setBadgeState } = useContext(BadgeContext);
  return (
    <Container maxWidth="lg" style={{ marginTop: "50px" }}>
      <Grid container spacing={3}>
        {CardData.map((itemData, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ItemCard itemData={itemData} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export { AllCards };
