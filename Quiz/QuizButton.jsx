import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

const style = {
  marginTop: "4.1px",
  marginBottom: "4.1px",
};

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(orange[300]),
    backgroundColor: orange[300],
    "&:hover": {
      backgroundColor: orange.A400,
    },
  },
}))(Button);

const QuizButton = (props) => {
  return (
    <TransitionGroup
    className="container"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
    >
      <ColorButton
        fullWidth
        style={style}
        variant="contained"
        color="primary"
        key={props.id}
        onClick={() => props.handler(props.value)}
      >
        {props.title}
      </ColorButton>
    </TransitionGroup>
  );
};

QuizButton.propTypes = {
  title: PropTypes.string.isRequired
};

export default QuizButton;
