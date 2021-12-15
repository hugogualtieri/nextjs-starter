import styles from "./EaseButton.module.css";
import { string } from "prop-types";

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
  className: string,
  color: string,
};

EaseButton.defaultProps = {
  className: "",
  color: "",
};

export default EaseButton;
