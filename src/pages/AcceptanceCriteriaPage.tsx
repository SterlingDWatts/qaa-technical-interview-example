import React from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const AcceptanceCriteriaPage = () => (
  <Container>
    <Box maxWidth="lg" sx={{ margin: "0px auto" }}>
      <Typography variant="h1" component="h1">
        QA FORM
      </Typography>
      <Typography variant="h2" component="h2">
        User Story
      </Typography>
      <Typography variant="body1" component="p">
        As a marketer I would like a survey on the site so that I can get more
        information about our users.
      </Typography>
      <Typography variant="h2" component="h2">
        Build Description
      </Typography>
      <Typography variant="body1" component="p">
        On the main page one of the blocks will be used to launch a new dialogue
        to learn more about our users. Clicking the block, launches the dialog.
        The dialog has three screens. The first two screens collect a different
        piece of information. The screens are conversational in tone to seem
        warm to the users. This dialog should launch on page load to be visible
        to the maximum number of users
      </Typography>
      <Typography variant="h2" component="h2">
        Acceptance Criteria
      </Typography>
      <ul>
        <Typography variant="body1" component="li">
          Dialog component for survey shows on page load
        </Typography>
        <Typography variant="body1" component="li">
          Clicking the &quot;x&quot; icon at any point in the survey, closes the
          dialog
        </Typography>
        <Typography variant="body1" component="li">
          Block with &quot;Dog wrapped in blanket&quot; image with &quot;GETTING
          TO KNOW YOU SURVEY&quot; is on the main page
        </Typography>
        <Typography variant="body1" component="li">
          Clicking &quot;GETTING TO KNOW YOU SURVEY&quot; or &quot;Dog wrapped
          in blanket&quot; opens dialog on first screen (Screen that says
          &quot;Hello!&quot; at the top)
        </Typography>
        <Typography variant="body1" component="li">
          Information from inputs should persist when using prev/next buttons
        </Typography>
      </ul>
      <Typography variant="h3" component="h3">
        Dialog
      </Typography>
      <ul>
        <Box component="li">
          <Typography variant="h6" component="h6">
            Title
          </Typography>
          <ul>
            <Typography variant="body1" component="li">
              Font Size: 20px
            </Typography>
            <Typography variant="body1" component="li">
              Font Weight: 500
            </Typography>
          </ul>
        </Box>
        <Box component="li">
          <Typography variant="h6" component="h6">
            Copy
          </Typography>
          <ul>
            <Typography variant="body1" component="li">
              Font Size: 14px
            </Typography>
            <Typography variant="body1" component="li">
              Font Weight: 400
            </Typography>
          </ul>
        </Box>
        <Box component="li">
          <Typography variant="h6" component="h6">
            Prev/Next/Close Buttons
          </Typography>
          <ul>
            <Typography variant="body1" component="li">
              Font Size: 14px
            </Typography>
            <Typography variant="body1" component="li">
              Font Weight: 500
            </Typography>
            <Typography variant="body1" component="li">
              Color: rgba(4, 20, 35, 0.294)
            </Typography>
            <Typography variant="body1" component="li">
              Color when disabled: rgba(0, 0, 0, 0.9)
            </Typography>
            <Typography variant="body1" component="li">
              Button is disabled if there is an input field and it is empty
            </Typography>
            <Typography variant="body1" component="li">
              Clicking the button adds data to the dataLayer
            </Typography>
          </ul>
        </Box>
        <Box component="li">
          <Typography variant="h6" component="h6">
            X icon (close button)
          </Typography>
          <ul>
            <Typography variant="body1" component="li">
              Clicking button closes dialog. Dialog should start on first screen
              when opened again
            </Typography>
          </ul>
        </Box>
        <Box component="li">
          <Typography variant="h3" component="h3">
            First Screen
          </Typography>
          <ul>
            <Typography variant="body1" component="li">
              Title: &quot;Hello!&quot;
            </Typography>
            <Typography variant="body1" component="li">
              Copy: &quot;Let&apos;s get to know each other. What is your
              name?&quot;
            </Typography>
            <Typography variant="body1" component="li">
              Input: text input for name
            </Typography>
            <Typography variant="body1" component="li">
              Button: &quot;NEXT&quot;
            </Typography>
          </ul>
        </Box>
        <Box component="li">
          <Typography variant="h3" component="h3">
            Second Screen
          </Typography>
          <ul>
            <Typography variant="body1" component="li">
              Title: &quot;Nice to meet you [name]!&quot;
            </Typography>
            <Typography variant="body1" component="li">
              Copy: &quot;What is your favorite single digit integer?&quot;
            </Typography>
            <Typography variant="body1" component="li">
              Input: number input for favorite number
            </Typography>
            <Typography variant="body1" component="li">
              Button: &quot;Prev&quot; & &quot;NEXT&quot;
            </Typography>
          </ul>
        </Box>
        <Box component="li">
          <Typography variant="h3" component="h3">
            Last Screen
          </Typography>
          <ul>
            <Typography variant="body1" component="li">
              Title: &quot;Thanks for sharing, [name]!&quot;
            </Typography>
            <Typography variant="body1" component="li">
              Copy: &quot;My favorite number is 3, but [favorite-number] is a
              pretty cool number too! Have a great day [name].&quot; or
              &quot;That&apos;s cool! 3 is my favorite number as well. Have a
              great day [name].&quot;
            </Typography>
            <Typography variant="body1" component="li">
              Button: &quot;Prev&quot; & &quot;CLOSE&quot;
            </Typography>
          </ul>
        </Box>
      </ul>
    </Box>
  </Container>
);

export default AcceptanceCriteriaPage;
