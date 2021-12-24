import styles from "./EaseButton.module.css";
import PropTypes from "prop-types";

const EaseButton = ({
  className,
  textColor,
  backgroundColor,
  hoverColor,
  borderRadius,
  type,
  ...props
}) => {
  return (
    <button
      type={type !== null ? type : "button"}
      {...props}
      className={styles.buttonWrapper}
      style={{
        "--bg-color": `${backgroundColor}`,
        "--bg-color-hover": `${hoverColor}`,
        "--text-color": `${textColor}`,
        borderRadius: `${borderRadius}`,
      }}
    />
  );
};

EaseButton.propTypes = {
  className: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

EaseButton.defaultProps = {
  className: "",
  color: "",
};

export default EaseButton;
