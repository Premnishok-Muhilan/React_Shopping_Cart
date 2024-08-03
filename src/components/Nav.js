import * as React from "react";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { CartPage } from "./CartPage";
import { useContext } from "react";

import { BadgeContext } from "../App";

function Nav() {
  const { badgeState, setBadgeState } = useContext(BadgeContext);
  return (
    <header>
      <div className="header-container">
        <div>Start Bootstrap</div>
        <div>Home</div>
        <div>About</div>
        <div>Shop</div>
        <div>
          <Link to="/CartPage" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              style={{
                border: "2px solid black",
                display: "flex",
                justifyContent: "space-between",
                position: "relative",
              }}
              sx={{
                width: "150px",
                height: "40px",
                padding: "10px 20px",
                fontSize: "16px",
              }}
              onClick={() => {
                <CartPage />;
              }}
            >
              <ShoppingCartIcon style={{ color: "black" }} />
              <span style={{ color: "black" }}>Cart</span>
              <Badge
                badgeContent={`${badgeState}`}
                color="secondary"
                overlap="rectangle"
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "black",
                    color: "white",
                    border: "1px solid black", 
                    borderRadius: "70%", 
                    minWidth: "20px", 
                    height: "20px", 

                    margin: "0px",
                    position: "absolute",
                    bottom: "-10px",
                    left: "-5px",
                    marginRight: "2px",
                  },
                }}
              />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export { Nav };
