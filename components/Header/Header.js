import React from "react";
import { useRouter } from "next/router";
import { Box, Button, Stack, Typography } from "@mui/material";

function Header({ headline, back }) {
  const router = useRouter();

  return (
    <>
      {back ? (
        <Button
          size="small"
          sx={{
            color: "black",
            textTransform: "none",
            position: "absolute",
            top: "5%",
            left: "17%",
          }}
          onClick={() => router.back()}
        >
          {"< Back"}
        </Button>
      ) : null}

      <Box display="flex" justifyContent="center">
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="h4">{headline}</Typography>
        </Stack>
      </Box>
    </>
  );
}

export default Header;
