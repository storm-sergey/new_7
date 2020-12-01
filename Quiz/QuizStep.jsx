import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import QuizButton from "./QuizButton";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";

const QuizStep = (props) => {
  const renderAnswer = (answer, id, handler) => (
    <QuizButton
      key={id}
      title={answer.title}
      value={answer.value}
      handler={handler}
    />
  );

  return (
    <Container>
      <Paper outlined square={true}>
      <Typography style={{ textAlign: "center", padding: "20px" }}>
        {props.quest.question}
      </Typography>
      
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        {props.quest.answers.map((answer, id) =>
          renderAnswer(answer, id, props.handler)
        )}
        {/* TODO: <Button
          style={{ fontSize: "1.5em", margin: "5px", lineHeight: "0.70" }}
          variant="contained"
          size="small"
        >
          ⤺
        </Button> */}
      </Grid>
      </Paper>
    </Container>
  );
};

export default QuizStep;
